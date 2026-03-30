/* Mobile navigation toggle */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.navbar-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('is-open', !expanded);
  });

  /* Close menu when a link is tapped on mobile */
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('is-open');
    }
  });
})();
