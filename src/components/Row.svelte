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
    overflow: hidden;
    display: grid;
    grid-template-columns: auto 1fr 1fr 2fr auto;
    gap: 15px;
    align-items: center;
    transition: all 0.3s;
    font-family: var(--specialFont);
    &.emphasis {
      box-shadow: 0 0 0 5px #ffcf00;
      border: none;
    }
    // &:hover {
    //   transform: scale(1.02);
    //   img {
    //     filter: saturate(75%) blur(0px) opacity(90%);
    //   }
    //   h2 {
    //     color: var(--vpn-color);
    //   }
    //   .go {
    //     background-color: var(--primary300);
    //     &:hover {
    //       background-color: var(--primary500);
    //     }
    //   }
    // }
  }
  img {
    width: 40px;
    border-radius: 20%;
    filter: saturate(50%) blur(0.75px) opacity(70%);
    transition: all 0.3s;
  }
  h2 {
    position: relative;
    transition: all 0.3s;
    font-size: 25px;
    margin: 0;
    font-family: var(--mainFont);
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
    // grid-template-columns: repeat(6, 1fr);
    grid-template-columns: repeat(6, 110px);
    gap: 15px;
    align-items: center;
    .info {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
      .tag {
        font-weight: 300;
        width: 100%;
      }
    }
  }
  .go {
    background-color: var(--primary100);
    text-align: center;
    border-radius: 0;
    padding: 16px;
    transition: all 0.3s;
    font-size: 20px;
    @media only screen and (min-width: 580px) {
      font-size: unset;
    }
  }
</style>

<article {id} style="--vpn-color: {color}" class={i < 3 ? 'emphasis' : ''}>
  <img src="/vpns/{id}.jpg" alt="Logo de {name}" />

  <h2><a href="/vpn/{slug}/">{name}</a></h2>

  <Numbers {numbers} />

  <div class="all-details">
    {#if moneyBack === 'yes'}
      <span class="info">
        {moneyBackDays}
        días
        <span class="tag">devolución</span>
      </span>
    {:else if moneyBack === 'no'}
      <span class="info">No<span class="tag">devolución</span></span>
    {:else}<span class="info" />{/if}

    {#if appLanguage !== ''}
      <span class="info">{#if spanish}en español{:else}en inglés{/if}</span>
    {:else}<span class="info" />{/if}

    {#if compatIndex}
      <span class="info">
        {compatIndex < 6 ? 'baja' : compatIndex > 5 && compatIndex < 12 ? 'media' : 'alta'}
        <span class="tag">compatibilidad</span>
      </span>
    {:else}<span class="info" />{/if}

    {#if noLogs === 'yes'}
      <span class="info">No guarda logs</span>
    {:else if noLogs === 'no'}
      <span class="info">Puede guardar logs</span>
    {:else}<span class="info" />{/if}

    {#if p2p === 'yes'}
      <span class="info">Compatible con P2P</span>
    {:else if p2p === 'no'}
      <span class="info">No compatible con P2P</span>
    {:else}<span class="info" />{/if}

    {#if rating}
      <StarRating
        {id}
        rating={rating / 20}
        config={{ fullColor: '#ffc107', showText: true }}
        style="justify-content: center;margin: 20px 0 0;" />
    {:else}<span class="info" />{/if}
  </div>

  {#if slug}
    <a href="/vpn/{slug}/" title="Ir a {name}">
      <div class="go"><span>Ver más info</span></div>
    </a>
  {/if}
</article>
