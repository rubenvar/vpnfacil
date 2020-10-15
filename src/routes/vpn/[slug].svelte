<script context="module">
  export async function preload({ params }) {
    const response = await this.fetch(`${process.env.ENDPOINT}/${params.slug}`);
    const data = await response.json();

    if (data.statusCode === 200) {
      return { vpn: data.body };
    } else {
      this.error(data.statusCode, data.body);
    }
  }
</script>

<script>
  import { scrollto } from 'svelte-scrollto';
  import StarRating from 'svelte-star-rating';

  import Compatible from '../../components/singleVpn/Compatible.svelte';
  import ToTop from '../../components/ToTop.svelte';
  import formatMoney from '../../utils/formatMoney';
  import formatPercent from '../../utils/formatPercent';

  export let vpn;

  const tests = false;

  const {
    name,
    id,
    slug,
    description,
    color,
    logo,
    link,
    privacyRating,
    priceRating,
    speedRating,
    supportRating,
    featuresRating,
    useRating,
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
    freeTrial,
    freeTrialDays,
    uiLanguage,
    appLanguage,
    supportLanguage,
    platforms,
    browserPlugins,
    browsers,
    routers,
    nas,
    socks5,
    compatibilityList,
    moreList,
    p2p,
    business,
    students,
    noLogs,
    anonPay,
    cryptoPay,
    cryptocurrenciesList,
    protocolsList,
    basedIn,
    gratis,
    gratisLimit,
    plan1Length,
    plan1Pricing,
    plan1Currency,
    plan2Length,
    plan2Pricing,
    plan2Currency,
    plan3Length,
    plan3Pricing,
    plan3Currency,
  } = vpn;

  const ratings = [
    { title: 'Privacidad', val: privacyRating },
    { title: 'Precios', val: priceRating },
    { title: 'Velocidad', val: speedRating },
    { title: 'Soporte Técnico', val: supportRating },
    { title: 'Caraacterísticas', val: featuresRating },
    { title: 'Facilidad de Uso', val: useRating },
    { title: 'General', val: rating },
  ];

  const numbers = [
    {
      title: 'Ubicaciones',
      val: locations,
    },
    {
      title: 'Servidores',
      val: servers,
      plus: serversPlus && serversPlus === 'yes',
    },
    { title: 'IPs', val: ips, plus: ipsPlus && ipsPlus === 'yes' },
    {
      title: 'Países',
      val: countries,
      plus: countriesPlus && countriesPlus === 'yes',
    },
    { title: 'Dispositivos', val: devices },
  ];

  const manageBool = (opt) => {
    if (opt === 'yes') return true;
    if (opt === 'no') return false;
    if (opt === '') return undefined;
  };

  const details = [
    { title: 'P2P', val: manageBool(p2p) },
    { title: 'Plan Business', val: manageBool(business) },
    { title: 'Descuento para Estudiantes', val: manageBool(students) },
    { title: 'Política Estricta de No-Logs', val: manageBool(noLogs) },
    { title: 'Pago Anónimo', val: manageBool(anonPay) },
    { title: 'Pago con Criptomonedas', val: manageBool(cryptoPay) },
  ];

  const technicalExists =
    protocolsList !== '' || socks5 !== '' || moreList !== '';

  const plans = [
    { duration: plan1Length, price: plan1Pricing, currency: plan1Currency },
    {
      duration: plan2Length,
      price: plan2Pricing,
      currency: plan2Currency || 'USD',
    },
    { duration: plan3Length, price: plan3Pricing, currency: plan3Currency },
  ];
</script>

<style lang="scss">
  section {
    padding: 40px 0;
    .wrapper {
      max-width: 780px;
      margin: 0 auto;
      &-wide {
        max-width: 1120px;
        margin: 0 auto;
      }
    }
    &:nth-child(even) {
      background-color: #fafafa;
    }
  }

  #bar {
    padding: 20px var(--defSidePadding);
    position: sticky;
    top: 0;
    z-index: 99;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
    nav {
      display: flex;
      justify-content: space-between;
      span {
        cursor: pointer;
        &:hover {
          color: var(--primary500);
        }
      }
    }
  }

  #ratings .wrapper {
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      &:nth-child(even) {
        background: #eee;
      }
    }
  }

  #numbers,
  #languages,
  #warranty,
  #details {
    .wrapper {
      div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }

  #technical .wrapper {
    > div {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }

  #pricing .wrapper {
    > div {
      display: grid;
      grid-template-columns: 0.7fr 1fr 1fr 1.1fr;
    }
  }
</style>

{#if !name}
  <p>Este VPN no existe...</p>
{:else}
  <section id="top">
    <div class="wrapper">
      <img src="vpns/{id}.jpg" alt="Logo de {name}" />
      <h1>{name}</h1>
      <img src="screenshots/{id}.png" alt="Página principal de {name}" />
      <p>{description}</p>
    </div>
  </section>

  <section id="bar">
    <div class="wrapper-wide">
      <nav>
        <span use:scrollto={'#ratings'}>Puntuaciones</span>
        <span use:scrollto={'#numbers'}>Números</span>
        <span use:scrollto={'#languages'}>Idiomas</span>
        <span use:scrollto={'#warranty'}>Garantía</span>
        <span use:scrollto={'#compatible'}>Compatibilidad</span>
        {#if tests}<span use:scrollto={'#test'}>Pruebas</span>{/if}
        <span use:scrollto={'#details'}>Detalles</span>
        {#if technicalExists}
          <span use:scrollto={'#technical'}>Técnico</span>
        {/if}
        <span use:scrollto={'#pricing'}>Precios</span>
        <span use:scrollto={'#review'}>Review</span>
      </nav>
    </div>
  </section>

  <section id="ratings">
    <div class="wrapper">
      <h2>Puntuaciones</h2>
      {#each ratings as rat, i}
        {#if rat.val > 0}
          <div class="rating">
            <p>{rat.title}</p>
            <StarRating
              id="rat-{i}"
              rating={rat.val / 20}
              config={{ fullColor: '#ffc107', showText: true }}
              style="justify-content: center;margin: 20px 0 0;" />
          </div>
        {/if}
      {/each}
    </div>
    <ToTop />
  </section>

  <section id="numbers">
    <div class="wrapper">
      <h2>Numbers</h2>
      {#each numbers as number}
        {#if number.val > 0}
          <div>
            <p>{number.title}</p>
            <p>
              {number.val}{#if number.plus}+{/if}
            </p>
            <p>GRAF</p>
          </div>
        {/if}
      {/each}
    </div>
    <ToTop />
  </section>

  <section id="languages">
    <div class="wrapper">
      <h2>Idiomas</h2>
      <div>
        <p>Aplicación</p>
        <p>
          {#if appLanguage.includes('spanish')}
            🇪🇸 Disponible en español
          {:else}🇬🇧 Solo en inglés{/if}
        </p>
        <p>GRAF</p>
      </div>
      <div>
        <p>Página/Panel de Usuario</p>
        <p>
          {#if uiLanguage.includes('spanish')}
            🇪🇸 Disponible en español
          {:else}🇬🇧 Solo en inglés{/if}
        </p>
        <p>GRAF</p>
      </div>
      <div>
        <p>Soporte</p>
        <p>
          {#if supportLanguage.includes('spanish')}
            🇪🇸 Disponible en español
          {:else}🇬🇧 Solo en inglés{/if}
        </p>
        <p>GRAF</p>
      </div>
    </div>
    <ToTop />
  </section>

  <section id="warranty">
    <div class="wrapper">
      <h2>Garantía</h2>
      <div>
        <p>Garantía</p>
        <p>{moneyBack === 'yes' ? 'Sí' : 'No'}</p>
        <p>ESTADÍSTICA</p>
      </div>
      {#if moneyBack === 'yes'}
        <div>
          <p>Días de Garantía</p>
          <p>{moneyBackDays}</p>
          <p>GRAF</p>
        </div>
      {/if}
      <div>
        <p>Prueba Gratuita</p>
        <p>{freeTrial === 'yes' ? 'Sí' : 'No'}</p>
        <p>ESTADÍSTICA</p>
      </div>
      {#if freeTrial === 'yes'}
        <div>
          <p>Duración de la Prueba</p>
          <p>{freeTrialDays}</p>
          <p>GRAF</p>
        </div>
      {/if}
    </div>
    <ToTop />
  </section>

  <section id="compatible">
    <div class="wrapper">
      <Compatible
        vpn={{ platforms, browserPlugins, browsers, routers, nas, compatibilityList }} />
    </div>
    <ToTop />
  </section>

  {#if tests}
    <section id="test">
      <div class="wrapper">
        <h2>Test</h2>
      </div>
      <ToTop />
    </section>
  {/if}

  <section id="details">
    <div class="wrapper">
      <h2>Detalles</h2>
      {#each details as detail}
        {#if detail.val !== undefined}
          <div>
            <p>{detail.title}</p>
            <p>{detail.val ? 'Sí 👍' : 'No 👎'}</p>
            <p>GRAF</p>
          </div>
        {/if}
      {/each}
      {#if cryptoPay === 'yes'}
        <div>
          <p>Criptomonedas aceptadas</p>
          <div>
            {#each cryptocurrenciesList.split(',') as crypto}
              <span>{crypto.replace(/\s/g, '')}</span>
            {/each}
          </div>
        </div>
      {/if}
      {#if basedIn !== ''}
        <div>
          <p>País de Registro</p>
          <p>🇵🇹</p>
          <p>{basedIn}</p>
        </div>
      {/if}
    </div>
    <ToTop />
  </section>

  {#if technicalExists}
    <section id="technical">
      <div class="wrapper">
        <h2>Detalles Técnicos</h2>
        {#if protocolsList !== ''}
          <div>
            <p>Protocolos Disponibles</p>
            <div>
              {#each protocolsList.split(',') as prot}
                <span>{prot.replace(/\s/g, '')}</span>
              {/each}
            </div>
          </div>
        {/if}
        {#if socks5 !== ''}
          <div>
            <p>SOCKS5</p>
            <p>{socks5 === 'yes' ? 'Sí 👍' : 'No 👎'}</p>
          </div>
        {/if}
        {#if moreList !== ''}
          <div>
            <p>Servicios Adicionales</p>
            <div>
              {#each moreList.split(',') as more}
                <span>{more.replace(/\s/g, '')}</span>
              {/each}
            </div>
          </div>
        {/if}
      </div>
      <ToTop />
    </section>
  {/if}

  <section id="pricing">
    <div class="wrapper">
      <h2>Precios</h2>
      <div>
        <div>
          <p>Duración</p>
          <p>Precio mensual</p>
          <p>Precio total</p>
          <p>Descuento/Ahorro</p>
        </div>
        {#each plans as plan}
          {#if plan.price !== 0}
            <div>
              <p>
                {#if plan.duration < 12}
                  {plan.duration}
                  mes{plan.duration > 1 ? 'es' : ''}
                {:else if plan.duration >= 12 && Number.isInteger(plan.duration / 12)}
                  {plan.duration / 12}
                  año{plan.duration / 12 > 1 ? 's' : ''}
                {:else}
                  {plan.duration}
                  {plan.duration > 1 ? 'meses' : 'mes'}
                {/if}
              </p>
              <p>{formatMoney(plan.price, plan.currency)}</p>
              <p>{formatMoney(plan.price * plan.duration, plan.currency)}</p>
              <p>
                {formatPercent(Math.round(100 - (plan.price * plan.duration * 100) / (plan1Pricing * plan.duration)) / 100)}
              </p>
              <a href={link} target="_blank" rel="noopener"><button>Ver Oferta</button></a>
            </div>
          {/if}
        {/each}
      </div>
    </div>
    <ToTop />
  </section>

  <section id="review">
    <div class="wrapper">
      <h2>Review</h2>
    </div>
    <ToTop />
  </section>
{/if}
