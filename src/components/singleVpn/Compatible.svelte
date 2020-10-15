<script>
  export let vpn;

  const compatible = [
    {
      title: 'Sistemas Operativos',
      values: vpn.platforms.split(',').map((item) => item.replace(/\s/g, '')),
    },
    {
      title: 'Navegadores',
      values: vpn.browsers.split(',').map((item) => item.replace(/\s/g, '')),
    },
    {
      title: 'Dispositivos',
      values: vpn.compatibilityList
        .split(',')
        .map((item) => item.replace(/\s/g, '')),
    },
  ];
</script>

<style lang="scss">
  #main-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .platform {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
      img {
        width: 33px;
        max-width: 33px;
        filter: grayscale(100%);
        transition: all 0.3s;
      }
      &:hover {
        img {
          filter: none;
        }
      }
      span {
        color: var(--grey500);
        font-size: 14px;
      }
    }
  }
</style>

<h2>Compatibilidad</h2>
<div id="main-list">
  {#each compatible as cat}
    <div>
      <h4>{cat.title}</h4>
      {#each cat.values as logo}
        <div class="platform">
          <img src="compatible/{logo.toLowerCase()}.png" alt="Logo de {logo}" />
          <span>{logo}</span>
        </div>
      {/each}
    </div>
  {/each}
  <div>
    <h4>Otros</h4>
    {#if vpn.routers === 'yes'}
      <div class="platform">
        <img src="compatible/routers.png" alt="Logo de Routers" />
        <span>Routers</span>
      </div>
    {/if}
    {#if vpn.nas === 'yes'}
      <div class="platform">
        <img src="compatible/nas.png" alt="Logo de NAS" />
        <span>NAS</span>
      </div>
    {/if}
  </div>
</div>
