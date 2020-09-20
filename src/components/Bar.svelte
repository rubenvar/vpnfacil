<script>
  import { totalVpns } from '../stores';
  import Sort from '../components/Sort.svelte';
  import Filter from '../components/Filter.svelte';

  // get the total of vpns from store
  let total = null;
  totalVpns.subscribe(val => (total = val));
</script>

<style>
  header {
    background: white;
    padding: 12px var(--defSidePadding) 15px var(--defSidePadding);
    margin: 0 0 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr;
    align-items: start;
  }

  header p {
    margin: 0;
    color: var(--grey500);
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    header {
      position: sticky;
      top: 0;
      z-index: 999;
    }
  }

  @media only screen and (min-width: 680px) {
    header {
      grid-template-columns: 1fr 1fr 3fr;
    }
    header p {
      display: unset;
    }
  }
</style>

<header>
  <p>Estás viendo {total} VPNs</p>
  <Sort />
  <Filter />
</header>
