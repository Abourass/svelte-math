import Problem, {iProblem} from '../class/Problem';

export class MultiplicationProblem extends Problem {
  constructor() {
    super();
  }

  mathFn(maxForA: number, maxForB: number): iProblem {
    const digitA = this.random(maxForA);
    const digitB = this.random(maxForB)

    this.answer = digitA * digitB;
    this.question = `${digitA} x ${digitB}`;
    return {question: this.question, answer: this.answer}
  }
}

export default MultiplicationProblem
