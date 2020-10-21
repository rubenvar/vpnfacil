<script>
  import SingleSection from './SingleSection.svelte';

  export let vpn;
</script>

<style lang="scss">
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: 'title title img img' 'logo desc img img' 'det det . cta';
    h1 {
      font-size: 50px;
      grid-area: title;
    }
    #logo {
      grid-area: logo;
    }
    #description {
      grid-area: desc;
    }
    #screenshot {
      grid-area: img;
    }
  }
</style>

<SingleSection id="top" wide={true}>
  <div>
    <h1>{vpn.name}</h1>
    <img
      id="screenshot"
      src={'screenshots/placeholder.png'}
      alt="Página principal de {vpn.name}" />
    <img id="logo" src="vpns/{vpn.id}.jpg" alt="Logo de {vpn.name}" />
    <p id="description">{vpn.description}</p>
  </div>
</SingleSection>
