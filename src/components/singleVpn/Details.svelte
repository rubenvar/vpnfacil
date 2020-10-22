<script>
  import countryFlagEmoji from 'country-flag-emoji';

  import SingleSection from './SingleSection.svelte';

  export let vpn;

  const manageBool = (opt) => {
    if (opt === 'yes') return true;
    if (opt === 'no') return false;
    if (opt === '') return undefined;
  };

  const details = [
    {
      title: 'P2P',
      text:
        '¿se permiten descargas usando tecnología peer2peer (como µTorrent)?',
      value: manageBool(vpn.p2p),
    },
    {
      title: 'Plan Business',
      text: '¿tiene un plan especial con ventajas para empresas?',
      value: manageBool(vpn.business),
    },
    {
      title: 'Plan Estudiantes',
      text: '¿tiene este VPN un plan con descuentos para estudiantes?',
      value: manageBool(vpn.students),
    },
    {
      title: 'No-Logs',
      text: `¿tiene ${vpn.name} explícitamente una política de no-logs?`,
      value: manageBool(vpn.noLogs),
    },
    {
      title: 'Pago Anónimo',
      text: '¿puedes pagar de forma anónima?',
      value: manageBool(vpn.anonPay),
    },
    {
      title: 'Pago con Criptomonedas',
      text: `¿tiene ${vpn.name} opción de pago con criptomoneda?`,
      value: manageBool(vpn.cryptoPay),
    },
  ];

  const casa = `🇵🇹`;
  let country, flag;
  if (vpn.basedIn)
    ({ name: country, emoji: flag } = countryFlagEmoji.get(vpn.basedIn));
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
    margin: 30px 0;
    &--longer {
      grid-template-columns: 1fr 2fr;
    }
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
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      span {
        background: var(--grey300);
        color: var(--grey100);
        padding: 1px 5px;
        border-radius: 5px;
        margin: 5px;
        font-size: 20px;
      }
    }
    .detail {
      font-size: 27px;
      font-family: var(--specialFont);
      text-align: center;
      margin: 0;
    }
    .chart {
      display: flex;
      flex-direction: column;
      text-align: right;
    }
    #country {
      font-size: 23px;
      text-align: right;
    }
  }
</style>

<SingleSection id="details">
  <h2>Detalles</h2>
  {#each details as detail}
    {#if detail.value !== undefined}
      <div class="row">
        <div class="title">
          <h3>{detail.title}</h3>
          {#if detail.text}<span>{detail.text}</span>{/if}
        </div>
        <p class="detail">{detail.value ? '✅ sí' : '❌ no'}</p>
        <div class="chart">
          <span>Posición # de 37</span>
          <span><a href="/">Mira los mejores</a></span>
        </div>
      </div>
    {/if}
  {/each}
  {#if vpn.cryptoPay === 'yes'}
    <div class="row row--longer">
      <div class="title">
        <h3>Criptomonedas aceptadas</h3>
        <span>se aceptan (al menos) estas opciones</span>
      </div>
      <div class="list">
        {#each vpn.cryptocurrenciesList.split(',') as crypto}
          <span>{crypto.replace(/\s/g, '')}</span>
        {/each}
      </div>
    </div>
  {/if}
  {#if vpn.basedIn !== ''}
    <div class="row row--longer">
      <div class="title">
        <h3>País de Registro</h3>
        <span>territorio donde está registrado
          {vpn.name}
          y cuyas leyes aplican</span>
      </div>
      {#if vpn.basedIn}
        <p id="country">{flag} {country}</p>
      {/if}
    </div>
  {/if}
</SingleSection>
