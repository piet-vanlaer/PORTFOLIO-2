  document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // reveal only once
        }
      });
    }, {
      threshold: 0.1
    });
  
    reveals.forEach(el => observer.observe(el));
  });

  document.addEventListener('DOMContentLoaded', () => {
    // copy button
    const btn = document.querySelector('#contact .copy');
    if (btn) {
      btn.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(btn.dataset.copy); btn.textContent = 'Copied!'; setTimeout(()=>btn.textContent='Copy',1200); }
        catch { btn.textContent = 'Oops'; setTimeout(()=>btn.textContent='Copy',1200); }
      });
    }
  
    // simple reveal
    const panel = document.querySelector('#contact .contact-panel');
    if (panel) {
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { panel.classList.add('revealed'); io.disconnect(); }
      }, {threshold:.2});
      io.observe(panel);
    }
  });
