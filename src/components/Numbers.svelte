<script>
  import Number from './Number.svelte';
  export let numbers;

  const numbersArray = Object.keys(numbers).map(key => ({
    tag: key,
    value: numbers[key]
  }));
</script>

<style>
  .numbers {
    /* display: flex;
    justify-content: space-around; */
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0;
    background-color: var(--purpleLight);
    padding: 15px 0;
  }
</style>

<div class="numbers">
  {#each numbersArray as number}
    <Number {number} />
  {/each}
</div>
