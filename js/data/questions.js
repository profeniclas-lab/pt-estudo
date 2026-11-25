/** PT-ESTUDO — banco ativo, sem qualquer import de questões administrativas. */
import { POR_01_QUESTIONS } from './portugues/por-01-questions.js';
import { POR_02_QUESTIONS } from './portugues/por-02-questions.js';
import { POR_03_QUESTIONS } from './portugues/por-03-questions.js';
export const QUESTIONS = [...POR_01_QUESTIONS,...POR_02_QUESTIONS,...POR_03_QUESTIONS];
export const questionsForModule = id => QUESTIONS.filter(q=>q.moduleId===id);
