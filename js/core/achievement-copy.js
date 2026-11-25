/** Compatibilidade visual: atualiza rótulos antigos do Dashboard, sem tocar em dados.
 * O Dashboard da Fase 22 usa textos estáticos que pressupõem cobertura integral.
 */
const replacements = [
 ['Meta: 75% e todas as etapas.', 'Meta: 75 pontos; atividades restantes continuam disponíveis.'],
 ['≥75% e etapas avaliadas', '≥75 pontos no percurso'],
 ['Meta: 75% com todas as etapas avaliadas', 'Meta: 75 pontos no percurso']
];
export function refreshAchievementCopy(root, route) {
  if (!root || route !== 'dashboard') return;
  for (const node of root.querySelectorAll('#dashboard-focus .page-subtitle, #dashboard-focus .stat-hint')) {
    let updated=node.textContent;
    for(const [from,to] of replacements)updated=updated.replace(from,to);
    if(updated!==node.textContent)node.textContent=updated;
  }
}
