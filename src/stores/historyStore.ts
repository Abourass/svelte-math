import {writable} from 'svelte/store';

export const questionsCorrect = writable(0);
export const questionsWrong = writable(0);
export const userAnswer = writable(null);
