<script>
  import Card from './Card.svelte';
  import { sortCriteria } from '../stores';

  export let vpns;

  // get sorting criteria from store
  let selectedSort = undefined;
  sortCriteria.subscribe(val => (selectedSort = val));

  // default sort vpns for first paint, until criteria is read from localStorage/default
  vpns = vpns.sort((first, sec) => {
    if (first.rating < sec.rating) {
      return 1;
    }
    return -1;
  });

  $: if (selectedSort) {
    vpns = vpns.sort((first, sec) => {
      if (first[selectedSort.criteria] < sec[selectedSort.criteria]) {
        return selectedSort.criteria === 'name' ? -1 : 1;
      }
      return selectedSort.criteria === 'name' ? 1 : -1;
    });
  }

  $: sortedContent = vpns;
</script>

<style>
  div {
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 2em;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 34px;
  }

  @media only screen and (min-width: 660px) {
    div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (min-width: 1024px) {
    div {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media only screen and (min-width: 1280px) {
    div {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

<div>
  {#each sortedContent as vpn (vpn.id)}
    <Card {vpn} />
  {/each}
</div>
