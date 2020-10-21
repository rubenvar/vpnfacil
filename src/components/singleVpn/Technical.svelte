<script>
  import SingleSection from './SingleSection.svelte';

  export let vpn;
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
    grid-template-columns: 1fr 2fr;
    transition: all 0.3s;
    padding: 7px;
    align-items: center;
    gap: 15px;
    margin: 20px 0;
    &--longer {
      grid-template-columns: 1fr 1fr 1fr;
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
      justify-content: end;
      span {
        background: var(--grey300);
        color: var(--grey100);
        padding: 1px 5px;
        border-radius: 5px;
        margin: 5px;
        font-size: 20px;
      }
    }
    #socks {
      font-size: 27px;
      font-family: var(--specialFont);
      text-align: center;
      margin: 0;
    }
    #chart {
      text-align: right;
    }
  }
</style>

<SingleSection id="technical">
  <h2>Detalles Técnicos</h2>
  {#if vpn.protocolsList !== ''}
    <div class="row">
      <div class="title">
        <h3>Protocolos Disponibles</h3>
        <span>protocolos VPN que puedes elegir.
          <a href="/guias/protocolos-vpn/">Más sobre protocolos aquí</a></span>
      </div>
      <div class="list">
        {#each vpn.protocolsList.split(',') as prot}
          <span>{prot.replace(/\s/g, '')}</span>
        {/each}
      </div>
    </div>
  {/if}
  <div class="row row--longer">
    <div class="title">
      <h3>Proxy SOCKS5</h3>
      <span>¿incluye {vpn.name} este protocolo para proxy?</span>
    </div>
    <p id="socks">{vpn.socks5 === 'yes' ? '✅ sí' : '❌ no'}</p>
    <p id="chart"><a href="/">ver VPNs con SOCKS5</a></p>
  </div>
  {#if vpn.moreList !== ''}
    <div class="row">
      <div class="title">
        <h3>Servicios Adicionales</h3>
        <span>funciones incluidas cuando te registras en {vpn.name}</span>
      </div>
      <div class="list">
        {#each vpn.moreList.split(',') as more}
          <span>{more.replace(/$\s/g, '')}</span>
        {/each}
      </div>
    </div>
  {/if}
</SingleSection>
