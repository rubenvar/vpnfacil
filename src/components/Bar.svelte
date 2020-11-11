<script>
  import { LayoutList, GridDots } from 'tabler-icons-svelte';
  import { totalVpns } from '../stores/state';
  import { view } from '../stores';
  import Sort from '../components/Sort.svelte';
  import Filter from '../components/Filter.svelte';

  // get the total of vpns from store
  let total = null;
  totalVpns.subscribe((val) => (total = val));
  let tableView = true;
  view.subscribe((val) => (tableView = val === 'table'));
</script>

<style lang="scss">
  header {
    background: white;
    padding: 0;
    margin: 0 0 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    .container {
      margin: 0 auto;
      padding: 12px var(--defSidePadding) 15px var(--defSidePadding);
      max-width: var(--maxWidth);
      display: grid;
      grid-gap: 25px;
      gap: 25px;
      grid-template-columns: 1fr;
      align-items: start;
      @media only screen and (min-width: 680px) {
        grid-template-columns: 1fr 1fr 3fr;
      }
      #general-info {
        display: none;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        @media only screen and (min-width: 767px) {
          display: flex;
        }
        p {
          margin: 0 0 5px;
          color: var(--grey500);
        }
        .buttons {
          display: flex;
          // justify-content: space-around;
          button {
            // color: #444;
            box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
            border: 1px solid #ddd;
            border-radius: 10px;
            background-color: #fff;
            cursor: pointer;
            transition: all 0.3s;
            line-height: 1;
            // padding: 0.6em 13px 0.5em;
            padding: 6px 18px;
            &:disabled {
              cursor: unset;
              opacity: 0.8;
              // color: #4447;
              box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.01);
              background-color: #fefefe;
            }
            &:not(:disabled):hover {
              border-color: #888;
              color: #1a936b;
            }
            &:not(:disabled):focus {
              border-color: #aaa;
              /* box-shadow: 0 0 0 3px -moz-mac-focusring; */
              box-shadow: 0 0 0 2px var(--secondary300);
              color: #222;
              outline: none;
            }
            &:last-child {
              margin-left: 12px;
            }
          }
        }
      }
    }
  }
</style>

<header>
  <div class="container">
    <div id="general-info">
      <p>Estás viendo {total} VPNs</p>
      <div class="buttons">
        <button
          disabled={tableView}
          on:click={() => view.set('table')}
          title="Cambiar a vista de Tabla">
          <LayoutList color={tableView ? '#4447' : '#444'} />
          <!-- Tabla -->
        </button>
        <button
          disabled={!tableView}
          on:click={() => view.set('blocks')}
          title="Cambiar a vista de Bloques">
          <GridDots color={tableView ? '#444' : '#4447'} />
          <!-- Bloques -->
        </button>
      </div>
    </div>
    <Sort />
    <Filter />
  </div>
</header>
