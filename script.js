(() => {
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuCloseTargets = document.querySelectorAll('[data-menu-close], [data-menu-link]');
  const heroImage = document.querySelector('.hero-media img');
  const heroItems = document.querySelectorAll('[data-hero-item]');
  const heroCount = document.querySelector('[data-hero-count]');

  const setHeaderState = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const setMenu = (open) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
    if (open) {
      mobileMenu.querySelector('.menu-close')?.focus();
    } else {
      menuToggle.focus();
    }
  };

  menuToggle?.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  menuCloseTargets.forEach((target) => target.addEventListener('click', () => setMenu(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu?.classList.contains('is-open')) setMenu(false);
  });

  heroItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (!heroImage) return;
      heroImage.src = item.dataset.image;
      heroImage.removeAttribute('srcset');
      heroImage.alt = item.dataset.alt || '';
      heroItems.forEach((other) => {
        const active = other === item;
        other.classList.toggle('is-active', active);
        other.setAttribute('aria-pressed', String(active));
      });
      if (heroCount) heroCount.textContent = `0${index + 1} / 03`;
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      history.pushState(null, '', link.getAttribute('href'));
    });
  });
})();
