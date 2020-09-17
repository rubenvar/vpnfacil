<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because this file is called [slug].html
    const resp = await this.fetch(`guias/${params.slug}.json`);
    const data = await resp.json();

    if (resp.status === 200) {
      return { post: data };
    } else {
      this.error(resp.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  .container {
    max-width: var(--maxWidthBlog);
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 0.7em;
    font-family: var(--specialFont);
    font-weight: 700;
  }

  .post-header p {
    color: var(--grey500);
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.excerpt} />
  <link rel="canonical" href="https://vpnfacil.com/guias/{post.slug}" />
  <meta property="og:title" content={post.title} />
</svelte:head>

<div class="container">
  <div class="post-header">
    <h1>{post.title}</h1>
    <p>Actualizado: {post.printDate}</p>
  </div>
  <article class="content">
    {@html post.html}
  </article>
</div>
