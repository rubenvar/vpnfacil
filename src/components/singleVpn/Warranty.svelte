<script>
  import SingleSection from './SingleSection.svelte';

  export let vpn;
</script>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>

<SingleSection id="warranty">
  <h2>Garantía</h2>
  <div>
    <p>Garantía</p>
    <p>{vpn.moneyBack === 'yes' ? 'Sí 👍' : 'No 👎'}</p>
    <p>ESTADÍSTICA</p>
  </div>
  {#if vpn.moneyBack === 'yes'}
    <div>
      <p>Días de Garantía</p>
      <p>{vpn.moneyBackDays}</p>
      <p>GRAF</p>
    </div>
  {/if}
  <div>
    <p>Prueba Gratuita</p>
    <p>{vpn.freeTrial === 'yes' ? 'Sí 👍' : 'No 👎'}</p>
    <p>ESTADÍSTICA</p>
  </div>
  {#if vpn.freeTrial === 'yes'}
    <div>
      <p>Duración de la Prueba</p>
      <p>{vpn.freeTrialDays}</p>
      <p>GRAF</p>
    </div>
  {/if}
</SingleSection>
