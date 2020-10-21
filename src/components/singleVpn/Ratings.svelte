<script>
  import StarRating from 'svelte-star-rating';
  import SingleSection from './SingleSection.svelte';
  export let vpn;

  const ratings = [
    {
      title: 'Privacidad',
      text: 'cuánto protegen realmente tu información',
      value: vpn.privacyRating,
    },
    {
      title: 'Precios',
      text: '¿ofrece planes competitivos?',
      value: vpn.priceRating,
    },
    {
      title: 'Velocidad',
      text: 'resultados en el test de velocidad',
      value: vpn.speedRating,
    },
    {
      title: 'Soporte Técnico',
      text: 'respuesta y servicio del soporte',
      value: vpn.supportRating,
    },
    {
      title: 'Características',
      text: 'nivel de las opciones que ofrece',
      value: vpn.featuresRating,
    },
    {
      title: 'Facilidad de Uso',
      text: 'interfaz intuitiva, app sin errores, etc.',
      value: vpn.useRating,
    },
    { title: 'General', text: 'puntuación total', value: vpn.rating },
  ];
</script>

<style lang="scss">
  h2 {
    font-family: var(--specialFont);
    font-weight: 700;
    font-size: 36px;
    padding-bottom: 4px;
    border-bottom: 3px solid var(--primary500);
    margin-bottom: 36px;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 15px;
    transition: all 0.3s;
    padding: 7px;
    margin: 20px 0;
    &.main,
    &:hover {
      background: var(--secondary100);
    }
    .title {
      display: flex;
      flex-direction: column;
      h3 {
        margin: 0 0 3px 0;
        font-size: 21px;
      }
      span {
        color: var(--grey300);
        font-size: 13px;
        line-height: 1.4;
        max-width: 80%;
      }
    }
  }
</style>

<SingleSection id="ratings">
  <h2>Puntuaciones</h2>
  {#each ratings as rat, i}
    {#if rat.value > 0}
      <div class={rat.title === 'General' ? 'row main' : 'row'}>
        <div class="title">
          <h3>{rat.title}</h3>
          {#if rat.text}<span>{rat.text}</span>{/if}
        </div>
        <StarRating
          id="rat-{i}"
          rating={rat.value / 20}
          config={{ fullColor: '#ffc107', showText: true, size: 28 }}
          style="justify-content: end;margin: 0;" />
      </div>
    {/if}
  {/each}
</SingleSection>
