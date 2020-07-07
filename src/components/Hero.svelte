<script>
  // import bg from '../../static/bg.jpg';
  import { scrollto } from 'svelte-scrollto';
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
    padding-bottom: 1.5em;
    text-align: center;
  }

  p {
    color: white;
    font-size: 24px;
    margin-top: 0;
    transition: font-size 0.3s;
  }

  .down {
    max-width: 110px;
    margin: 0 auto;
  }

  .down span:hover {
    cursor: pointer;
  }

  svg {
    fill: white;
    width: 60%;
    height: 50px;
    animation: down 2s infinite ease-in-out;
  }

  @keyframes down {
    0% {
      transform: translateY(0);
    }
    6% {
      transform: translateY(10px);
    }
    12% {
      transform: translateY(0);
    }
    18% {
      transform: translateY(10px);
    }
    24% {
      transform: translateY(0);
    }
  }

  @media only screen and (min-width: 560px) {
    p {
      font-size: 32px;
    }

    svg {
      width: 60%;
      height: 70px;
    }
  }

  @media only screen and (min-width: 768px) {
    p {
      font-size: 36px;
    }
  }

  @media only screen and (min-width: 1024px) {
    p {
      font-size: 42px;
    }
  }
</style>

<div class="hero">
  <p>
    Necesitas un VPN para ser
    <strong>libre</strong>
    en internet
  </p>
  <p>
    Hay muchas opciones, pero aquí lo tienes
    <strong>fácil</strong>
  </p>
  <div class="down">
    <span use:scrollto={'#main'}>
      <svg>
        <use href="#icon-down" />
      </svg>
    </span>
  </div>
</div>
