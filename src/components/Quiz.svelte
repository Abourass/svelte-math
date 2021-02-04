<script lang="ts">
  import type {iProblem} from '../class/Problem';
  import type {QuestionAbbreviations} from '../stores/preferencesStore'
  import {problemCategories, problems} from '../stores/preferencesStore';
  import {userAnswer, questionsCorrect, questionsWrong} from '../stores/historyStore';
  import {getRandomInt} from '../modules/random';
  import AdditionProblem from '../problems/Addition';
  import SubtractionProblem from '../problems/Subtraction';
  import MultiplicationProblem from '../problems/Multiplication';
  import DivisionProblem from '../problems/Division';
  import FactorialProblem from '../problems/Factorial';
  import PercentageProblem from '../problems/Percentage';
  import ExponentProblem from '../problems/Exponent';
  import Question from './Question.svelte';
  import iziToast from 'izitoast';

  import range from '../modules/range';
  import {writable} from 'svelte/store';

  const ZeroThroughTen: Array<number> = [...range(0, 10)];

  // Quiz Functions
  function addCategory(categories: Array<QuestionAbbreviations>): void;
  function addCategory(category: QuestionAbbreviations) {
    if (Array.isArray(category)) {
      $problemCategories = [...$problemCategories, ...category]
    } else {
      $problemCategories = [...$problemCategories, category]
    }
  }

  // Props
  export let totalQuestions = 10;
  export let triesPerQuestion = 3;
  export let difficulty = 'easy';
  export let time;

  const triesLeft = writable(triesPerQuestion);

  const generateProblems = (): Array<iProblem> => {
    const mathProblems = [];

    for (let i = 0; i < totalQuestions; i++) {
      const category = $problemCategories[getRandomInt(0, $problemCategories.length)];

      switch (category) {
        case "a": {
          mathProblems.push(new AdditionProblem().mathFn(10, 10));
          break;
        }
        case "s": {
          mathProblems.push(new SubtractionProblem().mathFn(10, 10));
          break;
        }
        case "m": {
          mathProblems.push(new MultiplicationProblem().mathFn(10, 10));
          break;
        }
        case "d": {
          mathProblems.push(new DivisionProblem().mathFn(10, 10));
          break;
        }
        case "f": {
          mathProblems.push(new FactorialProblem().mathFn(getRandomInt(1, 10)));
          break;
        }
        case "p": {
          mathProblems.push(new PercentageProblem().mathFn());
          break;
        }
        case "e": {
          mathProblems.push(new ExponentProblem().mathFn());
          break;
        }
      }
    }

    console.log(mathProblems)
    return mathProblems;
  }

  const handleKeyboardCommands = (ev) => {
    const key = ev.key;

    if (key === 'Enter'){
      if ($triesLeft >= 1){
        if (Number($userAnswer) === $problems[0].answer){
          console.log(true);
          iziToast.success({
            title: 'Correct',
            message: 'Great Job!',
            position: 'topRight'
          })

          $problems = [...$problems.slice(1)]
          $userAnswer = null
          questionsCorrect.update(n => n + 1);
          $triesLeft = triesPerQuestion
        } else {
          console.log('false');
          iziToast.error({
            title: 'Incorrect',
            message: 'Try Again',
            position: 'topRight'
          });

          questionsWrong.update(n => n + 1);
          triesLeft.update(n => n - 1);
          console.log($userAnswer)
        }
      }
    } else {
      restart();
    }
  }

  const restart = () => {
    $problems = [...generateProblems()];
    $triesLeft = triesPerQuestion;
    $questionsWrong = 0;
    $questionsCorrect = 0;
    $time = 0;
  }

  $problems = [...generateProblems()];
</script>


<style>
  .btn {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #185c8a;
    transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0px -6px 10px #3675a0, 0px 4px 15px rgb(0 0 0 / 15%);
    cursor: pointer;
    color: #c3c3c3;
    font-weight: 600;
  }
  .btn:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 2;
  }
  .btn:active {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.02);
  }
  .btn:active:after {
    box-shadow: inset 0px -2px 5px #3675a0, inset 0px 2px 5px rgba(0, 0, 0, 0.15);
  }
  button {
    border: 0;
  }

  button:focus {
    border: none;
    outline: 0 !important;
    outline-style: none;
  }

</style>

<svelte:window on:keydown={handleKeyboardCommands}/>

{#if $triesLeft >= 1}
  <Question
    question={$problems[0].question}
    answer={$problems[0].answer}
    userAnswer={userAnswer}
    tries={triesLeft}
    answerSymbol={$problems[0]?.symbol}
  />
{:else}
  <div>
    <h3>Sorry No More Tries Left</h3>
    <div class="btn-wrapper">
      <button on:click={restart} class="btn">Try Again</button>
    </div>
  </div>
{/if}
