/** PT-ESTUDO — banco ativo, sem qualquer import de questões administrativas. */
import { POR_01_QUESTIONS } from './portugues/por-01-questions.js';
import { POR_02_QUESTIONS } from './portugues/por-02-questions.js';
import { POR_03_QUESTIONS } from './portugues/por-03-questions.js';
import { POR_04_QUESTIONS } from './portugues/por-04-questions.js';
import { POR_05_QUESTIONS } from './portugues/por-05-questions.js';
import { POR_06_QUESTIONS } from './portugues/por-06-questions.js';
export const QUESTIONS = [...POR_01_QUESTIONS,...POR_02_QUESTIONS,...POR_03_QUESTIONS,...POR_04_QUESTIONS,...POR_05_QUESTIONS,...POR_06_QUESTIONS];
export const questionsForModule = id => QUESTIONS.filter(q=>q.moduleId===id);
