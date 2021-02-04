import Problem, {iProblem} from '../class/Problem';
import range from '../modules/range';

export default class ExponentProblem extends Problem {
  constructor() {
    super();
  }

  mathFn(): iProblem {
    const possibleBases: Array<number> = [...range(0, 10), 2, 2, 2, 2, 2, 2, 2, 2, 2];
    const possiblePowers: Array<number> = [...range(0, 4), 2, 2, 2];

    const base: number = possibleBases[Math.floor(Math.random() * possibleBases.length)];
    const power: number = possiblePowers[Math.floor(Math.random() * possiblePowers.length)];

    this.answer = base ** power;
    this.question = `${base} ^ ${power}`;
    return {question: this.question, answer: this.answer}
  }
}
