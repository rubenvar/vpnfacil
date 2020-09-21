<script>
  import Card from './Card.svelte';
  import { sortCriteria } from '../stores';
  import { totalVpns } from '../stores/state';

  export let vpns;
  // set the total of vpns to store
  totalVpns.set(vpns.length || 0);

  // get sorting criteria from store
  let selectedSort = undefined;
  sortCriteria.subscribe(val => (selectedSort = val));

  $: if (selectedSort) {
    vpns = vpns.sort((a, b) => {
      let first = a[selectedSort.criteria];
      let sec = b[selectedSort.criteria];

      if (selectedSort.criteria === 'name') {
        // invert order for alphabetical
        first = b.name.toLowerCase();
        sec = a.name.toLowerCase();
      }

      if (first < sec) return 1;
      if (first > sec) return -1;
      return 0;
    });
  }

  $: sortedContent = vpns;
</script>

<style>
  section {
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 var(--defSidePadding);
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
  {#each sortedContent as vpn, index (vpn.id)}
    <Card {vpn} i={index} />
  {/each}
</section>
