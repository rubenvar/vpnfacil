<script>
  import { onMount } from 'svelte';
  const options = [
    { id: 1, text: 'Alfabético' },
    { id: 2, text: 'Servidores' },
    { id: 3, text: 'Paises' }
  ];

  // default sorting type
  let selected = options[0];
  // funtion from index to manage option selected in Sort
  export let onChange;

  const handleChange = () => {
    onChange(selected);
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
  <form action="POST">
    <select bind:value={selected} on:change={handleChange}>
      {#each options as option}
        <option value={option}>{option.text}</option>
      {/each}
    </select>
  </form>
</div>
