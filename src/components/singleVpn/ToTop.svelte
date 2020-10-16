<script>
  import * as animateScroll from 'svelte-scrollto';

  export let text = 'Ir Arriba';
</script>

<span on:click={() => animateScroll.scrollToTop()}>{text}</span>
