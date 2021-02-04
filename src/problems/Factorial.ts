import Problem, {iProblem} from '../class/Problem';
import range from '../modules/range';

export class FactorialProblem extends Problem {
  constructor() {
    super();
  }

  mathFn(num: number = this.random(9)): iProblem {
    let numberArray: Array<number> = [...range(1, num)];
    this.answer = numberArray.reduce((digitA, digitB) => digitA * digitB)
    this.question = `${num}!`;
    return {question: this.question, answer: this.answer}
  }
}

export default FactorialProblem
