<script>
  import { onMount } from 'svelte';
  import { sortCriteria, direction } from '../stores';

  const options = [
    { id: 1, text: 'Puntuación', criteria: 'rating' },
    { id: 2, text: 'Servidores', criteria: 'servers' },
    { id: 3, text: 'Países', criteria: 'countries' },
    { id: 4, text: 'Dispositivos', criteria: 'devices' },
    { id: 5, text: 'Alfabético', criteria: 'name' },
  ];

  // get sorting criteria from store
  let selectedSortCriteria;
  sortCriteria.subscribe((val) => {
    return (selectedSortCriteria = val);
  });

  // default by rating if nothing on localStorage (and for first paint)
  let selected =
    selectedSortCriteria !== null ? selectedSortCriteria : options[0];
  // store sorting crteria
  // $: selected = selectedSortCriteria;

  // save selected to localStorage
  const handleChange = () => {
    sortCriteria.set(selected);
    direction.set(true);
  };

  // send default sorting type on mount
  onMount(() => handleChange());

  // manage sorting direction
  let decrease;
  direction.subscribe((val) => (decrease = val));
  const handleDirection = () => direction.set(!decrease);
</script>

<style>
  p {
    color: var(--grey500);
    margin: 0 0 5px;
  }

  .buttons {
    display: flex;
  }

  select {
    display: block;
    font-size: 16px;
    font-weight: 400;
    color: #444;
    line-height: 1;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #ddd;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    transition: all 0.3s;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231A936B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #fff 0%, #fff 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
  }
  select::-ms-expand {
    display: none;
  }
  select:hover,
  button:hover {
    border-color: #888;
  }
  select:focus,
  button:focus {
    border-color: #aaa;
    /* box-shadow: 0 0 0 3px -moz-mac-focusring; */
    box-shadow: 0 0 0 2px var(--secondary300);
    color: #222;
    outline: none;
  }
  select option {
    font-weight: normal;
  }

  button {
    margin-left: 12px;
    color: #444;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    padding: 0 10px;
  }
</style>

<div>
  <p>Ordena</p>
  <div class="buttons">
    <select bind:value={selected} on:change={handleChange}>
      {#each options as option}
        <option value={option} selected={option.id === selected.id}>
          {option.text}
        </option>
      {/each}
    </select>
    <button on:click={handleDirection}>{decrease ? '↑' : '↓'}</button>
  </div>
</div>
