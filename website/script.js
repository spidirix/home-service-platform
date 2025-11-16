(function() {
  const root = document.documentElement;
  const THEME_KEY = 'preferred-theme';
  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      root.setAttribute('data-theme', theme);
      localStorage.setItem(THEME_KEY, theme);
      const pressed = theme === 'dark';
      const toggle = document.getElementById('theme-toggle');
      if (toggle) toggle.setAttribute('aria-pressed', String(pressed));
    } else {
      root.removeAttribute('data-theme');
      localStorage.removeItem(THEME_KEY);
    }
  }

  // Initialize theme: stored value wins; else follow system
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));

  // Theme toggle
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Mobile nav
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.getAttribute('data-open') === 'true';
      navMenu.setAttribute('data-open', String(!open));
      navToggle.setAttribute('aria-expanded', String(!open));
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Basic form validation (progressive enhancement)
  const form = document.querySelector('.cta-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const required = form.querySelectorAll('[required]');
      for (const el of required) {
        if (!el.value) {
          e.preventDefault();
          el.focus();
          break;
        }
      }
    });
  }
})();
