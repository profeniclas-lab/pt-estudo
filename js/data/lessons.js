/** PT-ESTUDO — somente aulas dos módulos atualmente publicados. */
import { POR_01_LESSONS } from './portugues/por-01-lessons.js';
import { POR_02_LESSONS } from './portugues/por-02-lessons.js';
import { POR_03_LESSONS } from './portugues/por-03-lessons.js';
import { POR_04_LESSONS } from './portugues/por-04-lessons.js';
import { POR_05_LESSONS } from './portugues/por-05-lessons.js';
import { POR_06_LESSONS } from './portugues/por-06-lessons.js';
import { POR_07_LESSONS } from './portugues/por-07-lessons.js';
import { POR_08_LESSONS } from './portugues/por-08-lessons.js';
import { POR_09_LESSONS } from './portugues/por-09-lessons.js';
export const LESSONS = Object.freeze({...POR_01_LESSONS,...POR_02_LESSONS,...POR_03_LESSONS,...POR_04_LESSONS,...POR_05_LESSONS,...POR_06_LESSONS,...POR_07_LESSONS,...POR_08_LESSONS,...POR_09_LESSONS});
export const getLesson = id => LESSONS[id] || null;
