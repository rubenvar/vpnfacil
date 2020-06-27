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
  const formatBigNumber = num =>
    num > 1000 ? `${formatNumber(Math.round((num / 1000) * 10) / 10)}k` : num;
</script>

<style>
  .numbers {
    display: flex;
    justify-content: space-around;
    margin: 0;
    background-color: var(--purpleLight);
    padding: 15px 0;
  }

  .numbers .num {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 20px;
  }

  .numbers .num .tag {
    font-size: 15px;
    color: #666;
  }
</style>

<div class="numbers">
  {#if countries}
    <span class="num">
      <!-- {formatNumber(countries)}{countriesPlus ? '+' : ''} -->
      {formatNumber(countries)}
      <span class="tag">países</span>
    </span>
  {/if}
  {#if servers}
    <span class="num">
      <!-- {formatNumber(servers)}{serversPlus ? '+' : ''} -->
      {formatBigNumber(servers)}
      <span class="tag">serv.</span>
    </span>
  {/if}
  {#if ips}
    <span class="num">
      <!-- {formatNumber(ips)}{ipsPlus ? '+' : ''} -->
      {formatBigNumber(ips)}
      <span class="tag">ips</span>
    </span>
  {/if}
  {#if locations}
    <span class="num">
      {formatNumber(locations)}
      <span class="tag">ubic.</span>
    </span>
  {/if}
</div>
