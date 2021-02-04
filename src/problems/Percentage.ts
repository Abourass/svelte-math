import Problem, {iProblem} from '../class/Problem';

export class PercentageProblem extends Problem {
  constructor() {
    super();
  }

  mathFn(maxA: number = 9, maxB: number = 99): iProblem {
    let a: number = this.random(maxA);
    let b: number = this.random(maxB);

    this.answer = Math.round(((a / b) * 100) * 1000) / 1000; //round to 3 decimals
    this.answer = `${this.answer}%`;
    this.question = `What percentage of ${b} is the number ${a}? (__%)`;
    return {question: this.question, answer: this.answer}
  }
}

export default PercentageProblem
