<script>
  import SingleSection from './SingleSection.svelte';

  export let vpn;
  export let vpns;
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
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 5px 15px;
    transition: all 0.3s;
    padding: 7px;
    margin: 20px 0;
    @media only screen and (min-width: 580px) {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 15px;
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
    .detail {
      font-size: 27px;
      font-family: var(--specialFont);
      text-align: right;
      margin: 0;
      @media only screen and (min-width: 580px) {
        text-align: center;
      }
    }
    // .chart {
    // }
    .see-more {
      text-align: right;
      grid-column: 1 / -1;
      @media only screen and (min-width: 580px) {
        grid-column: unset;
        justify-self: end;
        max-width: 75%;
      }
      a {
        text-decoration: none;
        color: var(--primary400);
        &:hover {
          color: var(--grey900);
        }
      }
    }
  }
</style>

<SingleSection id="warranty">
  <h2>Garantía</h2>
  <div class="row">
    <div class="title">
      <h3>Garantía</h3>
      <span>
        ¿te devuelven el dinero si no te convence
        {vpn.name}
        después de comprarlo?
      </span>
    </div>
    <p class="detail">{vpn.moneyBack === 'yes' ? '✅ sí' : '❌ no'}</p>
    <div class="see-more">
      {#if vpn.moneyBack !== 'yes'}
        <a href="/">mira
          {vpns.filter((vpn) => vpn.moneyBack === 'yes').length}
          VPNs con reembolso</a>
      {/if}
    </div>
  </div>
  {#if vpn.moneyBack === 'yes'}
    <div class="row">
      <div class="title">
        <h3>Días de Garantía</h3>
        <span>cuántos días tienes para pedir un reembolso tras la compra</span>
      </div>
      <p class="detail">{vpn.moneyBackDays}</p>
      <div class="chart">
        <!-- empty -->
      </div>
    </div>
  {/if}
  <div class="row">
    <div class="title">
      <h3>Prueba Gratuita</h3>
      <span>¿puedes probar GRATIS este VPN, sin que pidan tu tarjeta de crédito?</span>
    </div>
    <p class="detail">{vpn.freeTrial === 'yes' ? '✅ sí' : '❌ no'}</p>
    <div class="see-more">
      {#if vpn.freeTrial !== 'yes'}
        <a href="/">mira
          {vpns.filter((vpn) => vpn.freeTrial === 'yes').length}
          VPNs con prueba gratis</a>
      {/if}
    </div>
  </div>
  {#if vpn.freeTrial === 'yes'}
    <div class="row">
      <div class="title">
        <h3>Duración de la Prueba</h3>
        <span>cuántos días tienes para probar GRATIS este VPN</span>
      </div>
      <p class="detail">
        {#if vpn.freeTrialDays === 'unlimited'}
          ilimitados
        {:else}{vpn.freeTrialDays}{/if}
      </p>
      <div class="chart">
        <!-- empty -->
      </div>
    </div>
  {/if}
</SingleSection>
