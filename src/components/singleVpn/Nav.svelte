<script>
  import { scrollto } from 'svelte-scrollto';
  export let technicalExists = false;
  export let tests = false;
  export let review = false;
</script>

<style lang="scss">
  #bar {
    div {
      width: 100%;
      max-width: var(--widerWidth);
      margin: 0 auto;
      padding: 20px var(--defSidePadding);
    }
    background: white;
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
</style>

<section id="bar">
  <div>
    <nav>
      <span use:scrollto={'#ratings'}>Puntuaciones</span>
      <span use:scrollto={'#numbers'}>En Cifras</span>
      <span use:scrollto={'#languages'}>Idiomas</span>
      <span use:scrollto={'#warranty'}>Garantía</span>
      <span use:scrollto={'#compatible'}>Compatibilidad</span>
      {#if tests}<span use:scrollto={'#test'}>Pruebas</span>{/if}
      <span use:scrollto={'#details'}>Detalles</span>
      {#if technicalExists}<span use:scrollto={'#technical'}>Técnico</span>{/if}
      <span use:scrollto={'#pricing'}>Precios</span>
      {#if review}<span use:scrollto={'#review'}>Review</span>{/if}
    </nav>
  </div>
</section>
