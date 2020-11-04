<script>
  import { formatNumber } from '../utils';
  export let number;
  export let isRow;
  const { tag, value } = number;
</script>

<style>
  .num {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 20px;
  }
  .num.in-row {
    justify-content: center;
    line-height: 1;
  }

  .num .tag {
    font-size: 15px;
    color: #666;
    font-weight: 300;
    line-height: 1;
  }
  .num.in-row .tag {
    margin-top: 4px;
  }
</style>

<span class={`num${isRow ? ' in-row' : ''}`}>
  {value && value === 'unlimited' ? '∞' : value > 0 ? formatNumber(value) : '-'}
  {#if tag === 'countries'}
    <span class="tag">países</span>
  {:else if tag === 'servers'}
    <span class="tag">servidores</span>
  {:else if tag === 'devices'}<span class="tag">dispositivos</span>{/if}
</span>
