import Problem, {iProblem} from '../class/Problem';

export default class DivisionProblem extends Problem {
  constructor() {
    super();
  }

  mathFn(maxForA: number, maxForB: number): iProblem {
    const digitA = this.random(maxForA);
    const digitB = this.random(maxForB)

    this.answer = Math.round((digitA / digitB) * 1000) / 1000;
    this.question = `${digitA} / ${digitB}`;
    return {question: this.question, answer: this.answer}
  }
}
