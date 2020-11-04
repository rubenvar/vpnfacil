<script>
  // import * as Sentry from '@sentry/browser';
  // import { Integrations } from '@sentry/tracing';
  // import { stores } from '@sapper/app';
  import GoogleAnalytics from '../components/GoogleAnalytics.svelte';
  import Header from '../components/Header.svelte';
  import Hero from '../components/Hero.svelte';
  import Footer from '../components/Footer.svelte';
  export let segment;

  // not working, on error app just crashes 🤷‍♂️
  // Sentry.init({
  //   dsn:
  //     'https://1ced485c97f04680b3576700891e7535@o221871.ingest.sentry.io/5496057',
  //   integrations: [new Integrations.BrowserTracing()],

  //   // We recommend adjusting this value in production, or using tracesSampler for finer control
  //   tracesSampleRate: 1.0,
  // });

  const dev = process.env.NODE_ENV === 'development';

  // this is how to get path, but I'm using the 'segment' prop now
  // const { page } = stores();
  // $: isHomepage = $page.path === '/';
</script>

<style>
  main {
    position: relative;
    background-color: white;
    box-sizing: border-box;
  }
</style>

{#if !dev}
  <GoogleAnalytics />
{/if}

<Header {segment} />

{#if !segment}
  <Hero />
{/if}

<main id="main">
  <slot />
</main>

<Footer />
