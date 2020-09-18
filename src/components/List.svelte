<script>
  import Card from './Card.svelte';

  export let vpns;

  // sorting type selected, coming from Sort component through index
  export let selectedSort = undefined;
  let sortedContent;

  // default sort vpns for now, criteria will be passed from Sort
  vpns = vpns.sort((first, sec) => {
    if (first.name > sec.name) {
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
