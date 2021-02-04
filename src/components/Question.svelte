<script lang="ts">
  // Props
  export let question: string
  export let answer: number|string;
  export let userAnswer;
  export let answerSymbol: string
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

  .row {
    font-size: 3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .answer {
    background-color: #4d7fa0;
    color: #ffffff;
    font-size: 3rem;
    display: block;
    width: 30%;
    height: 100%;
    text-align: center;
    padding: 0 2px;
    /* border: 1px solid #a0b3b0; */
    border: 1px solid #306990;

    border-radius: 10px;
    -webkit-transition: border-color .25s ease, box-shadow .25s ease;
    transition: border-color .25s ease, box-shadow .25s ease;
  }

  .answer:focus { outline: 0; }
</style>

<div class="card">
  <div class="row">
    <span class="question">{question}</span>
    <span>&nbsp;=&nbsp;</span>
    <input class="answer" type="text" bind:value={$userAnswer} />
    {#if answerSymbol}
      {answerSymbol}
    {/if}
  </div>

</div>
