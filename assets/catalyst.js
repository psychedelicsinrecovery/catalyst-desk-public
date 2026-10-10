/* ☄️ C.A.T.A.L.Y.S.T. chalkboard: reveal-on-scroll, chalk draw-on, lightbox, copy chips. No trackers, no storage. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal sections (and draw their chalk) as they scroll into view.
  const els = document.querySelectorAll('.reveal');
  const showAll = () => els.forEach((el) => el.classList.add('in'));
  addEventListener('beforeprint', showAll);
  // Background tabs, prerenders and link previews never fire the observer: show everything there, no animation.
  if (reduce || document.hidden || !('IntersectionObserver' in window)) showAll();
  else {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => io.observe(el));
  }

  // Lightbox for the chalkboard gallery.
  const dlg = document.querySelector('dialog.lightbox');
  if (dlg && typeof dlg.showModal === 'function') {
    const img = dlg.querySelector('img');
    const cap = dlg.querySelector('p');
    document.querySelectorAll('.art[data-full]').forEach((b) => b.addEventListener('click', () => {
      img.src = b.dataset.full;
      img.alt = b.querySelector('img')?.alt || '';
      cap.textContent = b.dataset.cap || '';
      dlg.showModal();
    }));
    dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target.tagName === 'BUTTON') dlg.close(); });
    dlg.addEventListener('close', () => { img.removeAttribute('src'); });
  } else {
    document.querySelectorAll('.art[data-full]').forEach((b) => b.addEventListener('click', () => window.open(b.dataset.full, '_blank', 'noopener')));
  }

  // Copy chips (e.g. /techcom).
  document.querySelectorAll('[data-copy]').forEach((c) => c.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(c.dataset.copy); } catch { return; }
    c.classList.add('copied');
    const cp = c.querySelector('.cp');
    if (cp) { const was = cp.textContent; cp.textContent = 'copied'; setTimeout(() => { cp.textContent = was; c.classList.remove('copied'); }, 1600); }
  }));

  const yr = document.getElementById('yr');
  if (yr) yr.textContent = `© ${new Date().getFullYear()} Psychedelics In Recovery.`;
})();
