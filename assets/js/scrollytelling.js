(function () {
  'use strict';

  function initScrollytelling(options) {
    var opts = options || {};
    var containerId = opts.containerId || 'scrolly-research';
    var visualId = opts.visualId || containerId + '-visual';

    if (typeof window.scrollama !== 'function') {
      return;
    }

    var container = document.getElementById(containerId);
    if (!container) return;

    var steps = container.querySelectorAll('.scrolly-step');
    if (!steps.length) return;

    // Remove the separate visual panel (now inline)
    var legacyVisual = document.getElementById(visualId);
    if (legacyVisual) legacyVisual.remove();

    // Initialize Scrollama
    var scroller = window.scrollama();
    scroller
      .setup({ step: '#' + containerId + ' .scrolly-step', offset: 0.5 })
      .onStepEnter(function (response) {
        steps.forEach(function (s) { s.classList.remove('is-active'); });
        response.element.classList.add('is-active');
        // Trigger visual update if needed (handled by CSS now)
      })
      .onStepExit(function (response) {
        response.element.classList.remove('is-active');
      });

    // Initial visibility check
    steps.forEach(function (step) {
      if (isVisible(step)) {
        step.classList.add('is-visible');
      }
    });

    // Throttled scroll handler for visibility
    function handleScroll() {
      steps.forEach(function (step) {
        if (isVisible(step) && !step.classList.contains('is-visible')) {
          step.classList.add('is-visible');
        }
      });
    }

    function isVisible(element) {
      var rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }

    window.addEventListener('scroll', throttle(handleScroll, 100));
    window.addEventListener('resize', function () {
      scroller.resize();
      // Re-check visibility on resize
      handleScroll();
    });
  }

  // Simple throttle function
  function throttle(func, limit) {
    var inThrottle;
    return function () {
      var args = arguments;
      var context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function () { inThrottle = false; }, limit);
      }
    };
  }

  // Boot function
  function boot() {
    var containers = document.querySelectorAll('.scrolly-container');
    containers.forEach(function (container) {
      var containerId = container.id;
      initScrollytelling({ containerId: containerId });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
