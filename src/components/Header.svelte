<script>
  import SVGs from './SVGs.svelte';
</script>

<style>
  header {
    height: var(--headerHeight);
    padding: 0 2em;
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
  }

  nav a {
    text-decoration: none;
    margin-left: 20px;
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
  <h1>
    <a href="/">VPN Fácil</a>
  </h1>
  <nav>
    <a href="/guias">Guías</a>
  </nav>
</header>
