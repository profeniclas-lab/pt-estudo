import { createInitialState, normalizeState } from "./state.js";
import { inspectStoredProgress, validateStateForSaving } from "./storage-safety.js";
import { establishProgressBaseline, verifyProgressBaseline, acknowledgeProgressWrite } from "./progress-conflict-guard.js";

export const STORAGE_KEY = "admEstudo.v2.state";

export function loadState() {
  try {
    const status = inspectStoredProgress();
    if (!status.ok) { console.error("[ADM-ESTUDO] Progresso protegido:", status.message); return createInitialState(); }
    const raw = window.localStorage.getItem(STORAGE_KEY);
    establishProgressBaseline(raw);
    return status.code === "empty" ? createInitialState() : normalizeState(status.state);
  } catch (error) {
    console.error("[ADM-ESTUDO] Falha ao carregar progresso:", error);
    return createInitialState();
  }
}

export function saveState(state) {
  try {
    const status = inspectStoredProgress();
    if (!status.ok) return { ok: false, blocked: true, message: status.message };
    if (!validateStateForSaving(state)) return { ok: false, blocked: true, message: "Estado atual inválido. Gravação bloqueada." };
    const conflict = verifyProgressBaseline();
    if (!conflict.ok) return { ok:false, blocked:true, conflict:true, message:conflict.message };
    const stateToSave = {
      ...state,
      metadata: {
        ...(state.metadata || {}),
        updatedAt: new Date().toISOString()
      }
    };

    const serialized = JSON.stringify(stateToSave);
    // Verificação adicional imediatamente antes de gravar.
    const latest = verifyProgressBaseline();
    if (!latest.ok) return { ok:false, blocked:true, conflict:true, message:latest.message };
    window.localStorage.setItem(STORAGE_KEY, serialized);
    if (window.localStorage.getItem(STORAGE_KEY) !== serialized) throw Error("Falha ao confirmar gravação.");
    acknowledgeProgressWrite(serialized);
    return { ok: true };
  } catch (error) {
    console.error("[ADM-ESTUDO] Falha ao salvar progresso:", error);
    return { ok: false, error };
  }
}
