import Problem, {iProblem} from '../class/Problem';

export default class SubtractionProblem extends Problem {
  constructor() {
    super();
  }

  mathFn(maxForA: number, maxForB: number): iProblem {
    const digitA: number = this.random(maxForA);
    const digitB: number = this.random(maxForB)

    this.answer = digitA - digitB;
    this.question = `${digitA} - ${digitB}`;
    return {question: this.question, answer: this.answer}
  }
}
