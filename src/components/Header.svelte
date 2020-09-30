<script>
  import SVGs from './SVGs.svelte';
</script>

<style>
  header {
    max-width: var(--maxWidth);
    margin: 0 auto;
    height: var(--headerHeight);
    padding: 0 var(--defSidePadding);
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
  }

  h1 {
    font-size: 26px;
    margin: 0;
    font-family: 'Audiowide', cursive;
    text-align: center;
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
    display: none;
    font-size: 20px;
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

  @media only screen and (min-width: 560px) {
    h1 {
      font-size: 32px;
      text-align: left;
    }
    nav {
      display: unset;
    }
  }
</style>

<!-- Load all svgs in header and 'use' them in content -->
<SVGs />

<header>
  <h1><a href="/">VPN Fácil</a></h1>
  <nav>
    <a href="/guias/ofertas-vpn-2020">Mejores Ofertas 2020</a>
    <a href="/guias">Todas las Guías</a>
    <a href="/guias/preguntas-frecuentes">FAQ</a>
  </nav>
</header>
