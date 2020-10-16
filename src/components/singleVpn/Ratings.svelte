<script>
  import StarRating from 'svelte-star-rating';
  import SingleSection from './SingleSection.svelte';
  export let vpn;

  const ratings = [
    { title: 'Privacidad', val: vpn.privacyRating },
    { title: 'Precios', val: vpn.priceRating },
    { title: 'Velocidad', val: vpn.speedRating },
    { title: 'Soporte Técnico', val: vpn.supportRating },
    { title: 'Caraacterísticas', val: vpn.featuresRating },
    { title: 'Facilidad de Uso', val: vpn.useRating },
    { title: 'General', val: vpn.rating },
  ];
</script>

<style lang="scss">
  .rating {
    display: grid;
    grid-template-columns: 1fr 1fr;
    &:nth-child(even) {
      background: #eee;
    }
  }
</style>

<SingleSection id="ratings">
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
</SingleSection>
