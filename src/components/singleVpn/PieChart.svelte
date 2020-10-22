<script>
  import Chart from 'chart.js';
  import { onMount } from 'svelte';

  export let data;
  export let value;
  export let title;
  export let addToLabel = false;
  export let color;

  // find the index of the single vpn value group in the whole grouped data array
  const ind = Object.keys(data).findIndex((key) => key === value.toString());
  // and use it to replace a default color with the vpn color in the final chart
  const backgroundColor = new Array(Object.keys(data).length).fill(
    'hsl(160, 10%, 90%)'
  );
  backgroundColor[ind] = color;

  function createChart() {
    var ctx = document.getElementById(`${title}-chart`);

    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(data).map((key) => {
          if (key === 'unlimited') return 'ilimitados';
          return addToLabel ? `${key} ${addToLabel}` : key;
        }),
        datasets: [
          {
            data: Object.values(data),
            backgroundColor,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
      },
    });
  }

  onMount(createChart);
</script>

<!--<style>
  canvas {
    width: 220px;
  }
</style>-->

<!-- <canvas id={`${title}-chart`} width="220" /> -->
<canvas id={`${title}-chart`} />
