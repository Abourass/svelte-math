import {getRandomInt} from '../modules/random';

export interface iProblem {
  question: string,
  answer: number,
  symbol?: string
}

export interface digits { digitA: number, digitB: number }
export type questionDifficulty = 'easy'|'medium'|'hard'

export default abstract class Problem {
  answer?: number|string;
  question?: string;
  protected random: (max: number) => number;

  protected constructor() {
    this.question = undefined;
    this.answer = undefined
    this.random = (max: number) => getRandomInt(1, max)
  }

  easyDigits(maxA: number = 100, maxB: number = 100): digits {
    return {digitA: this.random(maxA), digitB: this.random(maxB)}
  }

  mediumDigits(maxA: number = 500, maxB: number = 500): digits {
    return {digitA: this.random(maxA), digitB: this.random(maxB)}
  }

  hardDigits(maxA: number = 1000, maxB: number = 1000): digits {
    return {digitA: this.random(maxA), digitB: this.random(maxB)}
  }

  chooseDigits(difficultyLevel: questionDifficulty): digits {
    if (difficultyLevel === 'easy') return this.easyDigits();
    if (difficultyLevel === 'medium') return this.mediumDigits();
    return this.hardDigits();
  }
}
