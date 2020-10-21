<script>
  import SingleSection from './SingleSection.svelte';

  export let vpn;
</script>

<style>
  .feature {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
</style>

<SingleSection id="technical">
  <h2>Detalles Técnicos</h2>
  {#if vpn.protocolsList !== ''}
    <div class="feature">
      <p>Protocolos Disponibles</p>
      <div>
        {#each vpn.protocolsList.split(',') as prot}
          <span>{prot.replace(/\s/g, '')}</span>
        {/each}
      </div>
    </div>
  {/if}
  {#if vpn.socks5 !== ''}
    <div class="feature">
      <p>Proxy SOCKS5</p>
      <p>{vpn.socks5 === 'yes' ? 'Sí 👍' : 'No 👎'}</p>
    </div>
  {/if}
  {#if vpn.moreList !== ''}
    <div class="feature">
      <p>Servicios Adicionales</p>
      <div>
        {#each vpn.moreList.split(',') as more}
          <span>{more.replace(/\s/g, '')}</span>
        {/each}
      </div>
    </div>
  {/if}
</SingleSection>
