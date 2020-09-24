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
  div {
    max-width: var(--maxWidthBlog);
    margin: 0 auto;
  }

  header {
    margin: 50px 0 40px;
  }

  h1 {
    margin-bottom: 12px;
    font-family: var(--specialFont);
    font-weight: 400;
    color: var(--primary600);
    font-size: 46px;
  }

  header p {
    color: var(--grey300);
    margin: 0;
  }

  article {
    font-size: 20px;
    line-height: 1.65;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.excerpt} />
  <link rel="canonical" href="https://vpnfacil.com/guias/{post.slug}" />
  <meta property="og:title" content={post.title} />
</svelte:head>

<div>
  <header>
    <h1>{post.title}</h1>
    <p>Actualizado: {post.printDate}</p>
  </header>
  <article class="blog-post">
    {@html post.html}
  </article>
</div>
