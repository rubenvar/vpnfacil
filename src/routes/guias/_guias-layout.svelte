<script>
  import { format } from 'date-fns';
  import { es } from 'date-fns/locale';

  export let title;
  export let date;
  export let excerpt;
  // export let slug;
  const formattedDate = format(new Date(date), "d 'de' MMMM, yyyy", {
    locale: es,
  });
</script>

<style>
  div {
    max-width: 100%;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media only screen and (min-width: 760px) {
    div {
      max-width: var(--maxWidthBlog);
      margin: 0 auto;
    }
  }

  header {
    margin: 30px 0 40px;
  }
  @media only screen and (min-width: 760px) {
    header {
      margin-top: 50px;
    }
  }

  h1 {
    margin-bottom: 12px;
    font-family: var(--specialFont);
    font-weight: 400;
    color: var(--primary600);
    font-size: 32px;
  }
  @media only screen and (min-width: 640px) {
    h1 {
      font-size: 46px;
    }
  }

  header p {
    color: var(--grey300);
    margin: 0;
  }

  article {
    font-size: 18px;
    line-height: 1.65;
  }
  @media only screen and (min-width: 640px) {
    article {
      font-size: 20px;
    }
  }
</style>

<svelte:head>
  <title>{title} ~ VPNFácil</title>
  <meta name="description" content={excerpt} />
  <!-- <link rel="canonical" href="https://vpnfacil.com/guias/{slug}" /> -->
  <meta property="og:title" content={title} />
</svelte:head>

<div>
  <header>
    <h1>{title}</h1>
    <p>Actualizado: <time datetime={date}>{formattedDate}</time></p>
  </header>
  <article class="blog-post">
    <slot>
      <!-- the mdsvex content will be slotted in here -->
    </slot>
  </article>
</div>
