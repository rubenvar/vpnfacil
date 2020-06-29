<script>
  // import bg from '../../static/bg.jpg';
</script>

<style>
  .hero {
    background-image: linear-gradient(
        hsla(270, 70%, 25%, 0.65),
        hsla(270, 70%, 25%, 0.65)
      ),
      url('/bg.jpg');
    background-position: 30% 40%;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2em;
    padding-top: calc(2em + var(--headerHeight));
    margin-top: calc(-1 * var(--headerHeight));
  }

  p {
    color: white;
    font-size: 24px;
  }

  @media only screen and (min-width: 560px) {
    p {
      font-size: 42px;
      margin-left: 5%;
      max-width: 65%;
    }
  }
</style>

<div class="hero">
  <p>
    Para ser
    <strong>libre</strong>
    en internet, necesitas un VPN
  </p>
  <p>
    Hay muchas opciones, pero aquí lo tienes
    <strong>fácil</strong>
  </p>
</div>
