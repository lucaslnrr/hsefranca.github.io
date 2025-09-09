
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('[data-menu]');
  const nav = document.querySelector('.nav');
  if (navToggle && nav){
    navToggle.addEventListener('click', () => nav.classList.toggle('open'));
    // Close menu when clicking a link (mobile UX)
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
    }));
  }

  // Simple filter pills (if present)
  const pills = document.querySelectorAll('.filters .pill');
  const cards = document.querySelectorAll('[data-cat]');
  if (pills.length){
    pills.forEach(p => p.addEventListener('click', () => {
      pills.forEach(x => x.classList.remove('active'));
      p.classList.add('active');
      const cat = p.getAttribute('data-filter');
      cards.forEach(c => {
        c.style.display = (cat === 'all' || c.dataset.cat.includes(cat)) ? '' : 'none';
      });
    }));
  }

  // Footer year
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
});
