import type {questionDifficulty, iProblem} from '../class/Problem';
import type {QuestionAbbreviations} from '../stores/preferencesStore';
import {getRandomInt} from './random';
import AdditionProblem from '../problems/Addition';
import SubtractionProblem from '../problems/Subtraction';
import MultiplicationProblem from '../problems/Multiplication';
import DivisionProblem from '../problems/Division';
import PercentageProblem from '../problems/Percentage';
import FactorialProblem from '../problems/Factorial';
import ExponentProblem from '../problems/Exponent';

export default function problemGenerator(numberOfProblem: number, categories: Array<QuestionAbbreviations>, difficulty: questionDifficulty, debug: boolean = false): Array<iProblem> {
  const problems: Array<iProblem> = [];

  for (let i = 0; i < numberOfProblem; i++) {
    const category = categories[getRandomInt(0, categories.length - 1)];

    switch (category) {
      case "a": {
        problems.push(new AdditionProblem().mathFn(difficulty));
        break;
      }
      case "s": {
        problems.push(new SubtractionProblem().mathFn(difficulty));
        break;
      }
      case "m": {
        problems.push(new MultiplicationProblem().mathFn(difficulty));
        break;
      }
      case "d": {
        problems.push(new DivisionProblem().mathFn(difficulty));
        break;
      }
      case "p": {
        problems.push(new PercentageProblem().mathFn(difficulty));
        break;
      }
      case "f": {
        problems.push(new FactorialProblem().mathFn());
        break;
      }
      case "e": {
        problems.push(new ExponentProblem().mathFn());
        break;
      }
    }
  }

  if (debug) console.log({problems});
  return problems;
}
