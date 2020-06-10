<script>
  import Card from "./Card.svelte";
  // import Filter from "./Filter.svelte";
  // import Sort from "./Sort.svelte";

  export let vpns;
  // vpns = vpns.sort((first, sec) => first.name > sec.name);
  // export let sortedContent = vpns;

  // function sortData(e) {
  //   // const value = e.detail;
  //   // console.log(value);
  //   console.log(e.detail);
  //   // Default by name
  //   if (e.detail === "name") {
  //     sortedContent = vpns.sort((first, sec) => first.name < sec.name);
  //     // sortedContent = vpns.filter(item => item.name === "NordVPN");
  //   }
  //   // sortedContent = vpns.sort((first, sec) => first[value] < sec[value]);
  //   // console.log(sortedContent);
  // }
  // function filterData(event) {
  //   console.log(event.detail);
  //   // Show all data
  //   if (event.detail === "all") {
  //     filteredContent = vpns;
  //     // show filtered data
  //   } else {
  //     filteredContent = vpns.filter(vpn => vpn.name === event.detail);
  //   }
  // }
  // sort alphabetically by vpn name
  // vpns =
  // console.log(vpns);
  // create array for filtering
  // export let filteredContent = vpns;
</script>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 34px;
  }

  @media only screen and (min-width: 560px) {
    div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (min-width: 1024px) {
    div {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media only screen and (min-width: 1280px) {
    div {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

<!-- <Filter on:updatefilter={filterData} /> -->
<!-- <Sort on:updateorder={sortData} /> -->

<div>
  <!-- {#each filteredContent as vpn} -->
  {#each vpns as vpn}
    <Card {vpn} />
  {/each}
</div>
