<style>
  header {
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 1rem;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  h1 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 0;
  }

  .primary {
    fill: var(--purpleDark);
  }
  .secondary {
    fill: var(--purple);
  }
</style>

<svg
  xmlns="http://www.w3.org/2000/svg"
  style="position:absolute; width: 0; height: 0">
  <!-- icon-certificate -->
  <symbol viewBox="0 0 24 24" id="icon-certificate">
    <path
      class="primary"
      d="M4 3h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2
      2-2zm16 12V7a2 2 0 0 1-2-2H6a2 2 0 0 1-2 2v8a2 2 0 0 1 2 2h12c0-1.1.9-2
      2-2zM8 7h8a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2z" />
    <path
      class="secondary"
      d="M11.65 18.23a4 4 0 1 1 4.7 0l2.5 3.44-2.23-.18-1.48 1.68-.59-4.2a4.04
      4.04 0 0 1-1.1 0l-.6 4.2-1.47-1.68-2.23.18 2.5-3.44zM14 17a2 2 0 1 0 0-4 2
      2 0 0 0 0 4z" />
  </symbol>
  <!-- icon-dashboard -->
  <symbol viewBox="0 0 24 24" id="icon-dashboard">
    <path
      class="secondary"
      d="M3 11h2a1 1 0 0 1 0 2H3v-2zm3.34-6.07l1.42 1.41a1 1 0 0 1-1.42
      1.42L4.93 6.34l1.41-1.41zM13 3v2a1 1 0 0 1-2 0V3h2zm6.07 3.34l-1.41 1.42a1
      1 0 1 1-1.42-1.42l1.42-1.41 1.41 1.41zM21 13h-2a1 1 0 0 1 0-2h2v2z" />
    <path
      class="primary"
      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-6.93-6h13.86a8 8 0 1 0-13.86
      0z" />
    <path class="secondary" d="M11 14.27V9a1 1 0 0 1 2 0v5.27a2 2 0 1 1-2 0z" />
  </symbol>
  <!-- icon-document-notes -->
  <symbol viewBox="0 0 24 24" id="icon-document-notes">
    <path
      class="primary"
      d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2
      2-2zm2 11a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0
      0-2H8z" />
    <polygon class="secondary" points="14 2 20 8 14 8" />
  </symbol>
  <!-- icon-cloud-download -->
  <symbol viewBox="0 0 24 24" id="icon-cloud-download">
    <path
      class="primary"
      d="M15 15v-3a3 3 0 0 0-6 0v3H6a4 4 0 0 1-.99-7.88 5.5 5.5 0 0 1
      10.86-.82A4.49 4.49 0 0 1 22 10.5a4.5 4.5 0 0 1-4.5 4.5H15z" />
    <path
      class="secondary"
      d="M11 18.59V12a1 1 0 0 1 2 0v6.59l1.3-1.3a1 1 0 0 1 1.4 1.42l-3 3a1 1 0 0
      1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l1.3 1.3z" />
  </symbol>
  <!-- icon-desktop -->
  <symbol viewBox="0 0 24 24" id="icon-desktop">
    <path
      class="primary"
      d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4c0-1.1.9-2
      2-2zm0 2v10h16V4H4zm4 16a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.59l.7.7A1 1 0 0 1
      16 23H8a1 1 0 0 1-.7-1.7l.7-.71V20z" />
    <path class="secondary" d="M2 14h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" />
  </symbol>
  <!-- icon-globe -->
  <symbol viewBox="0 0 24 24" id="icon-globe">
    <circle cx="12" cy="12" r="10" class="primary" />
    <path
      class="secondary"
      d="M2.05 11A10 10 0 0 1 15 2.46V6a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-1
      1.73V12h2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v2.14A9.97 9.97 0 0 1 12
      22v-4h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1-2-2v-1H2.05z" />
  </symbol>
  <!-- icon-translate -->
  <symbol viewBox="0 0 24 24" id="icon-translate">
    <path
      class="primary"
      d="M10.41 10l1.3 1.3a1 1 0 0 1-1.42 1.4L9 11.42l-3.3 3.3a1 1 0 1
      1-1.4-1.42L7.58 10l-1.3-1.3a1 1 0 0 1 1.42-1.4L9 8.58l.54-.54A5 5 0 0 0
      10.98 5H3a1 1 0 1 1 0-2h5V2a1 1 0 1 1 2 0v1h5a1 1 0 0 1 0 2h-2.02a7 7 0 0
      1-2.03 4.46l-.54.54z" />
    <path
      class="secondary"
      d="M13.33 18l-1.4 3.38a1 1 0 0 1-1.85-.76l5-12a1 1 0 0 1 1.84 0l5 12a1 1 0
      0 1-1.84.76L18.67 18h-5.34zm.84-2h3.66L16 11.6 14.17 16z" />
  </symbol>
</svg>

<header>
  <h1>VPN Fácil</h1>
</header>
