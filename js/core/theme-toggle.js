/** PT-ESTUDO — preferência visual isolada, sem alterar estado pedagógico. */
(function () {
  'use strict';
  const THEME_KEY = 'ptEstudo.ui.theme';
  const buttonSelector = '[data-theme-toggle]';

  function isDark() {
    return document.body.classList.contains('dark');
  }

  function refreshThemeControls() {
    const dark = isDark();
    document.querySelectorAll(buttonSelector).forEach(button => {
      const action = dark ? 'Ativar modo claro' : 'Ativar modo escuro';
      button.setAttribute('aria-label', action);
      button.setAttribute('title', action);
      button.setAttribute('aria-pressed', String(dark));
      const icon = button.querySelector('.theme-switch-icon');
      const label = button.querySelector('.theme-switch-text');
      if (icon) icon.textContent = dark ? '☀' : '☾';
      if (label) label.textContent = dark ? 'Modo claro' : 'Modo escuro';
    });
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', dark ? '#241B40' : '#3F326D');
    }
  }

  function toggleTheme() {
    const next = isDark() ? 'light' : 'dark';
    document.body.classList.toggle('dark', next === 'dark');
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch (error) {
      console.warn('[PT-ESTUDO] Não foi possível salvar a preferência visual.', error);
    }
    refreshThemeControls();
  }

  document.addEventListener('click', event => {
    const toggle = event.target.closest(buttonSelector);
    if (!toggle) return;
    toggleTheme();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refreshThemeControls, { once: true });
  } else {
    refreshThemeControls();
  }
})();
