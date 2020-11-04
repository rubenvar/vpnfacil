<script>
  // TODO maybe brack Nav into its own component? 🤷‍♂️
  // idea for responsive nav from https://linguinecode.com/post/create-a-navbar-in-svelte
  import SVGs from './SVGs.svelte';
  import { onMount } from 'svelte';
  export let segment;

  let isMobileMenuOpen = false;

  const navItems = [
    { label: 'Mejores Ofertas 2020', href: '/guias/ofertas-vpn-2020/' },
    { label: 'Todas las Guías', href: '/guias/' },
    { label: 'FAQ', href: '/guias/preguntas-frecuentes/' },
  ];

  const handleMobileIconClick = () => (isMobileMenuOpen = !isMobileMenuOpen);
  const hideMobileMenu = () => (isMobileMenuOpen = false);

  const mediaQueryHandler = (e) => {
    if (!e.matches) isMobileMenuOpen = false;
  };

  onMount(() => {
    const mediaListener = window.matchMedia('(max-width: 767px)');
    mediaListener.addEventListener('change', mediaQueryHandler);
  });
</script>

<style lang="scss">
  header {
    .inner {
      max-width: var(--maxWidth);
      margin: 0 auto;
      padding: 0 var(--defSidePadding);
      height: var(--headerHeight);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h1,
    h2 {
      font-size: 26px;
      margin: 0;
      font-family: 'Audiowide', cursive;
      a {
        text-decoration: none;
        opacity: 0.5;
        transition: all 0.3s;
        color: var(--secondary300);
        &:hover {
          opacity: 0.95;
        }
      }
    }

    nav {
      height: 100%;
      display: flex;
      font-size: 20px;
      align-items: center;

      .mobile-icon {
        width: 25px;
        height: 14px;
        position: relative;
        cursor: pointer;
        @media only screen and (min-width: 767px) {
          display: none;
        }
        &::before,
        &::after,
        .middle-line {
          content: '';
          position: absolute;
          right: 0;
          width: 100%;
          height: 2px;
          background-color: var(--secondary500);
          transition: all 0.4s;
          transform-origin: center;
        }
        &::before {
          top: 0;
          width: 33%;
        }
        &::after {
          bottom: 0;
          width: 66%;
        }
        .middle-line {
          top: 0;
          bottom: 0;
          margin: auto;
        }
        &.active {
          &::before {
            width: 100%;
            top: 50%;
            transform: rotate(-45deg);
          }
          &::after {
            width: 100%;
            top: 50%;
            transform: rotate(45deg);
          }
          .middle-line {
            width: 100%;
            opacity: 0;
          }
        }
      }

      ul {
        display: none;
        width: 100%;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        @media only screen and (min-width: 767px) {
          display: flex;
        }
        &.mobile {
          background-color: #fffd;
          position: fixed;
          display: block;
          height: calc(100% - var(--headerHeight));
          bottom: 0;
          left: 0;
          z-index: 99;
        }
        li {
          list-style-type: none;
          position: relative;
          padding: 0 0 0 20px;
          &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #ccc;
            @media only screen and (min-width: 767px) {
              display: none;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            height: 45px;
            align-items: center;
            padding: 0 10px;
            color: var(--primary500);
            transition: all 0.3s;
            &:hover {
              color: var(--secondary300);
            }
            @media only screen and (min-width: 767px) {
              display: inline-flex;
              color: var(--primary300);
            }
          }
        }
      }
    }
  }
</style>

<!-- Load all svgs in header and 'use' them in content -->
<SVGs />

<header>
  <div class="inner">
    {#if !segment}
      <h1><a href="/">VPN Fácil</a></h1>
    {:else}
      <h2><a href="/">VPN Fácil</a></h2>
    {/if}
    <nav>
      <div
        on:click={handleMobileIconClick}
        class={`mobile-icon${isMobileMenuOpen ? ' active' : ''}`}>
        <div class="middle-line" />
      </div>
      <ul class={`navbar-list${isMobileMenuOpen ? ' mobile' : ''}`}>
        {#each navItems as item}
          <li>
            <a href={item.href} on:click={hideMobileMenu}> {item.label} </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>
