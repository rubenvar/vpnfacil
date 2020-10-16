<script>
  import ToTop from './ToTop.svelte';
  export let id = '';
</script>

<style lang="scss">
  section {
    padding: 40px 0;
    div {
      border: 1px solid;
      border-radius: 15px;
      max-width: 780px;
      margin: 0 auto;
    }
    &:nth-child(even) {
      background-color: #fafafa;
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
