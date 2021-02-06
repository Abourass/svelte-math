<script lang='typescript'>
  import {onMount} from 'svelte';
  import Quiz from './components/Quiz.svelte';
  import {time} from './stores/historyStore';
  import {numberOfQuestions, triesPerQuestion} from './stores/preferencesStore';
  import Config from './components/Config.svelte';

  onMount(() => {
    const interval = setInterval(() => time.update(t => t + 1), 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  .App {
    text-align: center;
  }
  .App code {
    background: #0002;
    padding: 4px 8px;
    border-radius: 4px;
  }
  .App p {
    margin: 0.4rem;
  }
  .App-header {
    color: #d6d6d6;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
</style>

<div class="App">
  <Config
    numberOfQuestions={numberOfQuestions}
    triesPerQuestion={triesPerQuestion}
  />
  <header class="App-header">
    <Quiz
      time={time}
      totalQuestions={$numberOfQuestions}
      triesPerQuestion={$triesPerQuestion}
    />
  </header>

  <footer>
    <p><code>{$time}</code></p>
  </footer>
</div>
