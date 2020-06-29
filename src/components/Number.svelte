<script>
  export let number;
  const { tag, value } = number;
  const formatNumber = num =>
    num > 1000
      ? `${new Intl.NumberFormat('es-ES').format(
          Math.round((num / 1000) * 10) / 10
        )}k`
      : num;
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
  {value && value > 0 ? formatNumber(value) : '-'}
  {#if tag === 'countries'}
    <span class="tag">países</span>
  {:else if tag === 'servers'}
    <span class="tag">servidores</span>
  {:else if tag === 'ips'}
    <span class="tag">ips</span>
  {/if}
</span>
