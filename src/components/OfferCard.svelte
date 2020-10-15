<script>
  import StarRating from 'svelte-star-rating';
  import formatMoney from '../utils/formatMoney';
  export let vpn;
  export let subtitle;
  export let comment;
</script>

<style lang="scss">
  article {
    position: relative;
    border: 3px solid var(--primary500);
    border-radius: var(--cardRadius);
    padding: 25px;
    margin: 60px 0;
    background-color: var(--grey100);
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.4);
    transition: 0.3s;
    &:hover {
      transform: scale(1.02) rotate(-1deg);
      box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.15);
      background-color: white;
    }
    h3 {
      margin: 0 0 15px;
    }
    .info {
      display: grid;
      @media only screen and (min-width: 640px) {
        grid-template-columns: 3fr 2fr;
        gap: 30px;
      }
      .text {
        ul {
          li {
            .tag {
              color: var(--grey500);
              font-size: 19px;
            }
          }
        }
        p {
          text-align: center;
          margin-bottom: 20px;
          font-size: 18px;
          color: var(--grey700);
          @media only screen and (min-width: 640px) {
            margin: 0;
            text-align: unset;
          }
        }
      }
      .details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 99;
          opacity: 0.6;
          width: 80px;
          margin: 0 auto;
          border-radius: 5px;
          border: 1px solid transparent;
          transition: all 0.3s;
          @media only screen and (min-width: 640px) {
            display: block;
            position: relative;
            top: 0;
            right: 0;
            opacity: 1;
          }
          &:hover {
            transform: scale(1.01);
            border-color: var(--primary500);
          }
        }
        button {
          transition: all 0.3s;
          border-radius: 8px;
          padding: 12px 20px;
          border: none;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
          color: white;
          background-color: var(--primary700);
          cursor: pointer;
          margin-top: 20px;
          @media only screen and (min-width: 640px) {
            margin-top: 0;
          }
          &:hover {
            background-color: var(--secondary700);
          }
        }
      }
    }
  }
</style>

<article>
  <h3>{vpn.name}: {subtitle}</h3>
  <div class="info">
    <div class="text">
      <ul>
        <li>
          <span class="tag">Descuento:</span>
          {Math.round(100 - (vpn.plan3Pricing * 100) / vpn.plan1Pricing)}%
        </li>
        <li>
          <span class="tag">Precio por mes:</span>
          {formatMoney(vpn.plan3Pricing, vpn.plan3Currency)}
        </li>
        <li><span class="tag">Duración:</span> {vpn.plan3Length / 12} años</li>
        <li>
          <span class="tag">Total que pagas ahora:</span>
          {formatMoney(vpn.plan3Pricing * vpn.plan3Length, vpn.plan3Currency)}
        </li>
      </ul>
      {#if comment}
        <p>{comment}</p>
      {/if}
    </div>
    <div class="details">
      <a href={vpn.link} target="_blank" rel="nofollow">
        <img src="/vpns/{vpn.id}.jpg" alt="Logo de {vpn.name}" />
      </a>
      <StarRating
        id={vpn.id}
        rating={vpn.rating / 20}
        config={{ size: 30, fullColor: '#ffc107', showText: true }}
        style="" />
      <a href={vpn.link} target="_blank" rel="nofollow"><button>Mirar la oferta
          <strong>actualizada</strong></button></a>
    </div>
  </div>
</article>
