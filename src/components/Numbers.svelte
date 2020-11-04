<script>
  import Number from './Number.svelte';
  export let numbers;
  export let isRow = false;

  const numbersArray = Object.keys(numbers).map((key) => ({
    tag: key,
    value: numbers[key],
  }));
</script>

<style>
  .numbers {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin: 0;
    background-color: var(--primary100);
    padding: 15px 0;
  }
  .numbers.in-row {
    padding: 0;
    /* background: none; */
    height: 100%;
  }
</style>

<div class={`numbers${isRow ? ' in-row' : ''}`}>
  {#each numbersArray as number}
    <Number {number} {isRow} />
  {/each}
</div>
