<script>
  import Card from './Card.svelte';
  import { sortCriteria, totalVpns } from '../stores';

  export let vpns;
  // set the total of vpns to store
  totalVpns.set(vpns.length || 0);

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
  section {
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 2em;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 34px;
  }

  @media only screen and (min-width: 660px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (min-width: 1024px) {
    section {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media only screen and (min-width: 1280px) {
    section {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

<section>
  {#each sortedContent as vpn (vpn.id)}
    <Card {vpn} />
  {/each}
</section>
