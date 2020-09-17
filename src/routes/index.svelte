<script context="module">
  export async function preload() {
    const response = await this.fetch(process.env.ENDPOINT);
    const data = await response.json();
    return { vpns: data.body };
  }
</script>

<script>
  export let vpns;

  import List from '../components/List.svelte';
  import Sort from '../components/Sort.svelte';

  // variable to pass selected option to List
  let selectedSort;
  // fn to get selected option from Sort
  const onChange = obj => (selectedSort = obj);
</script>

<svelte:head>
  <title>Elige tu VPN y Navega con Seguridad – VPN Fácil</title>
</svelte:head>

<Sort {onChange} />
<List {vpns} {selectedSort} />
