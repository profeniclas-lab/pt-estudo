/** ADM-ESTUDO — Fase 22-A / Lote 1: alternância visual claro/escuro.
 * Usa uma chave independente do estado pedagógico para evitar conflitos
 * com os mecanismos de integridade e salvamento de progresso.
 */
(function () {
  'use strict';
  const THEME_KEY = 'admEstudo.ui.theme';
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
      // O controle visual ainda funciona quando o armazenamento está bloqueado.
      console.warn('[ADM-ESTUDO] Não foi possível salvar a preferência visual.', error);
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
