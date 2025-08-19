// Mobile nav + year + optional reveal
document.addEventListener('DOMContentLoaded', () => {
    // Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('site-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const open = nav.style.display === 'flex';
        nav.style.display = open ? 'none' : 'flex';
        toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    }
  
    // Year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  
    // Reveal on scroll (add "reveal" to elements you want)
    const els = document.querySelectorAll('.reveal');
    if (els.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('active');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
      els.forEach(el => io.observe(el));
    }
  });
  