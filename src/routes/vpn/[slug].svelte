<script context="module">
  export async function preload({ params }) {
    const response = await this.fetch(`${process.env.ENDPOINT}/${params.slug}`);
    const allResponse = await this.fetch(`${process.env.ENDPOINT}`);
    const data = await response.json();
    const allData = await allResponse.json();

    if (data.statusCode === 200) {
      return { vpn: data.body, vpns: allData.body };
    } else {
      this.error(data.statusCode, data.body);
    }
  }
</script>

<script>
  import Nav from '../../components/singleVpn/Nav.svelte';
  import Top from '../../components/singleVpn/Top.svelte';
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
  export let vpns;

  const tests = false;
  const review = false;

  const technicalExists =
    vpn.protocolsList !== '' || vpn.socks5 !== '' || vpn.moreList !== '';
</script>

{#if !vpn.name}
  <p>Este VPN no existe...</p>
{:else}
  <Top {vpn} />

  <Nav {tests} {review} {technicalExists} />

  <Ratings {vpn} />

  <Numbers {vpn} {vpns} />

  <Languages {vpn} />

  <Warranty {vpn} {vpns} />

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
