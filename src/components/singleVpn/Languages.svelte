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
      font-size: 20px;
    }
    .see-more {
      justify-self: end;
      text-align: right;
      max-width: 75%;
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
    <div class="see-more">
      {#if !vpn.appLanguage.includes('spanish')}
        <a href="/">
          mira
          {vpns.filter((vpn) => vpn.appLanguage.includes('spanish')).length}
          VPNs con la app en español
        </a>
      {/if}
    </div>
  </div>
  <div class="row">
    <div class="title">
      <h3>Panel de Usuario</h3>
      <span>el lenguaje de la plataforma web y cuenta de usuario online</span>
    </div>
    <p class="language">
      {#if vpn.uiLanguage.includes('spanish')}
        🇪🇸 Disponible en español
      {:else}🇬🇧 Solo en inglés{/if}
    </p>
    <div class="see-more">
      {#if !vpn.uiLanguage.includes('spanish')}
        <a href="/">
          mira
          {vpns.filter((vpn) => vpn.uiLanguage.includes('spanish')).length}
          VPNs con interfaz en español
        </a>
      {/if}
    </div>
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
    <div class="see-more">
      {#if !vpn.supportLanguage.includes('spanish')}
        <a href="/">
          mira
          {vpns.filter((vpn) => vpn.supportLanguage.includes('spanish')).length}
          VPNs con soporte en español
        </a>
      {/if}
    </div>
  </div>
</SingleSection>
