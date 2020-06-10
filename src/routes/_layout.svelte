<script>
  import Header from "../components/Header.svelte";
</script>

<style>
  main {
    position: relative;
    max-width: calc(100vw);
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Header />

<main>
  <slot />
</main>
