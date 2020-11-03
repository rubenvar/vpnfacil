<script>
  import { totalVpns } from '../stores/state';
  import { view } from '../stores';
  import Sort from '../components/Sort.svelte';
  import Filter from '../components/Filter.svelte';

  // get the total of vpns from store
  let total = null;
  totalVpns.subscribe((val) => (total = val));
  let tableView = true;
  view.subscribe((val) => (tableView = val === 'table'));

  function changeView() {
    view.set(tableView ? 'block' : 'table');
  }
</script>

<style lang="scss">
  header {
    background: white;
    padding: 0;
    margin: 0 0 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    @media only screen and (min-width: 1024px) {
      position: sticky;
      top: 0;
      z-index: 999;
    }
    .container {
      margin: 0 auto;
      padding: 12px var(--defSidePadding) 15px var(--defSidePadding);
      max-width: var(--maxWidth);
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr;
      align-items: start;
      @media only screen and (min-width: 680px) {
        grid-template-columns: 1fr 1fr 3fr;
      }
      #general-info {
        display: none;
        display: flex;
        flex-direction: column;
        @media only screen and (min-width: 680px) {
          display: unset;
        }
        p {
          margin: 0;
          color: var(--grey500);
        }
      }
    }
  }
</style>

<header>
  <div class="container">
    <div id="general-info">
      <p>Estás viendo {total} VPNs</p>
      <p>
        Vista:
        {tableView ? 'tabla' : 'bloques'}
        <span class="change-view" on:click={changeView}>Cambiar</span>
      </p>
    </div>
    <Sort />
    <Filter />
  </div>
</header>
