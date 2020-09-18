<script>
  import { onMount } from 'svelte';
  import { sortCriteria } from '../stores';

  // get sorting criteria from store
  let selectedSortCriteria;
  sortCriteria.subscribe(val => (selectedSortCriteria = val));

  const options = [
    { id: 1, text: 'Alfabético', criteria: 'name' },
    { id: 2, text: 'Servidores', criteria: 'servers' },
    { id: 3, text: 'Paises', criteria: 'countries' },
    { id: 4, text: 'Puntuación', criteria: 'rating' }
  ];

  // default sorting type
  // let selected = options[0];
  $: selected = selectedSortCriteria;
  // funtion from index to manage option selected in Sort
  export let onChange;

  const handleChange = () => {
    // send selected to index -> List
    onChange(selected);
    // save selected to localStorage
    sortCriteria.set(selected);
  };

  // send default sorting type on mount
  onMount(() => handleChange());
</script>

<style>
  div {
    padding: 30px;
    margin: 0 0 30px;
    background: grey;
  }
</style>

<div>
  <select bind:value={selected} on:change={handleChange}>
    {#each options as option}
      <option value={option}>{option.text}</option>
    {/each}
  </select>
  {#if process.browser}
    <p>Ordenando por {selectedSortCriteria.text}</p>
  {/if}
</div>
