<script>
  import ToTop from './ToTop.svelte';
  export let wide = false;
  export let id = '';
</script>

<style lang="scss">
  section {
    padding: 40px 0;
    position: relative;
    div {
      width: 100%;
      max-width: 780px;
      margin: 0 auto;
      // padding: 0 var(--defSidePadding);
      padding: 0 15px;
      @media only screen and (min-width: 820px) {
        padding: 0;
      }
      &.wider {
        max-width: var(--widerWidth);
        padding: 0 var(--defSidePadding);
      }
    }
  }
</style>

<section {id}>
  <div class={wide && 'wider'}>
    <slot>
      <!-- optional fallback -->
    </slot>
  </div>
  {#if id !== 'top'}
    <ToTop />
  {/if}
</section>
