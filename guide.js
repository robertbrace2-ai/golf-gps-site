/* How-to guide: click or tap a step to see it bigger, and again to shrink it. */
(function () {
  var steps = document.querySelectorAll('.step[data-expand]');

  function setOpen(step, open) {
    step.classList.toggle('is-open', open);
    step.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function toggle(step) {
    var open = !step.classList.contains('is-open');
    // Only one big step at a time, so the page stays tidy.
    for (var i = 0; i < steps.length; i++) {
      if (steps[i] !== step) setOpen(steps[i], false);
    }
    setOpen(step, open);
    // Bring the step to the top of the screen so the picture is in view.
    setTimeout(function () {
      step.scrollIntoView({ behavior: 'smooth', block: open ? 'start' : 'nearest' });
    }, 30);
  }

  for (var i = 0; i < steps.length; i++) {
    (function (step) {
      step.addEventListener('click', function (e) {
        if (e.target.closest && e.target.closest('a')) return; // links still work
        toggle(step);
      });
      step.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(step); }
        if (e.key === 'Escape' && step.classList.contains('is-open')) setOpen(step, false);
      });
    })(steps[i]);
  }
})();
