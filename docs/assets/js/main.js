// Simple filter and mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('[data-menu]');
  const nav = document.querySelector('.nav');
  if (navToggle) {
    navToggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  const pills = document.querySelectorAll('.filters .pill');
  const cards = document.querySelectorAll('[data-cat]');
  pills.forEach(p => p.addEventListener('click', () => {
    pills.forEach(x => x.classList.remove('active'));
    p.classList.add('active');
    const cat = p.getAttribute('data-filter');
    cards.forEach(c => {
      c.style.display = (cat === 'all' || c.dataset.cat.includes(cat)) ? '' : 'none';
    });
  }));
});
