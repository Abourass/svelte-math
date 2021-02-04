import {getRandomInt} from '../modules/random';

export interface iProblem {question: string, answer: number|string}

export abstract class Problem {
  answer?: number|string;
  question?: string;
  protected random: (max: number) => number;

  protected constructor() {
    this.question = undefined;
    this.answer = undefined
    this.random = (max: number) => getRandomInt(1, max)
  }
}
export default Problem;
