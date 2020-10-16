<script>
  import SingleSection from './SingleSection.svelte';

  export let vpn;

  const numbers = [
    {
      title: 'Ubicaciones',
      val: vpn.locations,
    },
    {
      title: 'Servidores',
      val: vpn.servers,
      plus: vpn.serversPlus && vpn.serversPlus === 'yes',
    },
    { title: 'IPs', val: vpn.ips, plus: vpn.ipsPlus && vpn.ipsPlus === 'yes' },
    {
      title: 'Países',
      val: vpn.countries,
      plus: vpn.countriesPlus && vpn.countriesPlus === 'yes',
    },
    { title: 'Dispositivos', val: vpn.devices },
  ];
</script>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>

<SingleSection id="numbers">
  <h2>Numbers</h2>
  {#each numbers as number}
    {#if number.val > 0}
      <div>
        <p>{number.title}</p>
        <p>
          {number.val}{#if number.plus}+{/if}
        </p>
        <p>GRAF</p>
      </div>
    {/if}
  {/each}
</SingleSection>
