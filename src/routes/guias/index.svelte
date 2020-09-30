<script context="module">
  export async function preload() {
    const resp = await this.fetch(`guias.json`);
    const posts = await resp.json();
    return { posts };
  }
</script>

<script>
  export let posts;
</script>

<style lang="scss">
  .container {
    max-width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    margin: 40px 20px;
    @media only screen and (min-width: 760px) {
      max-width: var(--maxWidthBlog);
      margin-left: auto;
      margin-right: auto;
    }
  }

  h1 {
    font-size: 28px;
    margin-bottom: 40px;
    @media only screen and (min-width: 640px) {
      font-size: 36px;
      margin-bottom: 60px;
    }
  }

  article {
    margin-bottom: 40px;
    @media only screen and (min-width: 640px) {
      margin-bottom: 52px;
    }
  }

  h2 {
    font-family: var(--specialFont);
    font-weight: 700;
    font-size: 21px;
    display: inline;
    @media only screen and (min-width: 640px) {
      font-size: 22px;
    }
  }

  h2 a {
    color: var(--primary600);
    transition: all 0.3s;
    text-decoration: none;
  }

  h2 a:hover {
    color: var(--secondary300);
  }

  span {
    margin: 0 5px;
  }

  span,
  .excerpt {
    color: var(--grey500);
    font-size: 18px;
    display: inline;
    line-height: 1.7;
    @media only screen and (min-width: 640px) {
      font-size: 20px;
    }
  }
</style>

<svelte:head>
  <title>Guías sobre VPN, Seguridad Online y más – VPN Fácil</title>
</svelte:head>

<div class="container">
  <h1>Todas las Guías sobre VPN:</h1>
  {#each posts as post}
    <article>
      <h2><a rel="prefetch" href="guias/{post.slug}">{post.title}</a></h2>
      {#if post.excerpt}
        <span>—</span>
        <p class="excerpt">{post.excerpt}</p>
      {/if}
    </article>
  {/each}
</div>
