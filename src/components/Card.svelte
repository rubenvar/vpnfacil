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
    grid-template-rows: 1fr auto 5fr auto;
    transition: all 0.3s;
    font-family: var(--specialFont);
    position: relative;
    // &.emphasis {
    //   box-shadow: 0 0 0 7px #ffcf00;
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
    position: absolute;
    width: 40px;
    top: 10px;
    left: 10px;
    border-radius: 20%;
    filter: saturate(30%) blur(0.75px) opacity(70%);
    transition: all 0.3s;
  }
  h2 {
    position: relative;
    transition: all 0.3s;
    font-size: 22px;
    margin: 0;
    text-align: center;
    font-family: var(--mainFont);
    align-self: center;
    @media only screen and (min-width: 560px) {
      font-size: 28px;
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
  ul {
    margin: 24px 0;
    li {
      padding: 0 20px;
      display: flex;
      margin-bottom: 14px;
      &:last-child {
        margin: 0;
      }
      svg {
        width: 20px;
        min-width: 20px;
        height: 20px;
      }
      > span {
        margin-left: 10px;
      }
      .tag {
        font-weight: 300;
      }
    }
  }
  .go {
    background-color: var(--primary100);
    text-align: center;
    border-radius: 0;
    padding: 16px 0;
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

  <ul>
    {#if moneyBack === 'yes'}
      <li>
        <svg>
          <use href="#icon-certificate" />
        </svg>
        <span>
          Garantía
          <span class="tag">
            de devolución{moneyBackDays ? ` ${moneyBackDays} días` : ''}
          </span>
        </span>
      </li>
    {:else if moneyBack === 'no'}
      <li>
        <svg>
          <use href="#icon-certificate" />
        </svg>
        <span> Sin garantía <span class="tag">de devolución</span> </span>
      </li>
    {/if}

    {#if appLanguage !== ''}
      <li>
        <svg>
          <use href="#icon-translate" />
        </svg>
        <span>
          {#if spanish}
            <span class="tag">Disponible en </span>español
          {:else}<span class="tag">Solo en</span> inglés{/if}
        </span>
      </li>
    {/if}

    {#if compatIndex}
      <li>
        <svg>
          <use href="#icon-dashboard" />
        </svg>
        <span>
          <span class="tag">Compatibilidad</span>
          {compatIndex < 6 ? 'baja' : compatIndex > 5 && compatIndex < 12 ? 'media' : 'alta'}
        </span>
      </li>
    {/if}

    {#if noLogs === 'yes'}
      <li>
        <svg>
          <use href="#icon-document-notes" />
        </svg>
        <span>No guarda logs</span>
      </li>
    {:else if noLogs === 'no'}
      <li>
        <svg>
          <use href="#icon-document-notes" />
        </svg>
        <span>Puede guardar logs</span>
      </li>
    {/if}

    {#if p2p === 'yes'}
      <li>
        <svg>
          <use href="#icon-cloud-download" />
        </svg>
        <span>Compatible con P2P</span>
      </li>
    {:else if p2p === 'no'}
      <li>
        <svg>
          <use href="#icon-cloud-download" />
        </svg>
        <span>No compatible con P2P</span>
      </li>
    {/if}

    {#if rating}
      <StarRating
        {id}
        rating={rating / 20}
        config={{ fullColor: '#ffc107', showText: true }}
        style="justify-content: center;margin: 20px 0 0;" />
    {/if}
  </ul>

  {#if slug}
    <a href="/vpn/{slug}/" title="Ir a {name}">
      <div class="go"><span>Ver más info</span></div>
    </a>
  {/if}
</article>
