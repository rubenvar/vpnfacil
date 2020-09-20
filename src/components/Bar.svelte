<script>
  import Sort from '../components/Sort.svelte';
</script>

<style>
  div {
    background: white;
    padding: var(--defSidePadding);
    margin: 0 0 30px;
    border-bottom: 1px solid grey;
  }
  @media only screen and (min-width: 1024px) {
    div {
      position: sticky;
      top: 0;
      z-index: 999;
    }
  }
</style>

<div>
  <Sort />
</div>
