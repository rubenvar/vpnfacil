<script>
  import StarRating from "./StarRating.svelte";
  import Numbers from "./Numbers.svelte";
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
    locations,
    servers,
    serversPlus,
    ips,
    ipsPlus,
    countries,
    countriesPlus
  };
  // format languages, platforms from string to array
  // TODO maybe do it in the API (lambda)
  const languages = uiLanguage
    .replace(/ /g, "")
    .replace("english", "inglés")
    .replace("spanish", "español")
    .split(",");
  const plats = platforms.split(", ");
</script>

<style>
  div {
    padding: 20px 15px;
    /* border: 2px solid #abd; */
    border: 2px solid var(--purpleLight);
    border-radius: 15px;
    color: #444;
  }

  h2 {
    font-size: 24px;
    margin: 0 0 24px;
    text-align: center;
    /* font-weight: 500; */
    font-family: "Gill Sans";
  }

  ul li {
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
    margin: 0 2px;
    border: 1px solid #ddd;
    padding: 1px;
    border-radius: 3px;
  }
</style>

<div {id} style="--border-color: {color}">
  <h2>{name}</h2>

  {#if rating}
    <StarRating
      {id}
      rating={rating / 20}
      config={{ fullColor: '#ffc107', showText: true }} />
  {/if}

  {#if logo}
    <img src={logo} alt="Logo de {name}" />
  {/if}

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
          {devices}
          <span class="tag">dispositivos</span>
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

    {#if link}
      <li>
        <svg>
          <use href="#icon-globe" />
        </svg>
        <span>
          <a href={link}>Ver más info</a>
        </span>
      </li>
    {/if}

  </ul>
</div>
