<script lang="ts">
  import type {questionDifficulty} from '../class/Problem';
  import {userAnswer, questionsCorrect, questionsWrong, completedQuestions} from '../stores/historyStore';
  import {problemCategories, problems} from '../stores/preferencesStore';
  import range from '../modules/range'
  import Question from './Question.svelte';
  import iziToast from 'izitoast';
  import {writable} from 'svelte/store';
  import problemGenerator from '../modules/problemGenerator';

  // Props
  export let totalQuestions = 10;
  export let triesPerQuestion = 3;
  export let difficulty: questionDifficulty = 'easy';
  export let time;

  // Variables
  const triesLeft = writable(triesPerQuestion);

  const restart = () => {
    $problems = [...problemGenerator(totalQuestions, $problemCategories, difficulty, true)];
    $triesLeft = triesPerQuestion;
    $questionsWrong = 0;
    $questionsCorrect = 0;
    $time = 0;
  }

  // Quiz Functions
  const wrong = () => {
    iziToast.error({
      title: 'Incorrect',
      message: 'Try Again',
      position: 'topRight'
    });

    questionsWrong.update(n => n + 1);
    triesLeft.update(n => n - 1);
  }

  const correct = () => {
    iziToast.success({
      title: 'Correct',
      message: 'Great Job!',
      position: 'topRight'
    })

    const saveQuestion = () => ({
      question: $problems[0].question,
      answer: $problems[0].answer,
      tries: (triesPerQuestion - $triesLeft) + 1,
      timeStamp: $time,
    })

    $completedQuestions = [...$completedQuestions, saveQuestion()]
    $problems = [...$problems.slice(1)]
    $userAnswer = null
    questionsCorrect.update(n => n + 1);
    $triesLeft = triesPerQuestion

    console.log({$completedQuestions})
  }

  const handleKeyboardCommands = (ev) => {
    const key = ev.key;

    if (key === 'Enter'){
      if ($triesLeft >= 1){
        if (Number($userAnswer) === $problems[0].answer){
          correct();
        } else {
          wrong()
        }
      } else {
        restart();
      }
    }
  }

  // Launch Action
  $problems = [...problemGenerator(totalQuestions, $problemCategories, difficulty, true)];
</script>


<style>
  .card {
    max-width: 600px;
    margin: 50px auto 40px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 1%;
    border-radius: 50px;
    background: linear-gradient(145deg, #104c73, #135a89);
    box-shadow:  20px 20px 45px #0f476d, -20px -20px 45px #156193;
  }

  .try-indicator {
    border-radius: 150px;
    background: linear-gradient(145deg, #104c73, #135a89);
    box-shadow:  5px 5px 10px #0f476d, -5px -5px 10px #156193;
    width: 2.2rem;
    margin-left: .5rem;
    margin-right: .5rem;
  }

  .column {
    display: flex;
    flex-direction: column;
  }
</style>

<svelte:window on:keydown={handleKeyboardCommands}/>

<div class="card">
  {#if $completedQuestions.length === totalQuestions}
    <h3>Congratulations</h3>
    {#each $totalQuestions as problem}
        <div class="column">
          <span>Problem: {problem.question}</span>
          <span>Answer: {problem.answer}</span>
          <span>Tries: {problem.tries}</span>
        </div>
    {/each}
  {:else}
    {#if $triesLeft >= 1}
      <div class="row">
        {#each [...range(1, $triesLeft)].sort((a, b) => b - a) as life}
          <div class="try-indicator"><span>&nbsp;</span></div>
        {/each}
      </div>
      <Question
        question={$problems[0].question}
        answer={$problems[0].answer}
        userAnswer={userAnswer}
        answerSymbol={$problems[0]?.symbol}
      />
      <div>
        {$completedQuestions.length + 1} / {totalQuestions}
      </div>
    {:else}
      <div>
        <h3>Sorry No More Tries Left</h3>
        <button on:click={restart} class="btn">Try Again</button>
      </div>
    {/if}
  {/if}

</div>

