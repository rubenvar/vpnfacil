<script>
  import * as animateScroll from 'svelte-scrollto';

  export let text = 'Ir Arriba';
</script>

<style>
  span {
    position: absolute;
    right: 50px;
    bottom: 0;
    cursor: pointer;
    transition: all 0.3s;
  }
  span:hover {
    color: var(--primary500);
  }
</style>

<span on:click={() => animateScroll.scrollToTop()}>{text}</span>
