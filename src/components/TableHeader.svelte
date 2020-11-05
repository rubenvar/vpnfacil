<style lang="scss">
  .table-header {
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 99;
    padding: 10px 0 15px;
    border-bottom: 3px solid var(--primary500);
    display: grid;
    align-items: center;
    grid-template-columns: 47px 0.6fr 3fr;
    gap: 15px;
    font-size: 13px;
    @media only screen and (min-width: 960px) {
      font-size: unset;
      gap: 15px;
    }
    .details {
      text-align: center;
      display: grid;
      align-items: center;
      grid-template-columns: repeat(8, 1fr);
      gap: 7px;
      @media only screen and (min-width: 960px) {
        gap: 15px;
      }
    }
  }
</style>

<div class="table-header">
  <span class="logo" />
  <span class="name">Nombre</span>
  <div class="details">
    <span class="countries">Países</span>
    <span class="servers">Servidores</span>
    <span class="devices">Dispositivos</span>
    <span class="money-back">Devolución</span>
    <span class="language">Idioma</span>
    <span class="compatible">Compatibilidad</span>
    <span class="no-logs">Guarda Logs</span>
    <span class="p2p">Acepta P2P</span>
  </div>
</div>
