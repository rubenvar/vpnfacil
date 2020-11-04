<script>
  import { onMount } from 'svelte';
  import Card from './Card.svelte';
  import Row from './Row.svelte';
  import { sortCriteria, direction, view } from '../stores';
  import { totalVpns } from '../stores/state';

  export let vpns;
  // set the total of vpns to store
  if (vpns) totalVpns.set(vpns.length || 0);

  // get sorting criteria from store
  let selectedSort = undefined;
  sortCriteria.subscribe((val) => (selectedSort = val));

  // get sorting direction from store
  let decrease = true;
  direction.subscribe((val) => (decrease = val));

  $: if (selectedSort) {
    vpns = vpns.sort((a, b) => {
      let first = a[selectedSort.criteria];
      let sec = b[selectedSort.criteria];

      if (selectedSort.criteria === 'name') {
        // invert order for alphabetical
        first = b.name.toLowerCase();
        sec = a.name.toLowerCase();
      }

      if (selectedSort.criteria === 'devices') {
        // convert 'unlimited' string to big number
        if (first === 'unlimited') first = 999;
        if (sec === 'unlimited') sec = 999;
      }

      // invert according to direction
      if (first < sec) return decrease ? 1 : -1;
      if (first > sec) return decrease ? -1 : 1;
      return 0;
    });
  }

  $: sortedContent = vpns;

  // manage view
  let tableView;
  view.subscribe((val) => (tableView = val === 'table'));

  // 'listen' for window width. if smaller than 767 onMount or on change (resize), force 'blocks' view
  onMount(() => {
    const mediaListener = window.matchMedia('(min-width: 767px)');

    if (!mediaListener.matches) view.set('blocks');

    mediaListener.addEventListener('change', (e) => {
      if (!e.matches) view.set('blocks');
    });
  });
</script>

<style lang="scss">
  section {
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 var(--defSidePadding);
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 34px;
    &.block-view {
      @media only screen and (min-width: 660px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media only screen and (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
</style>

<section class={tableView ? 'table-view' : 'block-view'}>
  {#each sortedContent as vpn, index (vpn.id)}
    {#if tableView}
      <Row {vpn} i={index} />
    {:else}
      <Card {vpn} i={index} />
    {/if}
  {/each}
</section>
