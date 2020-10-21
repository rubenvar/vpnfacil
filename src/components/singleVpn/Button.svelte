<script>
  export let main = false;
  export let link = '/';
  export let text = 'Ver oferta';
</script>

<style lang="scss">
  button {
    cursor: pointer;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.15), 0 0 10px 4px rgba(0, 0, 0, 0.05);
    border-radius: var(--buttonRadius);
    border: none;
    padding: 14px 36px;
    margin: 10px 0;
    transition: all 0.3s;
    &.main {
      background: var(--primary800);
      color: var(--grey100);
    }
    &.light {
      background: var(--primary300);
      color: var(--grey800);
    }
    &:hover {
      opacity: 0.8;
    }
  }
</style>

<a href={link} target="_blank" rel="noopener">
  <button class={main ? 'main' : 'light'}>{text}</button>
</a>
