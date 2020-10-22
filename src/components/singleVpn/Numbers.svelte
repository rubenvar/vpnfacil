<script>
  import SingleSection from './SingleSection.svelte';
  import Chart from './Chart.svelte';
  import { formatNumber } from '../../utils';
  export let vpn;
  export let vpns;

  const serversData = vpns
    .filter((vpn) => vpn.servers > 0)
    .map((vpn) => ({ name: vpn.name, id: vpn.id, value: vpn.servers }))
    .sort((a, b) => a.value < b.value);
  const ipsData = vpns
    .filter((vpn) => vpn.ips > 0)
    .map((vpn) => ({ name: vpn.name, id: vpn.id, value: vpn.ips }))
    .sort((a, b) => a.value < b.value);
  const countriesData = vpns
    .filter((vpn) => vpn.countries > 0)
    .map((vpn) => ({ name: vpn.name, id: vpn.id, value: vpn.countries }))
    .sort((a, b) => a.value < b.value);
  const locationsData = vpns
    .filter((vpn) => vpn.locations > 0)
    .map((vpn) => ({ name: vpn.name, id: vpn.id, value: vpn.locations }))
    .sort((a, b) => a.value < b.value);
  const devicesData = vpns
    .filter((vpn) => vpn.devices > 0)
    .map((vpn) => ({ name: vpn.name, id: vpn.id, value: vpn.devices }))
    .sort((a, b) => a.value < b.value);

  const numbers = [
    {
      title: 'Servidores',
      text: 'más servidores VPN = más opciones tienes para conectarte',
      value: vpn.servers,
      data: serversData,
      plus: vpn.serversPlus && vpn.serversPlus === 'yes',
    },
    {
      title: 'IPs',
      text: 'más IPs = más posibles IPs podrán asignarte',
      value: vpn.ips,
      data: ipsData,
      plus: vpn.ipsPlus && vpn.ipsPlus === 'yes',
    },
    {
      title: 'Países',
      text: 'más países = más ubicaciones desde las que hacer tu conexión',
      value: vpn.countries,
      data: countriesData,
      plus: vpn.countriesPlus && vpn.countriesPlus === 'yes',
    },
    {
      title: 'Ubicaciones',
      text: 'lugares totales (cuidades, etc.) donde hay servidores',
      value: vpn.locations,
      data: locationsData,
    },
    {
      title: 'Dispositivos',
      text: 'cuántos dispositivos puedes conectar al mismo tiempo',
      value: vpn.devices,
      data: devicesData,
    },
  ];
</script>

<style lang="scss">
  h2 {
    font-family: var(--specialFont);
    font-weight: 700;
    font-size: 36px;
    padding-bottom: 4px;
    border-bottom: 3px solid var(--primary500);
    margin-bottom: 36px;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 15px;
    transition: all 0.3s;
    padding: 7px;
    margin: 20px 0;
    &:hover {
      background: var(--secondary100);
    }
    .title {
      display: flex;
      flex-direction: column;
      h3 {
        margin: 0 0 3px 0;
        font-size: 21px;
      }
      span {
        color: var(--grey300);
        font-size: 13px;
        line-height: 1.4;
        max-width: 80%;
      }
    }
    .number {
      font-size: 32px;
      font-family: var(--specialFont);
      text-align: center;
      margin: 0;
      span {
        font-size: 23px;
        line-height: 1;
        color: var(--grey500);
        vertical-align: super;
      }
    }
    .chart {
      display: flex;
      flex-direction: column;
      text-align: right;
    }
  }
</style>

<SingleSection id="numbers">
  <h2>En Cifras</h2>
  {#each numbers as number}
    {#if number.value > 0 || number.value === 'unlimited'}
      <div class="row">
        <div class="title">
          <h3>{number.title}</h3>
          {#if number.text}<span>{number.text}</span>{/if}
        </div>
        <p class="number">
          {#if number.value === 'unlimited'}
            ilimitados
          {:else}
            {formatNumber(number.value, false)}{#if number.plus}
              <span>+</span>
            {/if}
          {/if}
        </p>
        <div class="chart">
          <Chart
            title={number.title}
            data={number.data}
            id={vpn.id}
            color={vpn.color} />
          <!-- {:else if number.title === 'Países'}
            <Chart
              title="paises"
              data={paisesData}
              id={vpn.id}
              color={vpn.color} />
          {:else}
            <span>Posición # de 37</span>
            <span><a href="/">Mira los mejores</a></span>
          {/if} -->
        </div>
      </div>
    {/if}
  {/each}
</SingleSection>
