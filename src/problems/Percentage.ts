import Problem, {questionDifficulty, iProblem} from '../class/Problem';

export default class PercentageProblem extends Problem {
  private readonly answerSymbol: string;
  constructor() {
    super();
    this.answerSymbol = "%"
  }

  mathFn(difficultyLevel: questionDifficulty): iProblem {
    const {digitA, digitB} = this.chooseDigits(difficultyLevel)

    function percentage(partialValue: number, totalValue: number): number {
      const percent: number =  (100 * partialValue) / totalValue;

      if (percent.toString().length > 2) return Number(percent.toFixed(2))
      return percent
    }

    this.answer = percentage(digitA, digitB); //round to hundredths
    this.question = `${digitA} is what percent of ${digitB}?`;
    return {question: this.question, answer: this.answer, symbol: this.answerSymbol}
  }
}
