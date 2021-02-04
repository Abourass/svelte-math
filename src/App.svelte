<script lang='typescript'>
  import {onMount} from 'svelte';
  import Quiz from './components/Quiz.svelte';

  let count: number = 0;

  onMount(() => {
    const interval = setInterval(() => count++, 1000);
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
    min-height: 93vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
</style>

<div class="App">
  <header class="App-header">
    <Quiz />
  </header>

  <footer>
    <p>Page has been open for <code>{count}</code> seconds.</p>
  </footer>
</div>
