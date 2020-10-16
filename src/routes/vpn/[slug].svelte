<script context="module">
  export async function preload({ params }) {
    const response = await this.fetch(`${process.env.ENDPOINT}/${params.slug}`);
    const data = await response.json();

    if (data.statusCode === 200) {
      return { vpn: data.body };
    } else {
      this.error(data.statusCode, data.body);
    }
  }
</script>

<script>
  import { scrollto } from 'svelte-scrollto';
  // import fetch from 'node-fetch';

  import Compatible from '../../components/singleVpn/Compatible.svelte';
  import Details from '../../components/singleVpn/Details.svelte';
  import Languages from '../../components/singleVpn/Languages.svelte';
  import Pricing from '../../components/singleVpn/Pricing.svelte';
  import Ratings from '../../components/singleVpn/Ratings.svelte';
  import Technical from '../../components/singleVpn/Technical.svelte';
  import Warranty from '../../components/singleVpn/Warranty.svelte';
  import SingleSection from '../../components/singleVpn/SingleSection.svelte';
  import Numbers from '../../components/singleVpn/Numbers.svelte';

  export let vpn;

  const tests = false;
  const review = false;

  const technicalExists =
    vpn.protocolsList !== '' || vpn.socks5 !== '' || vpn.moreList !== '';

  async function postVote(rat) {
    const resp = await fetch(`${process.env.ENDPOINT}/user-rating`, {
      method: 'POST',
      body: JSON.stringify({ slug: vpn.slug, rating: rat }),
    });
    const json = await resp.json();
    console.log(json);
  }
</script>

<style lang="scss">
  #bar {
    div {
      max-width: 1120px;
      margin: 0 auto;
    }
    background: white;
    padding: 20px var(--defSidePadding);
    position: sticky;
    top: 0;
    z-index: 99;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
    nav {
      display: flex;
      justify-content: space-between;
      span {
        cursor: pointer;
        &:hover {
          color: var(--primary500);
        }
      }
    }
  }
</style>

{#if !vpn.name}
  <p>Este VPN no existe...</p>
{:else}
  <SingleSection id="top">
    <img src="vpns/{vpn.id}.jpg" alt="Logo de {vpn.name}" />
    <h1>{vpn.name}</h1>
    <img src="screenshots/{vpn.id}.png" alt="Página principal de {vpn.name}" />
    <p>{vpn.description}</p>
    <button on:click={() => postVote('Good')}>Good {vpn.userRatingGood}</button>
    <button on:click={() => postVote('Bad')}>Bad {vpn.userRatingBad}</button>
  </SingleSection>

  <section id="bar">
    <div>
      <nav>
        <span use:scrollto={'#ratings'}>Puntuaciones</span>
        <span use:scrollto={'#numbers'}>Números</span>
        <span use:scrollto={'#languages'}>Idiomas</span>
        <span use:scrollto={'#warranty'}>Garantía</span>
        <span use:scrollto={'#compatible'}>Compatibilidad</span>
        {#if tests}<span use:scrollto={'#test'}>Pruebas</span>{/if}
        <span use:scrollto={'#details'}>Detalles</span>
        {#if technicalExists}
          <span use:scrollto={'#technical'}>Técnico</span>
        {/if}
        <span use:scrollto={'#pricing'}>Precios</span>
        {#if review}<span use:scrollto={'#review'}>Review</span>{/if}
      </nav>
    </div>
  </section>

  <Ratings {vpn} />

  <Numbers {vpn} />

  <Languages {vpn} />

  <Warranty {vpn} />

  <Compatible {vpn} />

  {#if tests}
    <SingleSection>
      <h2>Test</h2>
    </SingleSection>
  {/if}

  <Details {vpn} />

  {#if technicalExists}
    <Technical {vpn} />
  {/if}

  <Pricing {vpn} />

  {#if review}
    <SingleSection>
      <h2>Review</h2>
    </SingleSection>
  {/if}
{/if}
