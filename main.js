// (() => {
//   const back  = document.querySelector('.para-wrap.back');
//   const front = document.querySelector('.para-wrap.front');
//   const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

//   // Tune these for more/less depth
//   const depthBack  = -0.45;    // slower (further away)
//   const depthFront = -0.6;    // faster (closer)

//   function setParallax(y){
//     // Keep X center fixed; only shift Y
//     back.style.transform = `translate(-50%,-50%) translateY(${ y * depthBack }px)`;
//     front.style.transform = `translate(-50%,-50%) translateY(${ y * depthFront }px)`;
//   }

//   let ticking = false;
//   function onScroll(){
//     if (ticking || reduce) return;
//     ticking = true;
//     requestAnimationFrame(() => {
//       setParallax(window.scrollY || window.pageYOffset);
//       ticking = false;
//     });
//   }

//   window.addEventListener('scroll', onScroll, {passive:true});
//   // initial position
//   setParallax(window.scrollY || window.pageYOffset);

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
// })();


// (() => {
//   const back  = document.querySelector('.para-wrap.back');
//   const front = document.querySelector('.para-wrap.front');
//   const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

//   // Tune depth factors for more/less separation
//   const depthBack  = 0.06;  // feels distant
//   const depthFront = 0.12;  // feels closer

//   function setParallax(y){
//     back .style.transform = `translate(-50%,-50%) translateY(${ y * depthBack }px)`;
//     front.style.transform = `translate(-50%,-50%) translateY(${ y * depthFront }px)`;
//   }

//   let ticking = false;
//   function onScroll(){
//     if (ticking || reduce) return;
//     ticking = true;
//     requestAnimationFrame(() => {
//       setParallax(window.scrollY || window.pageYOffset);
//       ticking = false;
//     });
//   }

//   window.addEventListener('scroll', onScroll, { passive: true });
//   setParallax(window.scrollY || window.pageYOffset);
// })();

