import Problem, {questionDifficulty, iProblem} from '../class/Problem';

export default class AdditionProblem extends Problem {
  constructor() {
    super();
  }

  mathFn(difficultyLevel: questionDifficulty): iProblem {
    const {digitA, digitB} = this.chooseDigits(difficultyLevel)

    this.answer = digitA + digitB;
    this.question = `${digitA} + ${digitB}`;
    return {question: this.question, answer: this.answer}
  }
}

