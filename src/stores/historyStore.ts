import type {Writable} from 'svelte/store';
import {writable} from 'svelte/store';
import type {iProblem} from '../class/Problem';

export const completedQuestions = writable([]);
export const questionsCorrect: Writable<number> = writable(0);
export const questionsWrong: Writable<number> = writable(0);
export const userAnswer = writable(null);
export const time: Writable<number> = writable(0);
