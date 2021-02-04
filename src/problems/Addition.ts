import Problem, {iProblem} from '../class/Problem';

export class AdditionProblem extends Problem {
  constructor() {
    super();
  }

  mathFn(maxForA: number, maxForB: number): iProblem {
    const digitA = this.random(maxForA);
    const digitB = this.random(maxForB)

    this.answer = digitA + digitB;
    this.question = `${digitA} + ${digitB}`;
    return {question: this.question, answer: this.answer}
  }
}

export default AdditionProblem
