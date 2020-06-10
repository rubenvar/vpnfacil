<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let selected = "name";

  function sort() {
    dispatch("updateorder", selected);
  }
</script>

<style>
  label {
    font-size: 0.8rem;
  }

  div {
    padding-bottom: 1.5rem;
    margin: 0 auto;
    width: 330px;
  }

  select {
    width: 100%;
  }
</style>

<div>
  <label for="order">Ordena:</label>
  <select id="order" bind:value={selected} on:change={sort} on:blur={sort}>
    <option value="name">Nombre</option>
    <option value="servers">Servidores</option>
  </select>
</div>
