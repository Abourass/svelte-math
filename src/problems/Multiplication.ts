import Problem, {questionDifficulty, digits, iProblem} from '../class/Problem';

export default class MultiplicationProblem extends Problem {
  constructor() {
    super();
  }

  easyDigits(maxA: number = 12, maxB: number = 12): digits {
    return super.easyDigits(maxA, maxB);
  }

  mediumDigits(maxA: number = 25, maxB: number = 25): digits {
    return super.mediumDigits(maxA, maxB);
  }

  hardDigits(maxA: number = 100, maxB: number = 100): digits {
    return super.hardDigits(maxA, maxB);
  }

  mathFn(difficultyLevel: questionDifficulty): iProblem {
    const {digitA, digitB} = this.chooseDigits(difficultyLevel)

    this.answer = digitA * digitB;
    this.question = `${digitA} x ${digitB}`;
    return {question: this.question, answer: this.answer}
  }
}
