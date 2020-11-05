<script>
  import StarRating from 'svelte-star-rating';
  import { formatNumber } from '../utils';
  export let vpn;
  export let i;

  const {
    name,
    id,
    slug,
    color,
    rating,
    countries,
    servers,
    devices,
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
  .card-link {
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 2px 7px rgba(0, 0, 0, 0.05);
      img {
        filter: saturate(75%) blur(0px) opacity(95%);
      }
      h2 {
        color: var(--vpn-color);
      }
    }
    &:nth-child(even) {
      background-color: #eaeaea;
    }
  }
  article {
    // border-bottom: 1px solid var(--primary300);
    color: #444;
    // overflow: hidden;
    display: grid;
    grid-template-columns: auto 0.6fr 3fr;
    gap: 15px;
    align-items: center;
    transition: all 0.3s;
    font-family: var(--specialFont);
    max-width: 100%;
    padding: 15px 0;
    // &.emphasis {
    //   background-color: #fef4ca;
    // }
  }
  img {
    width: 40px;
    border-radius: 20%;
    filter: saturate(50%) blur(0.75px) opacity(90%);
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
      font-size: 19px;
      margin: 0;
      font-family: var(--mainFont);
      @media only screen and (min-width: 960px) {
        font-size: 21px;
      }
    }
  }
  a {
    text-decoration: none;
  }
  .all-details {
    display: grid;
    // grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(8, 1fr);
    gap: 7px;
    align-items: center;
    @media only screen and (min-width: 960px) {
      grid-template-columns: repeat(8, 1fr);
      gap: 15px;
    }
    .info {
      display: unset;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
      @media only screen and (min-width: 960px) {
        // display: flex;
      }
      .tag {
        font-weight: 300;
        width: 100%;
      }
    }
  }
</style>

<a href="/vpn/{slug}/" class="card-link">
  <article {id} style="--vpn-color: {color}" class={i < 3 ? 'emphasis' : ''}>
    <img src="/vpns/{id}.jpg" alt="Logo de {name}" />

    <div class="title">
      <h2><a href="/vpn/{slug}/">{name}</a></h2>
      {#if rating}
        <StarRating
          {id}
          rating={rating / 20}
          config={{ fullColor: '#ffd65a', emptyColor: '#a9a9a9', size: 15 }}
          style="justify-content: center;margin: 7px 0;" />
      {/if}
    </div>

    <div class="all-details">
      {#if countries}
        <span class="info">{formatNumber(countries)}</span>
      {:else}<span class="info">-</span>{/if}

      {#if servers}
        <span class="info">{formatNumber(servers)}</span>
      {:else}<span class="info">-</span>{/if}

      {#if devices}
        <span class="info">{devices === 'unlimited' ? '∞' : devices}</span>
      {:else}<span class="info">-</span>{/if}

      {#if moneyBack === 'yes'}
        <span class="info">✅
          {moneyBackDays}
          <span class="tag">días</span></span>
      {:else if moneyBack === 'no'}
        <span class="info">❌ No</span>
      {:else}<span class="info">-</span>{/if}

      {#if appLanguage !== ''}
        <span class="info">{#if spanish}español{:else}inglés{/if}</span>
      {:else}<span class="info">-</span>{/if}

      {#if compatIndex}
        <span class="info">
          {compatIndex < 6 ? 'baja' : compatIndex > 5 && compatIndex < 12 ? 'media' : 'alta'}
        </span>
      {:else}<span class="info">-</span>{/if}

      {#if noLogs === 'yes'}
        <span class="info">✅ No</span>
      {:else if noLogs === 'no'}
        <span class="info">❌ Quizás</span>
      {:else}<span class="info">-</span>{/if}

      {#if p2p === 'yes'}
        <span class="info">✅ Sí</span>
      {:else if p2p === 'no'}
        <span class="info">❌ No</span>
      {:else}<span class="info">-</span>{/if}
    </div>
  </article>
</a>
