/* ═══════════════════════════════════════════════
   RY-OFFICIAL — main.js
═══════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Elements ───────────────────────────────
  var navbar       = document.getElementById('navbar');
  var hamburger    = document.getElementById('hamburger');
  var navDrawer    = document.getElementById('navDrawer');
  var charOuter    = document.getElementById('heroCharacterBg');
  var drawerLinks  = document.querySelectorAll('.drawer-link');

  // ─── Navbar: blur on scroll ──────────────────
  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // ─── Hamburger menu ─────────────────────────
  function toggleDrawer() {
    hamburger.classList.toggle('open');
    navDrawer.classList.toggle('open');
    document.body.style.overflow = navDrawer.classList.contains('open') ? 'hidden' : '';
  }

  function closeDrawer() {
    hamburger.classList.remove('open');
    navDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', toggleDrawer);
  drawerLinks.forEach(function (l) { l.addEventListener('click', closeDrawer); });

  // ─── Character parallax on scroll ───────────
  function handleParallax() {
    if (typeof gsap !== 'undefined') return;
    if (!charOuter) return;
    var scrollY = window.scrollY;
    var heroEl  = document.getElementById('hero');
    var heroH   = heroEl ? heroEl.offsetHeight : window.innerHeight;

    if (scrollY < heroH) {
      var ty      = scrollY * 0.28;
      var opacity = 1 - (scrollY / heroH) * 1.6;
      charOuter.style.transform = 'translateY(-' + ty + 'px)';
      charOuter.style.opacity   = Math.max(0, opacity).toFixed(3);
    }
  }

  // ─── Scroll-reveal (reusable for future sections) ─
  function initScrollReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length || !window.IntersectionObserver) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { obs.observe(el); });
  }

  // ─── Smooth scroll ──────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  // ─── Scroll circle ──────────────────────────
  var scrollCircle = document.querySelector('.scroll-circle');
  if (scrollCircle) {
    scrollCircle.addEventListener('click', function () {
      var el  = document.getElementById('packages');
      var top = el ? el.getBoundingClientRect().top + window.scrollY - 72 : window.innerHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  }

  // ─── External links security ───────────────
  function initExternalLinks() {
    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
      var rel = link.getAttribute('rel') || '';
      if (!rel.includes('noopener')) {
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  // ─── Image modal (reviews/deals) ───────────
  function initImageModal() {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    var closeBtn = document.getElementById('modalClose');
    var images = document.querySelectorAll('.deal-card img');
    if (!modal || !modalImg || !images.length) return;

    function openModal(src, alt) {
      modalImg.src = src;
      modalImg.alt = alt || 'Review preview';
      modal.classList.add('open');
      document.body.classList.add('modal-open');
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.classList.remove('modal-open');
      modalImg.src = '';
    }

    images.forEach(function (img) {
      img.addEventListener('click', function () {
        openModal(img.src, img.alt);
      });
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
  }

  // ─── Bind scroll ────────────────────────────
  window.addEventListener('scroll', function () {
    handleNavbarScroll();
    handleParallax();
  }, { passive: true });

  // ─── Package region tabs ────────────────────
  function initPkgTabs() {
    var tabs     = document.querySelectorAll('.pkg-tab');
    var tabPk    = document.getElementById('tabPk');
    var tabOther = document.getElementById('tabOther');
    var tabLogin = document.getElementById('tabLogin');
    if (!tabs.length || !tabPk) return;

    var allGrids = [tabPk, tabOther, tabLogin].filter(Boolean);

    function showTab(name) {
      allGrids.forEach(function(g) { g.style.display = 'none'; });
      var target = document.getElementById('tab' + name.charAt(0).toUpperCase() + name.slice(1));
      if (target) {
        target.style.display = '';
        // Reveal all cards inside
        target.querySelectorAll('.reveal').forEach(function(el) {
          el.classList.add('revealed');
        });
      }
    }

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        tabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        showTab(tab.dataset.tab);
      });
    });

    // Init — show PAK tab
    showTab('pk');
  }

  // ─── Star picker ────────────────────────────
  function initStarPicker() {
    var picker = document.getElementById('starPicker');
    var ratingInput = document.getElementById('rRating');
    if (!picker) return;
    var stars = picker.querySelectorAll('span');
    var current = 5;

    function setStars(val, cls) {
      stars.forEach(function(s, i) {
        s.classList.remove('active', 'hovered');
        if (i < val) s.classList.add(cls);
      });
    }

    stars.forEach(function(s) {
      s.addEventListener('mouseenter', function() { setStars(+s.dataset.v, 'hovered'); });
      s.addEventListener('mouseleave', function() { setStars(current, 'active'); });
      s.addEventListener('click', function() {
        current = +s.dataset.v;
        ratingInput.value = current;
        setStars(current, 'active');
      });
    });
    setStars(5, 'active');
  }

  // ─── Review form submit ──────────────────────
  window.submitReview = function(e) {
    e.preventDefault();
    var name    = document.getElementById('rName').value.trim();
    var city    = document.getElementById('rCity').value.trim();
    var rating  = document.getElementById('rRating').value;
    var text    = document.getElementById('rText').value.trim();
    var product = document.getElementById('rProduct').value;
    if (!name || !text) return;

    var stars   = '★'.repeat(+rating) + '☆'.repeat(5 - +rating);
    var colors  = ['#CC3333','#7c3aed','#059669','#d97706','#0891b2','#be185d'];
    var col     = colors[Math.floor(Math.random() * colors.length)];
    var initial = name.charAt(0).toUpperCase();

    var card = document.createElement('div');
    card.className = 'treview-card reveal';
    card.innerHTML =
      '<div class="treview-top">' +
        '<div class="treview-avatar" style="background:linear-gradient(135deg,' + col + ',' + col + 'aa)">' + initial + '</div>' +
        '<div>' +
          '<div class="treview-name">' + name + '</div>' +
          '<div class="treview-meta">' + city + ' &nbsp;·&nbsp; <span class="treview-stars">' + stars + '</span></div>' +
        '</div>' +
      '</div>' +
      '<p class="treview-text">"' + text + '"</p>' +
      '<div class="treview-tag">' + product + '</div>';

    var container = document.getElementById('reviewsContainer');
    container.insertBefore(card, container.firstChild);

    // Trigger reveal animation
    requestAnimationFrame(function() {
      requestAnimationFrame(function() { card.classList.add('revealed'); });
    });

    document.getElementById('reviewForm').reset();
    document.getElementById('rRating').value = 5;
    initStarPicker();

    var success = document.getElementById('reviewSuccess');
    success.classList.add('visible');
    setTimeout(function() { success.classList.remove('visible'); }, 4000);

    // Re-observe new card
    if (window.IntersectionObserver) {
      var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) { entry.target.classList.add('revealed'); obs.unobserve(entry.target); }
        });
      }, { threshold: 0.15 });
      obs.observe(card);
    }
  };

  // ─── Floating hero particles ─────────────────
  function initHeroParticles() {
    var bg = document.querySelector('.hero-bg');
    if (!bg) return;
    var count = 22;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('div');
      p.className = 'hero-particle';
      var x     = (Math.random() * 70 + 10).toFixed(1);
      var dur   = (Math.random() * 7 + 6).toFixed(1) + 's';
      var delay = '-' + (Math.random() * 12).toFixed(1) + 's';
      var drift = ((Math.random() - 0.5) * 100).toFixed(0) + 'px';
      var size  = Math.random() > 0.65 ? '3px' : '2px';
      p.style.left   = x + '%';
      p.style.bottom = '0';
      p.style.width  = size;
      p.style.height = size;
      p.style.setProperty('--dur',   dur);
      p.style.setProperty('--delay', delay);
      p.style.setProperty('--drift', drift);
      bg.appendChild(p);
    }
  }

  // ─── Score counter animation ─────────────────
  function initCounters() {
    if (typeof gsap !== 'undefined') return;
    var scoreEl = document.querySelector('.score-num');
    if (!scoreEl || !window.IntersectionObserver) return;
    var targetVal = parseFloat(scoreEl.textContent) || 4.9;
    var started   = false;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !started) {
          started = true;
          var startTime = null;
          var fromVal   = targetVal * 0.55;
          var durMs     = 1400;
          function tick(ts) {
            if (!startTime) startTime = ts;
            var p    = Math.min((ts - startTime) / durMs, 1);
            var ease = 1 - Math.pow(1 - p, 3);
            scoreEl.textContent = (fromVal + (targetVal - fromVal) * ease).toFixed(1);
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    obs.observe(scoreEl);
  }

  // ─── Init ───────────────────────────────────
  handleNavbarScroll();
  initScrollReveal();
  initSmoothScroll();
  initPkgTabs();
  initStarPicker();
  initImageModal();
  initExternalLinks();
  initHeroParticles();
  initCounters();

})();
