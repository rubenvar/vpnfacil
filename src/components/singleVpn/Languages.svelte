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
    .language {
      text-align: center;
    }
    .chart {
      text-align: right;
    }
  }
</style>

<SingleSection id="languages">
  <h2>Idiomas</h2>
  <div class="row">
    <div class="title">
      <h3>Aplicación</h3>
      <span>
        el idioma de la app que instalas en tu ordenador o smartphone
      </span>
    </div>
    <p class="language">
      {#if vpn.appLanguage.includes('spanish')}
        🇪🇸 Disponible en español
      {:else}🇬🇧 Solo en inglés{/if}
    </p>
    <div class="chart">Posición # de 37</div>
  </div>
  <div class="row">
    <div class="title">
      <h3>Página/Panel de Usuario</h3>
      <span>el lenguaje de la plataforma web y cuenta de usuario online</span>
    </div>
    <p class="language">
      {#if vpn.uiLanguage.includes('spanish')}
        🇪🇸 Disponible en español
      {:else}🇬🇧 Solo en inglés{/if}
    </p>
    <div class="chart">Posición # de 37</div>
  </div>
  <div class="row">
    <div class="title">
      <h3>Soporte</h3>
      <span>si tienes problemas, en qué idioma podrás pedir ayuda a este VPN</span>
    </div>
    <p class="language">
      {#if vpn.supportLanguage.includes('spanish')}
        🇪🇸 Disponible en español
      {:else}🇬🇧 Solo en inglés{/if}
    </p>
    <div class="chart">Posición # de 37</div>
  </div>
</SingleSection>
