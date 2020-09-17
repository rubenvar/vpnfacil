<script>
  import Card from './Card.svelte';

  export let vpns;

  // sorting type selected, coming from Sort component through index
  export let selectedSort = undefined;
  $: if (selectedSort) {
    console.log(`selected ${selectedSort.id}, with text ${selectedSort.text}`);
  }

  let sortedContent;

  // default sort vpns for now, criteria will be passed from Sort
  vpns = vpns.sort((first, sec) => {
    if (first.name > sec.name) {
      return 1;
    }
    return -1;
  });

  $: if (selectedSort && selectedSort.id === 2) {
    console.log('whaaat');
    vpns = vpns.sort((first, sec) => {
      if (first.servers < sec.servers) {
        return 1;
      }
      return -1;
    });
  }

  $: {
    sortedContent = vpns;
    console.log(sortedContent);
  }
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
  {#each sortedContent as vpn}
    <Card {vpn} />
  {/each}
</div>
