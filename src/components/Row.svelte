<script>
  import StarRating from 'svelte-star-rating';
  import Numbers from './Numbers.svelte';
  export let vpn;
  export let i;

  const {
    name,
    id,
    slug,
    color,
    rating,
    moneyBack,
    moneyBackDays,
    appLanguage,
    compatIndex,
    p2p,
    noLogs,
  } = vpn;

  const numbers = {
    countries: vpn.countries,
    servers: vpn.servers,
    devices: vpn.devices,
  };

  let spanish = false;
  if (appLanguage && appLanguage.includes('spanish')) spanish = true;
</script>

<style lang="scss">
  article {
    border: 2px solid var(--primary300);
    border-radius: var(--cardRadius);
    color: #444;
    // overflow: hidden;
    display: grid;
    grid-template-columns: auto 0.6fr 1fr 2fr 0.4fr;
    gap: 15px;
    align-items: center;
    transition: all 0.3s;
    font-family: var(--specialFont);
    max-width: 100%;
    // &.emphasis {
    //   box-shadow: 0 0 0 5px #ffcf00;
    //   border: none;
    // }
    &:hover {
      transform: scale(1.02);
      img {
        filter: saturate(75%) blur(0px) opacity(90%);
      }
      h2 {
        color: var(--vpn-color);
      }
      .go {
        background-color: var(--primary300);
        &:hover {
          background-color: var(--primary500);
        }
      }
    }
  }
  img {
    width: 40px;
    border-radius: 20%;
    filter: saturate(50%) blur(0.75px) opacity(70%);
    transition: all 0.3s;
    margin-left: 7px;
  }
  .title {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    h2 {
      position: relative;
      transition: all 0.3s;
      font-size: 21px;
      margin: 0;
      font-family: var(--mainFont);
      @media only screen and (min-width: 960px) {
        font-size: 25px;
      }
    }
  }
  a {
    text-decoration: none;
    &:hover {
      .go {
        color: white;
      }
    }
  }
  .all-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 7px;
    align-items: center;
    @media only screen and (min-width: 960px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
    }
    .info {
      display: unset;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
      @media only screen and (min-width: 960px) {
        display: flex;
      }
      .tag {
        font-weight: 300;
        width: 100%;
      }
    }
  }
  .go-link {
    height: 100%;
    .go {
      background-color: var(--primary100);
      transition: all 0.3s;
      font-size: 20px;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top-right-radius: 13px;
      border-bottom-right-radius: 13px;
      @media only screen and (min-width: 580px) {
        font-size: unset;
      }
    }
  }
</style>

<a href="/vpn/{slug}">
  <article {id} style="--vpn-color: {color}" class={i < 3 ? 'emphasis' : ''}>
    <img src="/vpns/{id}.jpg" alt="Logo de {name}" />
    <div class="title">
      <h2><a href="/vpn/{slug}/">{name}</a></h2>

      {#if rating}
        <StarRating
          {id}
          rating={rating / 20}
          config={{ fullColor: '#ffd65a', emptyColor: '#a9a9a9', size: 16 }}
          style="justify-content: center;margin: 7px 0;" />
      {/if}
    </div>
    <Numbers {numbers} isRow />

    <div class="all-details">
      {#if moneyBack === 'yes'}
        <span class="info">
          {moneyBackDays}
          días
          <span class="tag">devolución</span>
        </span>
      {:else if moneyBack === 'no'}
        <span class="info">No<span class="tag">devolución</span></span>
      {:else}<span class="info">-</span>{/if}

      {#if appLanguage !== ''}
        <span class="info">{#if spanish}
            <span class="tag">en</span>
            español
          {:else}<span class="tag">en</span> inglés{/if}</span>
      {:else}<span class="info">-</span>{/if}

      {#if compatIndex}
        <span class="info">
          <span class="tag">compatibilidad</span>
          {compatIndex < 6 ? 'baja' : compatIndex > 5 && compatIndex < 12 ? 'media' : 'alta'}
        </span>
      {:else}<span class="info">-</span>{/if}

      {#if noLogs === 'yes'}
        <span class="info">No guarda logs</span>
      {:else if noLogs === 'no'}
        <span class="info">Puede guardar logs</span>
      {:else}<span class="info">-</span>{/if}
    </div>

    {#if slug}
      <a class="go-link" href="/vpn/{slug}/" title="Ir a {name}">
        <div class="go"><span>Ver más info</span></div>
      </a>
    {/if}
  </article>
</a>
