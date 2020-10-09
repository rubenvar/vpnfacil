<script context="module">
  export async function preload({ params }) {
    const response = await this.fetch(`${process.env.ENDPOINT}/${params.slug}`);
    const data = await response.json();
    if (data.statusCode === 200) {
      console.log(data.body);
      return { vpn: data.body };
    } else {
      this.error(data.statusCode, data.body);
    }
  }
</script>

<script>
  export let vpn;
</script>

<p>holi!</p>

{#if !vpn.name}
  <p>Este VPN no existe...</p>
{:else}
  <h1>{vpn.name}!</h1>
  <p>Servidores: {vpn.servers}</p>
{/if}
