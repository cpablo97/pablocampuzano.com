/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Hero typographic animation
   Faithfully reconstructed from Figma prototype 536:2513

   Each tile independently cycles:
     idle ─► is-active + is-stage-1
          ─► is-stage-2
          ─► is-exiting
          ─► idle  (wait random interval, repeat)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function () {
  'use strict';

  /* Respect user's motion preference */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var tiles = Array.from(document.querySelectorAll('.typo-char'));
  if (!tiles.length) return;

  /* ── Timing (ms) ── */
  var T = {
    stage1:       750,   // held in stage-1 (bold eruption)
    stage2:       950,   // held in stage-2 (light morph)
    exit:         320,   // fade-out duration
    idleMin:      600,   // min wait between cycles
    idleMax:      4800,  // max wait between cycles
    spread:       7200,  // initial stagger window
  };

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  /* Inject the letter span (keeps HTML clean, degrades gracefully) */
  tiles.forEach(function (tile) {
    var letter = tile.dataset.letter || '<';
    var span = document.createElement('span');
    span.className = 'typo-glyph typo-glyph--letter';
    span.textContent = letter === '*' ? '*' : letter;
    span.setAttribute('aria-hidden', 'true');
    tile.appendChild(span);
  });

  /* ── Single tile animation cycle ── */
  function erupt(tile) {
    /* Stage 1: letter erupts in, bold */
    tile.classList.add('is-active', 'is-stage-1');

    setTimeout(function () {
      /* Stage 2: morph to lighter weight */
      tile.classList.remove('is-stage-1');
      tile.classList.add('is-stage-2');

      setTimeout(function () {
        /* Exit: fade + shrink back */
        tile.classList.remove('is-stage-2');
        tile.classList.add('is-exiting');

        setTimeout(function () {
          /* Reset to idle */
          tile.classList.remove('is-active', 'is-exiting');

          /* Schedule next eruption after a random idle pause */
          setTimeout(function () { erupt(tile); }, rand(T.idleMin, T.idleMax));

        }, T.exit);
      }, T.stage2);
    }, T.stage1);
  }

  /* ── Stagger initial starts across all 35 tiles ── */
  tiles.forEach(function (tile) {
    setTimeout(function () { erupt(tile); }, rand(0, T.spread));
  });

}());
