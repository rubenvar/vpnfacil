<script>
  import { GoogleCharts } from 'google-charts';
  import { onMount } from 'svelte';

  let chartContainer;

  export let title;
  export let data;
  export let single;
  export let color;

  // find the index of the single vpn in the whole vpns data array
  const ind = data.findIndex((obj) => obj.id === single);
  // mutate the data array
  data[ind].color = color;

  // prepare data
  let dataArray = [['vpn', title, { role: 'style' }]];
  data.forEach((obj) => dataArray.push([obj.name, obj.value, obj.color]));

  function drawChart() {
    const chart = new GoogleCharts.api.visualization.ColumnChart(
      chartContainer
    );
    const data = GoogleCharts.api.visualization.arrayToDataTable(dataArray);
    const config = {
      animation: { startup: true, duration: 250 },
      backgroundColor: {
        fill: 'transparent',
      },
      bar: {
        groupWidth: '90%',
      },
      chartArea: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
      },
      colors: ['#e3e8e6'],
      hAxis: {
        direction: -1, // reverse the order
        textPosition: 'none',
      },
      height: 110,
      legend: {
        position: 'none',
      },
      vAxis: {
        baseline: 'none',
        textPosition: 'none',
        gridlines: {
          count: 0,
        },
      },
      width: 220,
    };

    chart.draw(data, config);
  }

  // load the thing
  onMount(() => GoogleCharts.load(drawChart));
</script>

<div bind:this={chartContainer} />
