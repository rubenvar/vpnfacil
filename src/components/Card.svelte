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
    // link,
    rating,
    servers,
    ips,
    countries,
    devices,
    moneyBack,
    moneyBackDays,
    appLanguage,
    platforms,
    browserPlugins,
    browsers,
    p2p,
    noLogs,
  } = vpn;
  const numbers = {
    countries,
    servers,
    ips,
  };

  // format languages, platforms from string to array
  // TODO maybe do it in the API (lambda)
  let languages;
  if (appLanguage && appLanguage.length) {
    languages = appLanguage
      .replace(/ /g, '')
      .replace('english', 'inglés')
      .replace('spanish', 'español')
      .split(',');
  }

  function managePlatforms(platforms, browsers) {
    // make array of platforms (shorten if it's too big) and browsers together
    if (!platforms) return;
    let plats = platforms.split(', ');
    if (plats.length > 6) plats = plats.slice(0, 6).concat('...');
    if (!browsers) return plats;
    const brows = browsers.split(', ');
    return plats.concat(brows);
  }

  const plats = managePlatforms(platforms, browsers);
</script>

<style>
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
  }

  /* article.emphasis {
    box-shadow: 0 0 0 7px #ffcf00;
  } */

  article:hover {
    transform: scale(1.02);
  }

  img {
    position: absolute;
    width: 40px;
    top: 10px;
    left: 10px;
    border-radius: 20%;
    filter: saturate(50%) blur(0.75px) opacity(70%);
    transition: all 0.3s;
  }

  article:hover img {
    filter: saturate(75%) blur(0px) opacity(90%);
  }

  h2 {
    position: relative;
    transition: all 0.3s;
    font-size: 22px;
    margin: 0;
    text-align: center;
    font-family: var(--mainFont);
    align-self: center;
  }
  article:hover h2 {
    color: var(--vpn-color);
  }
  ul {
    margin: 24px 0;
  }

  ul li {
    padding: 0 20px;
    display: flex;
    margin-bottom: 14px;
  }

  ul li:last-child {
    margin: 0;
  }

  ul li svg {
    width: 20px;
    min-width: 20px;
    height: 20px;
  }

  ul li > span {
    margin-left: 10px;
  }

  .tag {
    font-weight: 300;
  }

  .platform {
    margin: 2px 2px;
    background: #fafafa;
    padding: 1px 2px;
    border-radius: 5px;
    display: inline-block;
  }

  article a {
    transition: all 0.3s;
  }
  article a:hover {
    color: white;
  }

  .go {
    background-color: var(--primary100);
    text-align: center;
    border-radius: 0;
    padding: 16px 0;
    transition: all 0.3s;
  }

  article:hover .go {
    background-color: var(--primary300);
  }

  article:hover .go:hover {
    background-color: var(--primary500);
  }

  @media only screen and (min-width: 560px) {
    h2 {
      font-size: 28px;
    }
  }
</style>

<article {id} style="--vpn-color: {color}" class={i < 3 ? 'emphasis' : ''}>
  <img src="/vpns/{id}.jpg" alt="Logo de {name}" />

  <h2>{name}</h2>

  {#if countries || servers || ips}
    <Numbers {numbers} />
  {/if}

  <ul>
    {#if devices}
      <li>
        <svg>
          <use href="#icon-desktop" />
        </svg>
        <span>
          {#if devices !== 'unlimited'}{devices}{/if}
          <span class="tag">
            {devices === 'unlimited' ? 'D' : 'd'}ispositivos
          </span>
          {#if devices === 'unlimited'}ilimitados{/if}
        </span>
      </li>
    {/if}

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

    {#if languages && languages.length === 1 && languages[0] !== ''}
      <li>
        <svg>
          <use href="#icon-translate" />
        </svg>
        <span> <span class="tag">Solo en</span> {languages[0]} </span>
      </li>
    {:else if languages && languages.length >= 2}
      <li>
        <svg>
          <use href="#icon-translate" />
        </svg>
        <span>
          <span class="tag">En</span>
          {#each languages as lang}<span>{lang}{', '}</span>{/each}
          <span class="tag">etc.</span>
        </span>
      </li>
    {/if}

    {#if plats && plats.length > 0}
      <li>
        <svg>
          <use href="#icon-dashboard" />
        </svg>
        <span>
          <span class="tag">Disponible para</span>
          {#each plats as plat}<span class="platform">{plat}</span> {' '}{/each}
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
