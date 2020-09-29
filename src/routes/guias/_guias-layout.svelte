<script>
  import { format } from 'date-fns';
  import { es } from 'date-fns/locale';

  export let title;
  export let date;
  // export let slug;
  // export let excerpt;
  const formattedDate = format(new Date(date), "d 'de' MMMM, yyyy", {
    locale: es
  });
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
  <title>{title} ~ VPNFácil</title>
  <!-- <meta name="description" content={excerpt} /> -->
  <!-- <link rel="canonical" href="https://vpnfacil.com/guias/{slug}" /> -->
  <meta property="og:title" content={title} />
</svelte:head>

<div>
  <header>
    <h1>{title}</h1>
    <p>
      Actualizado:
      <time datetime={date}>{formattedDate}</time>
    </p>
  </header>
  <article class="blog-post">
    <slot>
      <!-- the mdsvex content will be slotted in here -->
    </slot>
  </article>
</div>
