<script>
  import { formatNumber } from '../utils';
  export let number;
  const { tag, value } = number;
</script>

<style>
  .num {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 20px;
  }

  .num .tag {
    font-size: 15px;
    color: #666;
    font-weight: 300;
    line-height: 1;
  }
</style>

<span class="num">
  {value && value === 'unlimited' ? '∞' : value > 0 ? formatNumber(value) : '-'}
  {#if tag === 'countries'}
    <span class="tag">países</span>
  {:else if tag === 'servers'}
    <span class="tag">servidores</span>
  {:else if tag === 'devices'}<span class="tag">dispositivos</span>{/if}
</span>
