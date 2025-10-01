// Professional, robust carousel for hero section
// Features: auto-slide, navigation, touch, accessibility

document.addEventListener('DOMContentLoaded', function(){
  const carousel = document.querySelector('.hero-carousel');
  if(!carousel) return;
  const slides = Array.from(carousel.querySelectorAll('.slide'));
  let current = slides.findIndex(s => s.classList.contains('active'));
  let timer = null;
  const interval = 7000;

  // Navigation dots
  const nav = document.createElement('div');
  nav.className = 'carousel-nav';
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === current ? ' active' : '');
    dot.setAttribute('aria-label', 'Ir para slide ' + (i+1));
    dot.onclick = () => goTo(i);
    nav.appendChild(dot);
  });
  carousel.appendChild(nav);

  function goTo(idx){
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === idx);
      s.setAttribute('aria-hidden', i !== idx);
    });
    Array.from(nav.children).forEach((d, i) => d.classList.toggle('active', i === idx));
    current = idx;
    resetTimer();
  }

  function next(){
    goTo((current+1)%slides.length);
  }
  function prev(){
    goTo((current-1+slides.length)%slides.length);
  }

  function resetTimer(){
    if(timer) clearTimeout(timer);
    timer = setTimeout(next, interval);
  }

  // Keyboard navigation
  carousel.tabIndex = 0;
  carousel.addEventListener('keydown', e => {
    if(e.key === 'ArrowRight') next();
    if(e.key === 'ArrowLeft') prev();
  });

  // Touch navigation
  let startX = null;
  carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  carousel.addEventListener('touchend', e => {
    if(startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if(Math.abs(dx) > 40){
      if(dx < 0) next();
      else prev();
    }
    startX = null;
  });

  resetTimer();
});
