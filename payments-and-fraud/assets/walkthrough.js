(function () {
  'use strict';

  // --- Stack diagram: click a layer to reveal its drill panel ---
  const layers = document.querySelectorAll('.stack-layer');
  const drills = document.querySelectorAll('.drill');
  function closeAllDrills() {
    drills.forEach(d => { d.hidden = true; });
    layers.forEach(l => l.setAttribute('aria-expanded', 'false'));
  }
  layers.forEach(layer => {
    layer.addEventListener('click', () => {
      const target = layer.dataset.layer;
      const drill = document.querySelector('.drill[data-for="' + target + '"]');
      const wasOpen = layer.getAttribute('aria-expanded') === 'true';
      closeAllDrills();
      if (!wasOpen && drill) {
        drill.hidden = false;
        layer.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --- Dot nav: scroll-spy ---
  const dotLinks = Array.from(document.querySelectorAll('.dot-nav a'));
  const sections = dotLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  function setActiveDot() {
    const scrollY = window.scrollY + window.innerHeight * 0.35;
    let idx = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= scrollY) idx = i;
    }
    dotLinks.forEach((a, i) => a.classList.toggle('active', i === idx));
  }
  window.addEventListener('scroll', setActiveDot, { passive: true });
  window.addEventListener('resize', setActiveDot);
  setActiveDot();

  // --- Keyboard navigation: ← / → between sections ---
  function currentSectionIndex() {
    const scrollY = window.scrollY + window.innerHeight * 0.35;
    let idx = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= scrollY) idx = i;
    }
    return idx;
  }
  document.addEventListener('keydown', (e) => {
    if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      const next = Math.min(currentSectionIndex() + 1, sections.length - 1);
      sections[next].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      const prev = Math.max(currentSectionIndex() - 1, 0);
      sections[prev].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.key === 'Home') {
      e.preventDefault();
      sections[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.key === 'End') {
      e.preventDefault();
      sections[sections.length - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // --- Smooth scroll for in-page links ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
