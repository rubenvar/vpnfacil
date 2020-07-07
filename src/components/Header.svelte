<script>
  import SVGs from './SVGs.svelte';
</script>

<style>
  header {
    height: var(--headerHeight);
    padding: 0 2em;
    display: grid;
    align-items: center;
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

  @media only screen and (min-width: 560px) {
    h1 {
      font-size: 32px;
      text-align: left;
    }
  }
</style>

<!-- Load all svgs in header and 'use' them in content -->
<SVGs />

<header>
  <h1>
    <a href="/">VPN Fácil</a>
  </h1>
</header>
