<script>
  import SingleSection from './SingleSection.svelte';

  export let vpn;
  export let vpns;

  const hasBrowsers = vpn.browserPlugins === 'yes';

  const compatible = [];

  if (vpn.platforms.length) {
    compatible.push({
      title: 'Sistemas Operativos',
      text: 'sistemas para los que este VPN tiene software/app especifico',
      values: vpn.platforms.split(',').map((item) => item.replace(/\s/g, '')),
    });
  }

  if (hasBrowsers) {
    compatible.push({
      title: 'Navegadores',
      text: `navegadores para los que ${vpn.name} tiene una extensión que puedes instalar`,
      values: vpn.browsers.split(',').map((item) => item.replace(/\s/g, '')),
    });
  }

  if (vpn.compatibilityList.length) {
    compatible.push({
      title: 'Dispositivos',
      text: `más hardware donde puedes instalar este VPN fácilmente`,
      values: vpn.compatibilityList
        .split(',')
        .map((item) => item.replace(/\s/g, '')),
    });
  }
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
      .platform {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 10px;
        margin: 15px;
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
  }
  .see-more {
    margin: 36px 0;
    font-size: 20px;
    text-align: right;
    a {
      color: var(--primary500);
      &:hover {
        color: var(--secondary500);
      }
    }
  }
</style>

<SingleSection id="compatible">
  <h2>Compatibilidad</h2>
  {#each compatible as cat}
    <div class="row">
      <div class="title">
        <h3>{cat.title}</h3>
        {#if cat.text}<span>{cat.text}</span>{/if}
      </div>
      <div class="list">
        {#each cat.values as logo}
          <div class="platform">
            <img
              src="compatible/{logo.toLowerCase()}.png"
              alt="Logo de {logo}" />
            <span>{logo}</span>
          </div>
        {/each}
      </div>
    </div>
  {/each}
  {#if vpn.routers === 'yes' || vpn.nas === 'yes'}
    <div class="row">
      <div class="title">
        <h3>Otros</h3>
      </div>
      <div class="list">
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
  {/if}

  {#if vpn.compatIndex < 12}
    <p class="see-more">
      <a href="/">Mira aquí
        {vpns.filter((vpn) => vpn.compatIndex > 11).length}
        VPNs con mayor compatibilidad
        <svg><use href="#icon-external-window" /></svg></a>
    </p>
  {/if}
</SingleSection>
