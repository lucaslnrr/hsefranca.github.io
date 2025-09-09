document.addEventListener('DOMContentLoaded', function(){
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
      // Add play/pause button
      const playBtn = document.createElement('button');
      playBtn.className = 'play'; playBtn.setAttribute('aria-label','Pausar reprodução automática'); playBtn.setAttribute('data-playing','true');
      playBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 6h2v12h-2zM16 6h2v12h-2z" fill="#fff"/></svg>';
      controls.appendChild(playBtn);
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

    function go(n){
      i = (n + slides.length) % slides.length;
      slides.forEach((s, idx) => {
        const active = idx === i;
        s.classList.toggle('active', active);
        s.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      dots.forEach((d, idx) => {
        const active = idx === i;
        d.classList.toggle('active', active);
        d.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      restart();
    }

    function next(){ go(i + 1); }
    function prev(){ go(i - 1); }

    function restart(){
      if(timer) clearInterval(timer);
      if(INTERVAL > 0 && isPlaying()){
        timer = setInterval(next, INTERVAL);
      }
    }

    const nextEl = controls.querySelector('[data-next]');
    const prevEl = controls.querySelector('[data-prev]');
    if(prevEl) prevEl.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15 18l-6-6 6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    if(nextEl) nextEl.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    let playEl = controls.querySelector('.play');
    if(!playEl){
      playEl = document.createElement('button');
      playEl.className = 'play'; playEl.setAttribute('aria-label','Pausar reprodução automática'); playEl.setAttribute('data-playing','true');
      playEl.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 6h2v12h-2zM16 6h2v12h-2z" fill="#fff"/></svg>';
      controls.appendChild(playEl);
    }
    nextEl?.addEventListener('click', next);
    prevEl?.addEventListener('click', prev);
    function isPlaying(){ return (playEl?.getAttribute('data-playing') !== 'false'); }
    function pause(){ if(timer) clearInterval(timer); playEl?.setAttribute('data-playing','false'); playEl?.setAttribute('aria-label','Reproduzir automaticamente'); if(playEl){ playEl.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8 5v14l11-7-11-7z" fill="#fff"/></svg>'; } }
    function play(){ playEl?.setAttribute('data-playing','true'); playEl?.setAttribute('aria-label','Pausar reprodução automática'); if(playEl){ playEl.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 6h2v12h-2zM16 6h2v12h-2z" fill="#fff"/></svg>'; } restart(); }
    playEl?.addEventListener('click', () => { isPlaying() ? pause() : play(); });
    dots.forEach(d => d.addEventListener('click', (e) => {
      const n = parseInt(e.currentTarget.getAttribute('data-go'), 10);
      if (!Number.isNaN(n)) go(n);
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
    if(prefersReduced){ pause(); }
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
});

  // Arrow keys navigation
  document.addEventListener('keydown', function(e){
    const c = document.querySelector('.hero-carousel');
    if(!c) return;
    if(e.key === 'ArrowRight'){ c.querySelector('[data-next]')?.click(); }
    if(e.key === 'ArrowLeft'){ c.querySelector('[data-prev]')?.click(); }
  });
