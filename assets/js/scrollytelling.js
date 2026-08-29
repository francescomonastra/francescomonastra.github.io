(function () {
  'use strict';

  function initScrollytelling(options) {
    var opts = options || {};
    var containerId = opts.containerId || 'scrolly-research';

    var container = document.getElementById(containerId);
    if (!container) return;

    var cards = Array.prototype.slice.call(container.querySelectorAll('.rlog-card'));
    if (!cards.length) return;

    var navBtns = Array.prototype.slice.call(document.querySelectorAll('.rlog-channelnav button'));

    navBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var t = document.getElementById(b.dataset.target);
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    function setActive(id) {
      navBtns.forEach(function (b) {
        b.dataset.active = b.dataset.target === id ? 'true' : 'false';
      });
    }

    if (typeof IntersectionObserver === 'undefined') {
      cards.forEach(function (c) { c.classList.add('in'); });
      return;
    }

    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.18 }
    );
    cards.forEach(function (c) { revealObserver.observe(c); });

    if (navBtns.length) {
      var navObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { threshold: 0.5 }
      );
      cards.forEach(function (c) { navObserver.observe(c); });
    }

    // Count-up stat readouts
    var counted = new WeakSet();
    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || counted.has(entry.target)) return;
          counted.add(entry.target);
          var el = entry.target;
          var target = parseFloat(el.dataset.count);
          var decimals = parseInt(el.dataset.decimals || '0', 10);
          var suffix = el.dataset.suffix || '';
          var dur = 900;
          var start = null;
          function step(ts) {
            if (!start) start = ts;
            var p = Math.min(1, (ts - start) / dur);
            var eased = 1 - Math.pow(1 - p, 3);
            el.innerHTML = (target * eased).toFixed(decimals) + suffix;
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    container.querySelectorAll('.rlog-readout .num').forEach(function (n) { countObserver.observe(n); });

    // Hero canvas: quiet animated spectrum trace. The hero sits as a
    // sibling of the scrolly container, not inside it, so this is a
    // page-wide lookup rather than scoped to `container`.
    var canvas = document.querySelector('.rlog-hero canvas');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (canvas && canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var w, h, dpr = Math.min(window.devicePixelRatio || 1, 2);
      function resize() {
        w = canvas.clientWidth;
        h = canvas.clientHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      window.addEventListener('resize', resize);
      resize();

      function tokenColor(varName, fallback) {
        var v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
        return v || fallback;
      }

      function draw(t) {
        ctx.clearRect(0, 0, w, h);
        var baseline = h * 0.82;
        ctx.strokeStyle = tokenColor('--blue', '#1f4e79');
        ctx.lineWidth = 1.4;
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        var n = 140;
        for (var i = 0; i <= n; i++) {
          var x = (i / n) * w;
          var seed = i * 0.28 + (reduceMotion ? 0 : t * 0.0009);
          var noise = Math.sin(seed) * 6 + Math.sin(seed * 2.7) * 2.4;
          var spikePos = (Math.sin(reduceMotion ? 0 : t * 0.00025) * 0.5 + 0.5) * n;
          var d = Math.abs(i - spikePos);
          var spike = d < 3 ? (3 - d) * 26 : 0;
          var y = baseline - Math.abs(noise) - spike * 0.35 - (Math.sin(i * 0.05) + 1) * 8;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.globalAlpha = 1;
        if (!reduceMotion) requestAnimationFrame(draw);
      }
      requestAnimationFrame(draw);
    }
  }

  function boot() {
    var containers = document.querySelectorAll('.scrolly-container');
    containers.forEach(function (container) {
      initScrollytelling({ containerId: container.id });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
