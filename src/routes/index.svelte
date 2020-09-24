<script context="module">
  export async function preload() {
    const response = await this.fetch(process.env.ENDPOINT, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return { vpns: data.body };
  }
</script>

<script>
  import Bar from '../components/Bar.svelte';
  import List from '../components/List.svelte';

  export let vpns;
</script>

<svelte:head>
  <title>Elige tu VPN y Navega con Seguridad – VPN Fácil</title>
</svelte:head>

<Bar />
<List {vpns} />
