<script>
  import { stores } from '@sapper/app';
  import Header from '../components/Header.svelte';
  import Hero from '../components/Hero.svelte';
  import Footer from '../components/Footer.svelte';

  const { page } = stores();
  $: route = $page.path;
</script>

<style>
  main {
    position: relative;
    /* max-width: calc(100vw); */
    max-width: var(--maxWidth);
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Header />

{#if route === '/'}
  <Hero />
{/if}

<main id="main">
  <slot />
</main>

<Footer />
