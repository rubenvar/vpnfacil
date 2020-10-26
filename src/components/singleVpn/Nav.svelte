<script>
  import { scrollto } from 'svelte-scrollto';
  export let technicalExists = false;
  export let tests = false;
  export let review = false;
</script>

<style lang="scss">
  #bar {
    background: white;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
    @media only screen and (min-width: 580px) {
      position: sticky;
      top: 0;
      z-index: 99;
    }
    div {
      width: 100%;
      max-width: var(--widerWidth);
      margin: 0 auto;
      padding: 20px 15px;
      @media only screen and (min-width: 580px) {
        padding: 20px var(--defSidePadding);
      }
      nav {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        span {
          cursor: pointer;
          transition: all 0.3s;
          font-size: 17px;
          color: var(--primary700);
          padding: 3px 6px;
          margin: 7px;
          border: 1px solid var(--primary500);
          border-radius: var(--buttonRadius);
          @media only screen and (min-width: 580px) {
            margin: 5px 15px;
            padding: 0;
            font-size: unset;
            border: none;
            border-radius: none;
          }
          @media only screen and (min-width: 720px) {
            margin: 0;
          }
          &:hover {
            color: var(--secondary600);
          }
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
