/** ADM-ESTUDO — Fase 23, Lote 4. Cálculo DERIVADO, sem escrita no progresso.
 * Pesos pedagógicos: diagnóstico 20, aulas 30, exercícios 30, banco 20.
 * Aulas se dividem em leitura/conclusão (15) e autoavaliação (15).
 * Pontos parciais exigem evidência proporcional de atividades realizadas.
 */
export const MODULE_PROGRESS_WEIGHTS = Object.freeze({
  diagnostic: 20,
  lessonCompletion: 15,
  lessonSelfAssessment: 15,
  exercises: 30,
  bank: 20
});
export const MODULE_COMPLETION_THRESHOLD = 75;
const COMPONENTS = Object.entries(MODULE_PROGRESS_WEIGHTS);
const clamp = n => typeof n === 'number' && Number.isFinite(n) ? Math.max(0, Math.min(100,n)) : 0;
const round2 = n => Math.round(n*100)/100;

/** O componente só conta a parcela efetivamente aferida (coverage 0–100).
 * A etapa Banco usa a taxa de acerto sem quantidade mínima.
 * Assim, a primeira questão correta pode valer os 20 pontos do Banco.
 * Cobertura total do catálogo e domínio são indicadores independentes.
 * Compatibilidade: sem coverage, a avaliação disponível representa 100% da etapa.
 */
export function calculatePartialAchievement(scores = {}) {
  let earned = 0, assessedWeight = 0;
  const components = {};
  for (const [key, weight] of COMPONENTS) {
    const item = scores?.[key];
    const available = item?.available === true;
    const score = available ? clamp(item.score) : 0;
    const coverage = available ? (item.coverage === undefined ? 100 : clamp(item.coverage)) : 0;
    const points = round2(weight * score/100 * coverage/100);
    const coverageWeight = round2(weight * coverage/100);
    components[key] = {weight, points, available, score, coverage, coverageWeight};
    earned += points;
    assessedWeight += coverageWeight;
  }
  earned = round2(earned); assessedWeight = round2(assessedWeight);
  return {
    // Arredondamento para baixo evita exibir 75% quando os pontos ainda são <75.
    percentage: assessedWeight > 0 ? Math.floor(earned + 1e-8) : null,
    earnedWeightedPoints: earned,
    availableWeight: assessedWeight,
    coveragePercentage: assessedWeight,
    hasData: assessedWeight > 0,
    components
  };
}
/** Meta atingida quando obtiver 75 dos 100 pontos possíveis.
 * Não exige cobertura integral: o estudante pode retornar às atividades pendentes.
 */
export function isModuleCompleted(achievement, threshold = MODULE_COMPLETION_THRESHOLD) {
  return !!achievement?.hasData && Number.isFinite(achievement?.earnedWeightedPoints)
    && achievement.earnedWeightedPoints >= threshold;
}
