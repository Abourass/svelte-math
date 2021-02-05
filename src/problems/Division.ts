import Problem, {questionDifficulty, iProblem} from '../class/Problem';

export default class DivisionProblem extends Problem {
  constructor() {
    super();
  }

  mathFn(difficultyLevel: questionDifficulty): iProblem {
    const {digitA, digitB} = this.chooseDigits(difficultyLevel)

    const result = digitA / digitB
    this.answer = (result.toString().length > 2)
      ? Number(result.toFixed(2))
      : result;
    this.question = `${digitA} / ${digitB}`;
    return {question: this.question, answer: this.answer}
  }
}
