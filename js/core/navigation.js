/** ADM-ESTUDO — Fase 22-A / Lote 2: navegação e rotas.
 * Não altera notas, respostas nem outros registros pedagógicos.
 */
const ROUTES = Object.freeze({
  dashboard: 'Dashboard',
  modulos: 'Módulos',
  'banco-questoes': 'Banco de Questões',
  flashcards: 'Flashcards',
  revisao: 'Revisão',
  erros: 'Meus Erros',
  simulados: 'Simulados',
  jornada: 'Minha Jornada',
  estatisticas: 'Estatísticas',
  configuracoes: 'Configurações',
  sobre: 'Sobre'
});

// Preserva o acesso ao banco para navegadores cujo estado ainda guarda
// a antiga rota "questoes" (que não tinha página implementada).
const LEGACY_ROUTES = Object.freeze({ questoes: 'banco-questoes' });

export function normalizeRoute(route) {
  if (typeof route !== 'string') return 'dashboard';
  const resolved = LEGACY_ROUTES[route] || route;
  return Object.hasOwn(ROUTES, resolved) ? resolved : 'dashboard';
}

export function getRouteTitle(route) {
  return ROUTES[normalizeRoute(route)];
}

function setSidebarOpen(open) {
  document.body.classList.toggle('sidebar-open', Boolean(open));
  const button = document.querySelector('[data-action="toggle-sidebar"]');
  if (button) {
    button.setAttribute('aria-expanded', String(Boolean(open)));
    button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
}

export function setupNavigation({ onNavigate }) {
  document.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const navButton = target.closest('[data-nav]');
    if (navButton) {
      const requestedRoute = navButton.dataset.nav;
      if (typeof requestedRoute === 'string' &&
          (Object.hasOwn(ROUTES, requestedRoute) || Object.hasOwn(LEGACY_ROUTES, requestedRoute))) {
        onNavigate(normalizeRoute(requestedRoute));
        setSidebarOpen(false);
      }
      return;
    }

    if (target.closest('[data-action="toggle-sidebar"]')) {
      setSidebarOpen(!document.body.classList.contains('sidebar-open'));
      return;
    }
    if (target.closest('[data-action="close-sidebar"]')) {
      setSidebarOpen(false);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.body.classList.contains('sidebar-open')) {
      setSidebarOpen(false);
      document.querySelector('[data-action="toggle-sidebar"]')?.focus();
    }
  });

  // Remove o estado de menu móvel ao passar para a visualização de desktop.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 780 && document.body.classList.contains('sidebar-open')) {
      setSidebarOpen(false);
    }
  });
}

export function setActiveNavigation(route) {
  const activeRoute = normalizeRoute(route);
  document.querySelectorAll('[data-nav]').forEach(button => {
    const active = normalizeRoute(button.dataset.nav) === activeRoute;
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
}
