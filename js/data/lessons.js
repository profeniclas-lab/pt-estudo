/** PT-ESTUDO — somente aulas dos módulos atualmente publicados. */
import { POR_01_LESSONS } from './portugues/por-01-lessons.js';
import { POR_02_LESSONS } from './portugues/por-02-lessons.js';
import { POR_03_LESSONS } from './portugues/por-03-lessons.js';
export const LESSONS = Object.freeze({...POR_01_LESSONS,...POR_02_LESSONS,...POR_03_LESSONS});
export const getLesson = id => LESSONS[id] || null;
