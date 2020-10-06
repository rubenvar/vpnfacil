<script>
  import Fluid from 'svelte-fluid-header';
  import SVGs from './SVGs.svelte';
</script>

<style lang="scss">
  header {
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 var(--defSidePadding);
    height: var(--headerHeight);
  }

  h1 {
    font-size: 26px;
    margin: 0;
    font-family: 'Audiowide', cursive;
  }

  h1 a {
    text-decoration: none;
    opacity: 0.5;
    transition: all 0.3s;
    color: var(--secondary300);
  }
  h1 a:hover {
    opacity: 0.95;
  }

  nav {
    display: flex;
    font-size: 20px;
    &.mobile {
      flex-direction: column;
      position: relative;
      z-index: 99;
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
      a {
        background: #fffe;
        margin: 0;
        padding: 12px 0 12px 30px;
        &:nth-child(even) {
          background-color: #fafafaee;
        }
      }
    }
  }

  nav a {
    text-decoration: none;
    margin-left: 30px;
    color: var(--primary300);
    transition: all 0.3s;
  }

  nav a:hover {
    color: var(--secondary300);
  }

  :global(.svelte-fluid-header--button) {
    color: var(--secondary600);
  }
</style>

<!-- Load all svgs in header and 'use' them in content -->
<SVGs />

<header>
  <Fluid>
    <h1 slot="left"><a href="/">VPN Fácil</a></h1>
    <nav slot="right">
      <a href="/guias/ofertas-vpn-2020/">Mejores Ofertas 2020</a>
      <a href="/guias/">Todas las Guías</a>
      <a href="/guias/preguntas-frecuentes/">FAQ</a>
    </nav>
    <nav class="mobile" slot="drawer">
      <a href="/guias/ofertas-vpn-2020/">Mejores Ofertas 2020</a>
      <a href="/guias/">Todas las Guías</a>
      <a href="/guias/preguntas-frecuentes/">FAQ</a>
    </nav>
  </Fluid>
</header>
