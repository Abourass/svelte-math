import Problem, {iProblem} from '../class/Problem';

export default class PercentageProblem extends Problem {
  private readonly answerSymbol: string;
  constructor() {
    super();
    this.answerSymbol = "%"
  }

  mathFn(maxA: number = 9, maxB: number = 100): iProblem {
    let a: number = this.random(maxA);
    let b: number = this.random(maxB);

    function percentage(partialValue: number, totalValue: number): number {
      const percent: number =  (100 * partialValue) / totalValue;

      if (percent.toString().length > 2) return Number(percent.toFixed(2))
      return percent
    }

    this.answer = percentage(a, b); //round to hundredths
    this.question = `${a} is what percent of ${b}?`;
    return {question: this.question, answer: this.answer, symbol: this.answerSymbol}
  }
}
