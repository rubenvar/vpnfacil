<script>
  import countryFlagEmoji from 'country-flag-emoji';
  import StarRating from 'svelte-star-rating';

  import SingleSection from './SingleSection.svelte';
  import Button from './Button.svelte';
  import { formatMoney } from '../../utils';

  export let vpn;
</script>

<style lang="scss">
  #top-container {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 30px;
    align-items: center;
    .text {
      h1 {
        font-size: 50px;
        grid-area: text;
        margin-bottom: 10px;
        color: var(--vpnColor);
      }
      #description {
        max-width: 75%;
      }
      .details {
        max-width: 85%;
        color: var(--grey700);
        span {
          margin: 0 10px 10px 0;
          padding: 2px 5px 5px;
          background: var(--grey200);
          border-radius: 3px;
          display: inline-block;
          line-height: 1;
          font-size: 14px;
        }
      }
    }
    img {
      border: 3px solid var(--vpnColor);
      border-radius: var(--cardRadius);
      box-shadow: var(--boxShadow);
      transition: all 0.3s;
      transform: rotate(1.5deg);
      &:hover {
        transform: scale(1.02) rotate(3deg);
      }
    }
  }
</style>

<SingleSection id="top" wide={true}>
  <div id="top-container" style="--vpnColor: {vpn.color}">
    <div class="text">
      <h1>{vpn.name}</h1>
      <StarRating
        id="rating-top"
        rating={vpn.rating / 20}
        config={{ fullColor: '#ffc107', showText: false, size: 28 }}
        style="margin: 0 0 30px;" />
      <p id="description">{vpn.description}</p>
      <div class="details">
        <p>
          {#if vpn.devices}
            <span>{vpn.devices === 'unlimited' ? '∞' : vpn.devices}
              dispositivos</span>
          {/if}
          {#if vpn.countries}<span>{vpn.countries} países</span>{/if}
          {#if vpn.basedIn}
            <span>{countryFlagEmoji.get(vpn.basedIn).emoji}
              {countryFlagEmoji.get(vpn.basedIn).name}</span>
          {/if}
          {#if vpn.moneyBack === 'yes'}
            <span>garantía {vpn.moneyBackDays} días</span>
          {:else}<span>sin garantía</span>{/if}
          {#if vpn.appLanguage.includes('spanish')}
            <span>en 🇪🇸 español</span>
          {:else}<span>en 🇬🇧 inglés</span>{/if}
          {#if vpn.plan3Pricing}
            <span>
              desde
              {formatMoney(vpn.plan3Pricing, vpn.plan3Currency)}/mes
            </span>
          {/if}
          <span>compatibilidad:
            {vpn.compatIndex < 6 ? 'baja' : vpn.compatIndex > 5 && vpn.compatIndex < 12 ? 'media' : 'alta'}</span>
        </p>
      </div>
      <!-- <img id="logo" src="vpns/{vpn.id}.jpg" alt="Logo de {vpn.name}" /> -->
      <Button link={vpn.link} text="ver oferta AHORA" main={true} />
    </div>
    <a href={vpn.link} target="_blank">
      <img
        src="screenshots/{vpn.id}.png"
        alt="Página principal de {vpn.name}"
        title={vpn.name} />
    </a>
  </div>
</SingleSection>
