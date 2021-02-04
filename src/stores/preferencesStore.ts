import {Writable, writable} from 'svelte/store';
import type {iProblem} from '../class/Problem';

//a:addition, s:subtraction, d:division, m:multiplication, f:factorial, p:percentage, po:percent of, e:exponent
export type QuestionAbbreviations = 'a'|'s'|'d'|'m'|'f'|'p'|'e';

export const problemCategories: Writable<Array<QuestionAbbreviations>> = writable(["a", "s", "s", "d", "d", "d", "m", "m", "f", "p", "e"])
export const problems: Writable<Array<iProblem>> = writable([]);
