<script>
  import { onMount } from 'svelte';
  import { sortCriteria } from '../stores';

  const options = [
    { id: 1, text: 'Puntuación', criteria: 'rating' },
    { id: 2, text: 'Servidores', criteria: 'servers' },
    { id: 3, text: 'Países', criteria: 'countries' },
    { id: 4, text: 'Alfabético', criteria: 'name' }
  ];

  // get sorting criteria from store
  let selectedSortCriteria;
  sortCriteria.subscribe(val => (selectedSortCriteria = val));

  // store sorting crteria
  $: selected = selectedSortCriteria;

  // save selected to localStorage
  const handleChange = () => sortCriteria.set(selected);

  // send default sorting type on mount
  onMount(() => handleChange());
</script>

<select bind:value={selected} on:change={handleChange}>
  {#each options as option}
    <option value={option} selected={option.id === selected.id}>
      {option.text}
    </option>
  {/each}
</select>
