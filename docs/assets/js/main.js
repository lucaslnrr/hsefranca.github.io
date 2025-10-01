document.addEventListener('DOMContentLoaded', function(){
  // Card reveal animations
  function initCardReveals(root){
    try{
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const scope = root || document;
      const cards = Array.from(scope.querySelectorAll('.cards .card'));
      if(cards.length === 0) return;
      // If reduced motion, show immediately
      if(prefersReduced || !('IntersectionObserver' in window)){
        cards.forEach(c => c.classList.add('is-visible'));
        return;
      }
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const el = entry.target;
          if(entry.isIntersecting){
            el.classList.add('is-visible');
            // Stop observing once visible
            io.unobserve(el);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

      // Helper to compute direction per card relative to container center
      const containers = new Map();
      function getContainer(el){
        const wrap = el.closest('.cards');
        if(!wrap) return null;
        if(!containers.has(wrap)) containers.set(wrap, { el: wrap, rect: wrap.getBoundingClientRect(), centerX: wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width/2 });
        return containers.get(wrap);
      }
      function assignDirection(card){
        const c = getContainer(card);
        if(!c) return 0;
        const r = card.getBoundingClientRect();
        const mid = r.left + r.width/2;
        const dx = mid - c.centerX;
        // Map to -1, 0, 1 with a small deadzone
        const dead = Math.max(12, r.width * 0.05);
        return (dx > dead) ? 1 : (dx < -dead ? -1 : 0);
      }

      // Assign reveal class, stagger, and direction
      let i = 0;
      cards.forEach(card => {
        const hidden = card.hasAttribute('hidden') || (getComputedStyle(card).display === 'none');
        if(hidden) return;
        card.classList.add('reveal');
        card.classList.remove('is-visible');
        card.style.setProperty('--reveal-i', String(i++));
        const dir = assignDirection(card);
        card.style.setProperty('--reveal-dir', String(dir));
        io.observe(card);
      });

      // On resize, refresh container metrics and directions for cards not yet visible
      let resizeTimer;
      function refreshDirections(){
        containers.forEach((val, key) => { val.rect = key.getBoundingClientRect(); val.centerX = val.rect.left + val.rect.width/2; });
        cards.forEach(card => {
          if(card.classList.contains('is-visible')) return;
          const dir = assignDirection(card);
          card.style.setProperty('--reveal-dir', String(dir));
        });
      }
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(refreshDirections, 100);
      }, { passive:true });
    }catch(_){ /* no-op in very old browsers */ }
  }

  // Mobile menu
  const btn = document.querySelector('[data-menu]');
  const nav = document.querySelector(btn?.dataset?.target || '#site-nav');
  if(btn && nav){
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.documentElement.classList.toggle('no-scroll', open);
    });
    // Close menu when a nav link is clicked (mobile)
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.documentElement.classList.remove('no-scroll');
    }));
  }

  // ===== Hero Carousel =====
  const carousel = document.querySelector('.hero-carousel');
  if(carousel){
    let slides = Array.from(carousel.querySelectorAll('.slide'));
    let controls = carousel.querySelector('.carousel-controls');
    if(!controls){
      controls = document.createElement('div');
      controls.className = 'carousel-controls';
      const prevBtn = document.createElement('button');
      prevBtn.className = 'ctrl prev'; prevBtn.setAttribute('data-prev',''); prevBtn.setAttribute('aria-label','Slide anterior'); prevBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15 18l-6-6 6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      const dotsWrap = document.createElement('div');
      dotsWrap.className = 'dots';
      const nextBtn = document.createElement('button');
      nextBtn.className = 'ctrl next'; nextBtn.setAttribute('data-next',''); nextBtn.setAttribute('aria-label','Próximo slide'); nextBtn.textContent = '›';
      controls.append(prevBtn, dotsWrap, nextBtn);
      carousel.appendChild(controls);
    }

    // Build dots dynamically based on number of slides
    const dotsWrap = controls.querySelector('.dots');
    dotsWrap.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = 'dot';
      dot.setAttribute('data-go', String(idx));
      dot.setAttribute('aria-label', `Ir para o slide ${idx+1}`);
      dotsWrap.appendChild(dot);
    });

    const dots = Array.from(dotsWrap.querySelectorAll('.dot'));
    let i = 0, timer = null;
    let INTERVAL = 10000; // 10s
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(prefersReduced){ INTERVAL = 0; }
    carousel.style.setProperty('--carousel-interval', INTERVAL + 'ms');

    // ARIA labels for slides
    (function labelSlides(){
      const total = slides.length;
      slides.forEach((s, idx) => {
        s.setAttribute('role','group');
        s.setAttribute('aria-roledescription','slide');
        s.setAttribute('aria-label', `Slide ${idx+1} de ${total}`);
      });
    })();

    function setDir(dir){
      const isNext = dir === 'next';
      const isPrev = dir === 'prev';
      carousel.classList.toggle('is-next', isNext);
      carousel.classList.toggle('is-prev', isPrev);
    }

    function applyTheme(){
      try{
        const active = slides[i];
        if(!active) return;
        const isLight = active.classList.contains('light');
        carousel.setAttribute('data-theme', isLight ? 'light' : 'dark');
      }catch(_){ }
    }

    function go(n){
      i = (n + slides.length) % slides.length;
      slides.forEach((s, idx) => {
        const active = idx === i;
        s.classList.toggle('active', active);
        s.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      applyTheme();
      dots.forEach((d, idx) => {
        const active = idx === i;
        d.classList.toggle('active', active);
        d.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      restart();
    }

    function next(){ setDir('next'); go(i + 1); }
    function prev(){ setDir('prev'); go(i - 1); }

    function restart(){
      if(timer) clearInterval(timer);
      if(INTERVAL > 0){
        timer = setInterval(next, INTERVAL);
      }
    }

    const nextEl = controls.querySelector('[data-next]');
    const prevEl = controls.querySelector('[data-prev]');
    if(prevEl) prevEl.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15 18l-6-6 6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    if(nextEl) nextEl.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    nextEl?.addEventListener('click', next);
    prevEl?.addEventListener('click', prev);
    dots.forEach(d => d.addEventListener('click', (e) => {
      const n = parseInt(e.currentTarget.getAttribute('data-go'), 10);
      if (Number.isNaN(n) || n === i) return;
      const diff = (n - i + slides.length) % slides.length;
      setDir(diff === 0 ? 'next' : (diff <= slides.length/2 ? 'next' : 'prev'));
      go(n);
    }));

    // Pause on hover (desktop)
    carousel.addEventListener('mouseenter', () => { if(timer) clearInterval(timer); });
    carousel.addEventListener('mouseleave', restart);

    // Pause when not visible or off-screen
    document.addEventListener('visibilitychange', () => { if(document.hidden){ if(timer) clearInterval(timer); } else { restart(); } });
    try{
      const io = new IntersectionObserver((entries)=>{
        const e = entries[0]; if(!e) return;
        if(e.isIntersecting) restart(); else if(timer) clearInterval(timer);
      }, { threshold: .5 });
      io.observe(carousel);
    }catch(_){ }

    // Swipe support (touch & pointer)
    let startX = null, startY = null, dx = 0, dy = 0, swiping = false;
    const THRESHOLD = 40; // px to trigger swipe

    function getPoint(e){
      if (e.touches && e.touches[0]) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      if (e.changedTouches && e.changedTouches[0]) return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
      return { x: e.clientX, y: e.clientY };
    }

    function onStart(e){
      const p = getPoint(e);
      startX = p.x; startY = p.y; dx = 0; dy = 0; swiping = true;
    }
    function onMove(e){
      if(!swiping) return;
      const p = getPoint(e);
      dx = p.x - startX; dy = p.y - startY;
    }
    function onEnd(){
      if(!swiping) return;
      if (Math.abs(dx) > THRESHOLD && Math.abs(dx) > Math.abs(dy)){
        if (dx < 0) next(); else prev();
      }
      swiping = false; dx = dy = 0;
    }

    // Pointer events
    carousel.addEventListener('pointerdown', onStart);
    carousel.addEventListener('pointermove', onMove);
    carousel.addEventListener('pointerup', onEnd);
    carousel.addEventListener('pointercancel', onEnd);
    // Touch events (fallback)
    carousel.addEventListener('touchstart', onStart, {passive:true});
    carousel.addEventListener('touchmove', onMove, {passive:true});
    carousel.addEventListener('touchend', onEnd);
    carousel.addEventListener('touchcancel', onEnd);

    // Init
    go(0);
    applyTheme();
  }

  // ===== Services filters (Serviços page) =====
  const servSection = document.getElementById('servicos');
  const filtersWrap = servSection?.querySelector('.filters');
  const cardsGrid = servSection?.querySelector('.cards');
  if(filtersWrap && cardsGrid){
    const pills = Array.from(filtersWrap.querySelectorAll('.pill'));
    const cards = Array.from(cardsGrid.querySelectorAll('.card[data-cat]'));

    function applyFilter(cat){
      const target = cat && pills.find(p => p.dataset.filter === cat) ? cat : 'all';
      pills.forEach(p => {
        const isActive = (p.dataset.filter === target) || (target === 'all' && p.dataset.filter === 'all');
        p.classList.toggle('active', isActive);
        p.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      cards.forEach(c => {
        const cats = (c.getAttribute('data-cat') || '').split(/\s+/);
        const show = target === 'all' || cats.includes(target);
        c.style.display = show ? '' : 'none';
        c.toggleAttribute('hidden', !show);
        c.setAttribute('aria-hidden', show ? 'false' : 'true');
      });
    }

    // Delegated click + keyboard support
    function onActivatePill(el){
      const cat = el?.dataset?.filter || 'all';
      applyFilter(cat);
      const id = el.id || cat;
      try { if(id) history.replaceState(null, '', `#${id}`); } catch(e){}
    }
    filtersWrap.addEventListener('click', (e) => {
      const pill = e.target.closest?.('.pill');
      if(pill && filtersWrap.contains(pill)) onActivatePill(pill);
    });
    filtersWrap.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        const pill = e.target.closest?.('.pill');
        if(pill && filtersWrap.contains(pill)){
          e.preventDefault();
          onActivatePill(pill);
        }
      }
    });

    // Initialize based on hash (e.g., #programas, #laudos, #treinamentos, #esocial)
    function initFromHash(){
      const raw = (location.hash || '').replace('#','').toLowerCase();
      const cat = ['programas','laudos','treinamentos','esocial','all','todos'].includes(raw)
        ? (raw === 'todos' ? 'all' : raw)
        : 'all';
      applyFilter(cat);
    }
    window.addEventListener('hashchange', initFromHash);
    initFromHash();
  }
  
  // ===== Merged Áreas + Soluções toggle =====
  const merged = document.getElementById('atuacao-solucoes');
  if(merged){
    const pills = Array.from(merged.querySelectorAll('.filters .pill'));
    const viewAreas = merged.querySelector('.view-areas');
    const viewSolucoes = merged.querySelector('.view-solucoes');
    function show(view){
      const isAreas = view === 'areas';
      merged.dataset.view = isAreas ? 'areas' : 'solucoes';
      viewAreas.toggleAttribute('hidden', !isAreas);
      viewSolucoes.toggleAttribute('hidden', isAreas);
      pills.forEach(p => {
        const active = p.dataset.view === view;
        p.classList.toggle('active', active);
        p.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      // Re-init reveals for the now-visible view
      initCardReveals(isAreas ? viewAreas : viewSolucoes);
    }
    merged.querySelector('.filters')?.addEventListener('click', (e) => {
      const pill = e.target.closest?.('.pill');
      if(!pill) return;
      show(pill.dataset.view || 'areas');
    });
    merged.querySelector('.filters')?.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        const pill = e.target.closest?.('.pill');
        if(!pill) return;
        e.preventDefault();
        show(pill.dataset.view || 'areas');
      }
    });
    // Init from hash (optional): #solucoes or #areas
    const raw = (location.hash || '').replace('#','').toLowerCase();
    show(raw === 'solucoes' ? 'solucoes' : 'areas');
  }
  // Initial reveals across the page (outside merged section as well)
  initCardReveals();
});

  // Arrow keys navigation
  document.addEventListener('keydown', function(e){
    const c = document.querySelector('.hero-carousel');
    if(!c) return;
    if(e.key === 'ArrowRight'){ c.querySelector('[data-next]')?.click(); }
    if(e.key === 'ArrowLeft'){ c.querySelector('[data-prev]')?.click(); }
  });
