/* ═══════════════════════════════════════════════
   RY-OFFICIAL — GSAP Premium Scroll Animations
═══════════════════════════════════════════════ */

(function () {
  'use strict';
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* ─── 1. Override CSS .reveal — let GSAP own it ── */
  document.querySelectorAll('.reveal').forEach(function (el) {
    el.classList.add('revealed');
    el.style.transition = 'none';
  });

  /* ─── 2. Hero cursor spotlight ────────────────── */
  var hero = document.querySelector('.hero');
  if (hero) {
    var spot = document.createElement('div');
    Object.assign(spot.style, {
      position:     'absolute',
      width:        '560px',
      height:       '560px',
      borderRadius: '50%',
      background:   'radial-gradient(circle, rgba(204,51,51,0.07) 0%, transparent 65%)',
      transform:    'translate(-50%, -50%)',
      pointerEvents:'none',
      zIndex:       '2',
      left:         '35%',
      top:          '50%',
    });
    hero.appendChild(spot);
    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      gsap.to(spot, {
        left:     e.clientX - rect.left,
        top:      e.clientY - rect.top,
        duration: 0.6,
        ease:     'power2.out',
      });
    });
  }

  /* ─── 3. Hero character — GSAP scrub parallax ─── */
  var charBg = document.getElementById('heroCharacterBg');
  if (charBg) {
    gsap.to(charBg, {
      scrollTrigger: {
        trigger: '.hero',
        start:   'top top',
        end:     'bottom top',
        scrub:   1.5,
      },
      y:       -140,
      opacity: 0,
      ease:    'none',
    });
  }

  /* ─── 4. Hero background glows parallax ──────── */
  gsap.to('.bg-glow--amber', {
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2 },
    y: -90, ease: 'none',
  });
  gsap.to('.bg-glow--red', {
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 3 },
    y: -50, ease: 'none',
  });

  /* ─── 5. Section headers — staggered reveal ──── */
  gsap.utils.toArray('.section-header').forEach(function (hdr) {
    var tag   = hdr.querySelector('.section-tag');
    var title = hdr.querySelector('.section-title');
    var sub   = hdr.querySelector('.section-sub');
    var tl = gsap.timeline({
      scrollTrigger: { trigger: hdr, start: 'top 84%', once: true }
    });
    if (tag)   tl.from(tag,   { y: 30, opacity: 0, duration: 0.55, ease: 'power3.out' });
    if (title) tl.from(title, { y: 58, opacity: 0, duration: 0.78, ease: 'power3.out' }, '-=0.28');
    if (sub)   tl.from(sub,   { y: 28, opacity: 0, duration: 0.55, ease: 'power3.out' }, '-=0.38');
  });

  /* ─── 6. Package cards — cascade scale-up ────── */
  gsap.utils.toArray('.packages-grid').forEach(function (grid) {
    var cards = grid.querySelectorAll('.pkg-card');
    gsap.from(cards, {
      scrollTrigger: { trigger: grid, start: 'top 78%', once: true },
      y:        85,
      opacity:  0,
      scale:    0.87,
      duration: 0.7,
      stagger:  { each: 0.09, from: 'start' },
      ease:     'power3.out',
      clearProps: 'transform',
    });
  });

  /* ─── 7. Review cards — cascade ──────────────── */
  var revGrid = document.querySelector('.treviews-grid');
  if (revGrid) {
    gsap.from(revGrid.querySelectorAll('.treview-card'), {
      scrollTrigger: { trigger: revGrid, start: 'top 80%', once: true },
      y:        65,
      opacity:  0,
      duration: 0.65,
      stagger:  { each: 0.09 },
      ease:     'power3.out',
    });
  }

  /* ─── 8. How-it-works — slide from sides ──────── */
  var stepsGrid = document.querySelector('.steps-grid');
  if (stepsGrid) {
    var sc   = stepsGrid.querySelectorAll('.step-card');
    var conn = stepsGrid.querySelectorAll('.step-connector');
    var tl   = gsap.timeline({
      scrollTrigger: { trigger: stepsGrid, start: 'top 78%', once: true }
    });
    if (sc[0])   tl.from(sc[0],   { x: -90,  opacity: 0, duration: 0.75, ease: 'power3.out' });
    if (conn[0]) tl.from(conn[0], { scaleX: 0, opacity: 0, transformOrigin: 'left center', duration: 0.38, ease: 'power2.out' }, '-=0.25');
    if (sc[1])   tl.from(sc[1],   { y: 65,   opacity: 0, duration: 0.75, ease: 'power3.out' }, '-=0.18');
    if (conn[1]) tl.from(conn[1], { scaleX: 0, opacity: 0, transformOrigin: 'left center', duration: 0.38, ease: 'power2.out' }, '-=0.25');
    if (sc[2])   tl.from(sc[2],   { x: 90,   opacity: 0, duration: 0.75, ease: 'power3.out' }, '-=0.18');
  }

  /* ─── 9. Rating summary box ───────────────────── */
  var summary = document.querySelector('.reviews-summary');
  if (summary) {
    gsap.from(summary, {
      scrollTrigger: { trigger: summary, start: 'top 85%', once: true },
      y: 45, opacity: 0, scale: 0.94, duration: 0.72, ease: 'power3.out',
    });
  }

  /* ─── 10. Score counter ───────────────────────── */
  var scoreEl = document.querySelector('.score-num');
  if (scoreEl) {
    var targetVal = parseFloat(scoreEl.textContent) || 4.9;
    scoreEl.textContent = '0.0';
    ScrollTrigger.create({
      trigger: scoreEl,
      start:   'top 82%',
      once:    true,
      onEnter: function () {
        var obj = { val: 0 };
        gsap.to(obj, {
          val:      targetVal,
          duration: 1.8,
          ease:     'power2.out',
          onUpdate: function () { scoreEl.textContent = obj.val.toFixed(1); },
        });
      },
    });
  }

  /* ─── 11. Add-review form ─────────────────────── */
  var addReview = document.querySelector('.add-review-wrap');
  if (addReview) {
    gsap.from(addReview, {
      scrollTrigger: { trigger: addReview, start: 'top 82%', once: true },
      y: 52, opacity: 0, duration: 0.7, ease: 'power3.out',
    });
  }

  /* ─── 12. Remaining .reveal elements ─────────── */
  var skipSel = '.pkg-card,.treview-card,.step-card,.step-connector,.section-tag,.section-title,.section-sub,.reviews-summary,.add-review-wrap';
  gsap.utils.toArray('.reveal').forEach(function (el) {
    try { if (el.matches(skipSel)) return; } catch (e) {}
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 87%', once: true },
      y: 38, opacity: 0, duration: 0.65, ease: 'power3.out',
    });
  });

  /* ─── 13. Footer brand slide-up ──────────────── */
  var footerBrand = document.querySelector('.footer-brand');
  var footerLinks = document.querySelector('.footer-links');
  if (footerBrand) {
    gsap.from(footerBrand, {
      scrollTrigger: { trigger: footerBrand, start: 'top 92%', once: true },
      y: 40, opacity: 0, duration: 0.65, ease: 'power3.out',
    });
  }
  if (footerLinks) {
    gsap.from(footerLinks.children, {
      scrollTrigger: { trigger: footerLinks, start: 'top 92%', once: true },
      y: 30, opacity: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out',
    });
  }


})();
