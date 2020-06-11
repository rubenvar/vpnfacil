<script>
  export let numbers;

  const {
    locations,
    servers,
    serversPlus,
    ips,
    ipsPlus,
    countries,
    countriesPlus
  } = numbers;

  const formatNumber = num => new Intl.NumberFormat('es-ES').format(num);
</script>

<style>
  .numbers {
    display: flex;
    justify-content: space-around;
    margin: 24px 0;
  }

  .numbers .num {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 18px;
  }

  .numbers .num .tag {
    font-size: 15px;
    color: #666;
  }
</style>

<div class="numbers">
  {#if countries}
    <span class="num">
      {formatNumber(countries)}{countriesPlus ? '+' : ''}
      <span class="tag">países</span>
    </span>
  {/if}
  {#if servers}
    <span class="num">
      {formatNumber(servers)}{serversPlus ? '+' : ''}
      <span class="tag">servidores</span>
    </span>
  {/if}
  {#if ips}
    <span class="num">
      {formatNumber(ips)}{ipsPlus ? '+' : ''}
      <span class="tag">ips</span>
    </span>
  {/if}
  {#if locations}
    <span class="num">
      {formatNumber(locations)}
      <span class="tag">ubicaciones</span>
    </span>
  {/if}
</div>
