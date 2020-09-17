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
  header {
    text-align: center;
  }

  header h1 {
    margin-bottom: 0.7em;
  }

  header p {
    color: #aaa;
    text-transform: uppercase;
    font-family: Rubik, sans-serif;
    font-weight: 600;
  }

  header hr {
    min-width: 100px;
    width: 30%;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<header>
  <h1>{post.title}</h1>
  <p>{post.printDate}</p>
  <hr />
</header>
<div class="container">
  <article class="content">
    {@html post.html}
  </article>
  <hr />
</div>
