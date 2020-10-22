<script>
  import Chart from 'chart.js';
  import { onMount } from 'svelte';

  export let title;
  export let data;
  export let id;
  export let color;

  const ind = data.findIndex((obj) => obj.id === id);
  const backgroundColor = new Array(data.length);
  backgroundColor[ind] = color;

  function createChart() {
    var ctx = document.getElementById(`${title}-chart`);
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((obj) => obj.name),
        datasets: [
          {
            data: data.map((obj) => obj.value),
            backgroundColor,
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

<canvas id={`${title}-chart`} />
