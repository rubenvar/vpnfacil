<script>
  import formatMoney from '../../utils/formatMoney';
  import formatPercent from '../../utils/formatPercent';
  import SingleSection from './SingleSection.svelte';
  export let vpn;

  const plans = [
    {
      duration: vpn.plan1Length,
      price: vpn.plan1Pricing,
      currency: vpn.plan1Currency,
    },
    {
      duration: vpn.plan2Length,
      price: vpn.plan2Pricing,
      currency: vpn.plan2Currency || 'USD',
    },
    {
      duration: vpn.plan3Length,
      price: vpn.plan3Pricing,
      currency: vpn.plan3Currency,
    },
  ];
</script>

<style>
  #pricing-table {
    display: grid;
    grid-template-columns: 0.7fr 1fr 1fr 1.1fr;
  }
</style>

<SingleSection id="pricing">
  <h2>Precios</h2>
  <div id="pricing-table">
    <div>
      <p>Duración</p>
      <p>Precio mensual</p>
      <p>Precio total</p>
      <p>Descuento/Ahorro</p>
    </div>
    {#each plans as plan}
      {#if plan.price !== 0}
        <div>
          <p>
            {#if plan.duration < 12}
              {plan.duration}
              mes{plan.duration > 1 ? 'es' : ''}
            {:else if plan.duration >= 12 && Number.isInteger(plan.duration / 12)}
              {plan.duration / 12}
              año{plan.duration / 12 > 1 ? 's' : ''}
            {:else}{plan.duration} {plan.duration > 1 ? 'meses' : 'mes'}{/if}
          </p>
          <p>{formatMoney(plan.price, plan.currency)}</p>
          <p>{formatMoney(plan.price * plan.duration, plan.currency)}</p>
          <p>
            {formatPercent(Math.round(100 - (plan.price * plan.duration * 100) / (vpn.plan1Pricing * plan.duration)) / 100)}
          </p>
          <a href={vpn.link} target="_blank" rel="noopener"><button>Ver Oferta</button></a>
        </div>
      {/if}
    {/each}
  </div>
</SingleSection>
