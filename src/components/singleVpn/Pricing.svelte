<script>
  import { formatMoney, formatPercent } from '../../utils';
  import SingleSection from './SingleSection.svelte';
  import Button from './Button.svelte';
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

  plans.forEach((plan) => {
    plan.total = plan.price * plan.duration;
    plan.discount = vpn.plan1Pricing
      ? Math.round(
          100 -
            (plan.price * plan.duration * 100) /
              (vpn.plan1Pricing * plan.duration)
        ) / 100
      : false;
  });
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
  #pricing-table {
    display: grid;
    grid-template-columns: 1fr;
    gap: 35px;
    align-items: center;
    @media only screen and (min-width: 580px) {
      grid-template-columns: 1fr 1fr 1.1fr;
    }
    .column {
      display: grid;
      grid-template-rows: repeat(5, auto);
      align-items: center;
      justify-items: center;
      gap: 9px;
      transition: all 0.3s;
      padding: 7px;
      margin: 0;
      box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.1);
      border-radius: var(--cardRadius);
      @media only screen and (min-width: 580px) {
        gap: 30px;
        grid-template-rows: repeat(4, 1fr) 1.5fr;
      }
      &.main {
        border: 8px solid var(--winner500);
        transform: scale(1.02);
      }
      h3 {
        font-size: 32px;
        margin: 10px 0;
        span {
          color: var(--grey500);
        }
      }
      p {
        font-size: 24px;
        margin: 7px 0;
        span {
          color: var(--grey500);
          font-size: 18px;
          line-height: 1;
        }
      }
    }
  }
</style>

<SingleSection id="pricing">
  <h2>Precios</h2>
  <div id="pricing-table">
    {#each plans as plan, i}
      {#if plan.price !== 0}
        <div class={i === plans.length - 1 ? 'column main' : 'column'}>
          <h3 clas="row">
            {#if plan.duration < 12}
              {plan.duration}
              <span>mes{plan.duration > 1 ? 'es' : ''}</span>
            {:else if plan.duration >= 12 && Number.isInteger(plan.duration / 12)}
              {plan.duration / 12}
              <span>año{plan.duration / 12 > 1 ? 's' : ''}</span>
            {:else}
              {plan.duration}
              <span>{plan.duration > 1 ? 'meses' : 'mes'}</span>
            {/if}
          </h3>
          <p clas="row">
            {formatMoney(plan.price, plan.currency)}
            <span>al mes</span>
          </p>
          <p clas="row">
            {#if plan.total !== plan.price}
              {formatMoney(plan.total, plan.currency)}
              <span>total</span>
            {:else}-{/if}
          </p>
          <p clas="row">
            {#if plan.discount}
              {formatPercent(plan.discount)}
              <span>ahorro</span>
            {:else}-{/if}
          </p>
          <Button main={i === plans.length - 1} link={vpn.link} />
        </div>
      {/if}
    {/each}
  </div>
</SingleSection>
