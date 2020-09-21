<script>
  import { totalVpns } from '../stores/state';
  import Sort from '../components/Sort.svelte';
  import Filter from '../components/Filter.svelte';

  // get the total of vpns from store
  let total = null;
  totalVpns.subscribe(val => (total = val));
</script>

<style>
  header {
    background: white;
    padding: 0;
    margin: 0 0 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  header div {
    margin: 0 auto;
    padding: 12px var(--defSidePadding) 15px var(--defSidePadding);
    max-width: var(--maxWidth);
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr;
    align-items: start;
  }

  header div p {
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
    header div {
      grid-template-columns: 1fr 1fr 3fr;
    }
    header div p {
      display: unset;
    }
  }
</style>

<header>
  <div>
    <p>Estás viendo {total} VPNs</p>
    <Sort />
    <Filter />
  </div>
</header>
