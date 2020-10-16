<script>
  import SingleSection from './SingleSection.svelte';

  export let vpn;

  const manageBool = (opt) => {
    if (opt === 'yes') return true;
    if (opt === 'no') return false;
    if (opt === '') return undefined;
  };

  const details = [
    { title: 'P2P', val: manageBool(vpn.p2p) },
    { title: 'Plan Business', val: manageBool(vpn.business) },
    { title: 'Descuento para Estudiantes', val: manageBool(vpn.students) },
    { title: 'Política Estricta de No-Logs', val: manageBool(vpn.noLogs) },
    { title: 'Pago Anónimo', val: manageBool(vpn.anonPay) },
    { title: 'Pago con Criptomonedas', val: manageBool(vpn.cryptoPay) },
  ];
</script>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>

<SingleSection id="details">
  <h2>Detalles</h2>
  {#each details as detail}
    {#if detail.val !== undefined}
      <div>
        <p>{detail.title}</p>
        <p>{detail.val ? 'Sí 👍' : 'No 👎'}</p>
        <p>GRAF</p>
      </div>
    {/if}
  {/each}
  {#if vpn.cryptoPay === 'yes'}
    <div>
      <p>Criptomonedas aceptadas</p>
      <div>
        {#each vpn.cryptocurrenciesList.split(',') as crypto}
          <span>{crypto.replace(/\s/g, '')}</span>
        {/each}
      </div>
    </div>
  {/if}
  {#if vpn.basedIn !== ''}
    <div>
      <p>País de Registro</p>
      <p>🇵🇹</p>
      <p>{vpn.basedIn}</p>
    </div>
  {/if}
</SingleSection>
