<script>
  import { stores } from '@sapper/app';
  import Header from '../components/Header.svelte';
  import Hero from '../components/Hero.svelte';

  const { page } = stores();
  $: route = $page.path;
</script>

<style>
  main {
    position: relative;
    max-width: calc(100vw);
    background-color: white;
    /* background-color: var(--purpleLight); */
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Header />

{#if route === '/'}
  <Hero />
{/if}

<main>
  <slot />
</main>
