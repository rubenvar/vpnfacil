<script>
  import ToTop from './ToTop.svelte';
  export let id = '';
</script>

<style lang="scss">
  section {
    padding: 40px 0;
    position: relative;
    div {
      max-width: 780px;
      margin: 0 auto;
    }
  }
</style>

<section {id}>
  <div>
    <slot>
      <!-- optional fallback -->
    </slot>
  </div>
  <ToTop />
</section>
