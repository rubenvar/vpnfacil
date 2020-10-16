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

<SingleSection id="languages">
  <h2>Idiomas</h2>
  <div>
    <p>Aplicación</p>
    <p>
      {#if vpn.appLanguage.includes('spanish')}
        🇪🇸 Disponible en español
      {:else}🇬🇧 Solo en inglés{/if}
    </p>
    <p>GRAF</p>
  </div>
  <div>
    <p>Página/Panel de Usuario</p>
    <p>
      {#if vpn.uiLanguage.includes('spanish')}
        🇪🇸 Disponible en español
      {:else}🇬🇧 Solo en inglés{/if}
    </p>
    <p>GRAF</p>
  </div>
  <div>
    <p>Soporte</p>
    <p>
      {#if vpn.supportLanguage.includes('spanish')}
        🇪🇸 Disponible en español
      {:else}🇬🇧 Solo en inglés{/if}
    </p>
    <p>GRAF</p>
  </div>
</SingleSection>
