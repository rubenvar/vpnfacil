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

<style>
  .container {
    max-width: var(--maxWidthBlog);
    margin: 0 auto;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 60px;
  }

  article {
    margin-bottom: 52px;
  }

  h2 {
    font-family: var(--specialFont);
    font-weight: 700;
    font-size: 22px;
    display: inline;
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
    font-size: 20px;
    display: inline;
    line-height: 1.7;
  }
</style>

<svelte:head>
  <title>Guías sobre VPN, Seguridad Online y más – VPN Fácil</title>
</svelte:head>

<div class="container">
  <h1>Guías</h1>
  {#each posts as post}
    <article>
      <h2>
        <a rel="prefetch" href="guias/{post.slug}">{post.title}</a>
      </h2>
      {#if post.excerpt}
        <span>—</span>
      {/if}
      <p class="excerpt">{post.excerpt}</p>
    </article>
  {/each}
</div>
