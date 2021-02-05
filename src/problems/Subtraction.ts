import Problem, {questionDifficulty, digits, iProblem} from '../class/Problem';

export default class SubtractionProblem extends Problem {
  constructor() {
    super();
  }

  easyDigits(): digits {
    return super.easyDigits(100, 50);
  }

  mathFn(difficultyLevel: questionDifficulty): iProblem {
    const {digitA, digitB} = this.chooseDigits(difficultyLevel)

    this.answer = digitA - digitB;
    this.question = `${digitA} - ${digitB}`;
    return {question: this.question, answer: this.answer}
  }
}
