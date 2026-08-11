/* ============================================================
   ECOMMERCE CON LALI — Interacciones
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Año dinámico en el footer ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Scroll reveal con Intersection Observer ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  var prefersReduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    // Sin animación: mostrar todo directamente.
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Stagger sutil entre elementos hermanos.
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- VSL: ocultar el badge al reproducir ---------- */
  var vslVideo = document.querySelector('.vsl__video');
  var vslBadge = document.querySelector('.vsl__badge');
  if (vslVideo && vslBadge) {
    vslVideo.addEventListener('play', function () {
      vslBadge.style.display = 'none';
    });
  }
})();
