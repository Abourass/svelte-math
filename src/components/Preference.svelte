<script lang="ts">
  // Props
  export let preference;
  export let label: string;

  const cleanForID = (label: string) => label.split(' ').join('');
</script>

<style></style>

<div class="preference-container">
  <label for="{cleanForID(label)}">{label}</label>
  <input bind:value={$preference} id="{cleanForID(label)}" type="number">
</div>
