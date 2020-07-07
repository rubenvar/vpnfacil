<script>
  import StarRating from 'svelte-star-rating';
  import Numbers from './Numbers.svelte';
  export let vpn;

  const {
    name,
    id,
    color,
    logo,
    link,
    rating,
    locations,
    servers,
    serversPlus,
    ips,
    ipsPlus,
    countries,
    countriesPlus,
    devices,
    moneyBack,
    moneyBackDays,
    uiLanguage,
    platforms,
    p2p,
    noLogs
  } = vpn;
  const numbers = {
    countries,
    servers,
    ips
  };
  // format languages, platforms from string to array
  // TODO maybe do it in the API (lambda)
  const languages = uiLanguage
    .replace(/ /g, '')
    .replace('english', 'inglés')
    .replace('spanish', 'español')
    .split(',');
  const plats = platforms.split(', ');
</script>

<style>
  .card {
    border: 2px solid var(--primary300);
    border-radius: var(--cardRadius);
    color: #444;
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr auto 5fr auto;
    transition: all 0.3s;
    font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }

  .card:hover {
    transform: scale(1.02);
  }

  h2 {
    transition: all 0.3s;
    font-size: 28px;
    margin: 0;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    align-self: center;
  }
  .card:hover h2 {
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

  .language,
  .platform {
    margin: 0 2px 2px;
    border: 1px solid #ddd;
    padding: 1px;
    border-radius: 3px;
  }

  .card a {
    text-decoration: none;
    transition: all 0.3s;
  }

  .go {
    background-color: var(--primary100);
    text-align: center;
    border-radius: 0;
    padding: 16px 0;
    transition: all 0.3s;
  }

  .card:hover .go {
    background-color: var(--primary300);
  }

  .card:hover .go:hover {
    background-color: var(--primary500);
    color: white;
  }
</style>

<div {id} class="card" style="--vpn-color: {color}">
  <h2>{name}</h2>

  <!-- {#if logo}
    <img src={logo} alt="Logo de {name}" />
  {/if} -->

  {#if countries || servers || ips || locations}
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
        <span>
          Sin garantía
          <span class="tag">de devolución</span>
        </span>
      </li>
    {/if}

    {#if languages.length === 1 && languages[0] !== ''}
      <li>
        <svg>
          <use href="#icon-translate" />
        </svg>
        <span>
          <span class="tag">Solo en</span>
          {languages[0]}
        </span>
      </li>
    {:else if languages.length >= 2}
      <li>
        <svg>
          <use href="#icon-translate" />
        </svg>
        <span>
          <span class="tag">Disponible en</span>
          {#each languages as lang}
            <span class="language">{lang}</span>
            {' '}
          {/each}
        </span>
      </li>
    {/if}

    {#if plats.length > 0}
      <li>
        <svg>
          <use href="#icon-dashboard" />
        </svg>
        <span>
          <span class="tag">Disponible para</span>
          {#each plats as plat}
            <span class="platform">{plat}</span>
            {' '}
          {/each}
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

  {#if link}
    <a href={link}>
      <div class="go">
        <span>Ver más info</span>
      </div>
    </a>
  {/if}
</div>
