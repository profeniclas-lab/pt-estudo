/** PT-ESTUDO — somente aulas dos módulos atualmente publicados. */
import { POR_01_LESSONS } from './portugues/por-01-lessons.js';
import { POR_02_LESSONS } from './portugues/por-02-lessons.js';
import { POR_03_LESSONS } from './portugues/por-03-lessons.js';
import { POR_04_LESSONS } from './portugues/por-04-lessons.js';
import { POR_05_LESSONS } from './portugues/por-05-lessons.js';
import { POR_06_LESSONS } from './portugues/por-06-lessons.js';
export const LESSONS = Object.freeze({...POR_01_LESSONS,...POR_02_LESSONS,...POR_03_LESSONS,...POR_04_LESSONS,...POR_05_LESSONS,...POR_06_LESSONS});
export const getLesson = id => LESSONS[id] || null;
