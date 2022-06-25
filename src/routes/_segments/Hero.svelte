<script>
  import { BASE_URL } from 'utils/constants'
  import Text from '@components/Text.svelte'
  import Image from '@components/Image.svelte'
  import Button from '@components/Button.svelte'
</script>

<section id="hero">
  <div class="container">
    <Image
      class="mx-auto mb-4 rounded-full"
      src="{BASE_URL}images/logo.svg"
      width="10rem"
      height="10rem"
      title="Logo"
    />

    <h1 class="title prime">Erick Vargas</h1>
    <h2 class="subtitle">Frontend Developer</h2>

    <Text class="mb-4 sm:px-8 md:mb-8 2xl:px-16">
      Focused on improving performance and the user experience in your web applications.
    </Text>

    <Button scrollTo="#projects" featured fill>See my projects</Button>
  </div>
  <ul class="circles">
    {#each Array(10) as _unusedItem}
      <li />
    {/each}
  </ul>
</section>

<style>
  section {
    @apply relative grid min-h-screen place-items-center pt-8 text-center;
  }

  h1 {
    @apply mb-2;
  }

  h2 {
    @apply mb-4 md:mb-8;
  }

  .circles {
    @apply absolute bottom-0 left-0 z-0 h-full w-full overflow-hidden;
    max-width: 100vw;
    z-index: -1;
  }

  .circles li {
    @apply absolute block h-6 w-6 bg-white;
    animation: animate 25s linear infinite;
    bottom: calc(-150px - 40vh);
  }

  .circles li:nth-child(1) {
    @apply h-20 w-20 rounded-full bg-prime;
    left: 25%;
    animation-duration: 20s;
  }

  .circles li:nth-child(2) {
    @apply h-6 w-6 rounded-full bg-white;
    left: 10%;
    animation-duration: 25s;
  }

  .circles li:nth-child(3) {
    @apply h-6 w-6 rounded-full bg-prime;
    left: 70%;
    animation-duration: 30s;
  }

  .circles li:nth-child(4) {
    @apply h-14 w-14 rounded-full bg-secondary;
    left: 40%;
    animation-duration: 15s;
  }

  .circles li:nth-child(5) {
    @apply h-6 w-6 rounded-full bg-white;
    left: 65%;
    animation-duration: 20s;
  }

  .circles li:nth-child(6) {
    @apply h-24 w-24 rounded-full bg-secondary;
    left: 75%;
    animation-duration: 25s;
  }

  .circles li:nth-child(7) {
    @apply h-12 w-12 rounded-full bg-prime;
    left: 35%;
    animation-duration: 30s;
  }

  .circles li:nth-child(8) {
    @apply h-6 w-6 rounded-full bg-secondary;
    left: 50%;
    animation-duration: 35s;
  }

  .circles li:nth-child(9) {
    @apply h-4 w-4 rounded-full bg-prime;
    left: 20%;
    animation-duration: 40s;
  }

  .circles li:nth-child(10) {
    @apply h-12 w-12 rounded-full bg-white;
    left: 85%;
    animation-duration: 45s;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: translateY(0vh);
    }
    50% {
      opacity: 1;
      transform: translateY(-60vh);
    }
    100% {
      opacity: 0;
      transform: translateY(-120vh);
    }
  }
</style>
