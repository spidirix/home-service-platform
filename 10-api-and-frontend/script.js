const storageKey = 'aurora-theme';
const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const currentYearEl = document.getElementById('year');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
let storedPreference = null;

try {
  storedPreference = localStorage.getItem(storageKey);
} catch (error) {
  storedPreference = null;
}

const getPreferredTheme = () => {
  if (storedPreference === 'light' || storedPreference === 'dark') {
    return storedPreference;
  }
  return prefersDark.matches ? 'dark' : 'light';
};

const updateToggleCopy = (theme) => {
  if (!themeToggle) return;
  const icon = themeToggle.querySelector('.theme-toggle__icon');
  const label = themeToggle.querySelector('.theme-toggle__text');
  const isDark = theme === 'dark';
  if (icon) {
    icon.textContent = isDark ? '🌙' : '☀️';
  }
  if (label) {
    label.textContent = isDark ? 'Dark' : 'Light';
  }
  themeToggle.setAttribute('aria-pressed', (!isDark).toString());
  const descriptive = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  themeToggle.setAttribute('aria-label', descriptive);
};

const applyTheme = (theme, persist = false) => {
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  updateToggleCopy(theme);
  if (persist) {
    try {
      localStorage.setItem(storageKey, theme);
      storedPreference = theme;
    } catch (error) {
      /* no-op */
    }
  }
};

applyTheme(getPreferredTheme());

const handlePreferenceChange = (event) => {
  if (storedPreference === 'light' || storedPreference === 'dark') return;
  applyTheme(event.matches ? 'dark' : 'light');
};

if (typeof prefersDark.addEventListener === 'function') {
  prefersDark.addEventListener('change', handlePreferenceChange);
} else if (typeof prefersDark.addListener === 'function') {
  prefersDark.addListener(handlePreferenceChange);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, true);
  });
}

const closeNav = () => {
  if (!navMenu || !navToggle) return;
  navMenu.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
};

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeNav());
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNav();
    }
  });
}

if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}
