import {getRandomInt} from '../modules/random';

export interface iProblem {
  question: string,
  answer: number,
  symbol?: string
}

export default abstract class Problem {
  answer?: number|string;
  question?: string;
  protected random: (max: number) => number;

  protected constructor() {
    this.question = undefined;
    this.answer = undefined
    this.random = (max: number) => getRandomInt(1, max)
  }
}
