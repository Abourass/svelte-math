<script lang="ts">
  import Modal from './Modal.svelte';

  // Props
  export let numberOfQuestions;
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  .settings-btn {
    border: 0;
    border-bottom-left-radius: 160px;
    border-bottom-right-radius: 160px;
    background: linear-gradient(145deg, #104c73, #135a89);
    box-shadow: 5px 5px 10px #0f476d, -5px -5px 10px #156193;
    margin-left: .5rem;
    margin-right: .5rem;
    padding-bottom: 0.6rem;
    padding-left: .5rem;
    padding-right: .5rem;
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
  }

  .wide {
    min-width: 50vw
  }

</style>

<Modal class="wide">
  <div slot="trigger" let:open>
    <button on:click={open} class="settings-btn">Settings</button>
  </div>

  <div slot="header">
    <h3>Settings and Options</h3>
  </div>

  <div slot="content" class="wide">
    <div class="row">
      <div class="preference-container">
        <label for="numberOfQuestions">Number of Questions</label>
        <input bind:value={$numberOfQuestions} id="numberOfQuestions">
      </div>
    </div>

  </div>

  <div slot="footer" let:close>
    <button on:click={close}>Close</button>
  </div>
</Modal>
