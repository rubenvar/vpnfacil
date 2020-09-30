<table>
  <thead>
    <tr>
      <th>Logo</th>
      <th>VPN</th>
      <th>Servidores</th>
      <th>Países</th>
      <th>Dispositivos</th>
    </tr>
  </thead>
  <tbody>
    {#each bestVpns as vpn}
      <tr style="background-color: {vpn.color}">
        <td>vpn.logo</td>
        <td>vpn.name</td>
        <td>vpn.servers</td>
        <td>vpn.countries</td>
        <td>vpn.devices</td>
      </tr>
    {/each}
  </tbody>
</table>
