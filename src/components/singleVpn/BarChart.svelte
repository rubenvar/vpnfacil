<script>
  import Chart from 'chart.js';
  import { onMount } from 'svelte';

  export let title;
  export let data;
  export let id;
  export let color;

  // find the index of the single vpn in the whole vpns data array
  const ind = data.findIndex((obj) => obj.id === id);
  // and use it to replace a default color with the vpn color in the final
  const backgroundColor = new Array(data.length).fill('hsl(160, 10%, 90%)');
  backgroundColor[ind] = color;

  function createChart() {
    var ctx = document.getElementById(`${title}-chart`);
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((obj) => obj.name).reverse(),
        datasets: [
          {
            data: data.map((obj) => obj.value).reverse(),
            backgroundColor: backgroundColor.reverse(),
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        scales: {
          yAxes: [
            {
              gridLines: { display: false },
              ticks: { display: false, beginAtZero: true },
            },
          ],
          xAxes: [{ gridLines: { display: false }, ticks: { display: false } }],
        },
      },
    });
  }
  onMount(createChart);
</script>

<style>
  canvas {
    width: 220px;
  }
</style>

<canvas id={`${title}-chart`} width="220" />
