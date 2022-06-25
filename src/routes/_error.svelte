<script>
  import Link from '@components/Link.svelte'

  export let error
  export let status

  let showModal = false

  const ERROR_MSG = {
    404: 'Page Not Found',
    500: 'Internal Server Error',
  }

  const dev = process.env.NODE_ENV === 'development'
  const toggleVisibility = () => (showModal = !showModal)
</script>

<svelte:head>
  <title>Error {status}</title>
</svelte:head>

<section>
  <h1>{status}</h1>
  <h2>- {ERROR_MSG[status]} -</h2>

  <p class="message">The page you are looking for doesn't exist or an other error ocurred</p>

  <div>
    <Link to="/" btn small fill>Go to home</Link>
  </div>

  {#if dev && error.stack}
    <button on:click={toggleVisibility}> More info </button>

    {#if showModal}
      <div class="error-info">
        <div class="error-stack">
          <span>{error.message}</span>
          <p class="message-stack">{error.stack}</p>
          <button class="w-full" on:click={toggleVisibility}> Close </button>
        </div>
      </div>
    {/if}
  {/if}
</section>

<style>
  section {
    @apply flex min-h-screen flex-wrap content-center justify-center text-center;
  }

  h1 {
    @apply w-full font-dosis text-9xl font-bold text-prime lg:text-hero;
    line-height: 1;
  }

  h2 {
    @apply w-full font-fira text-2xl;
  }

  .message {
    @apply max-w-sm pt-4 pb-6 text-xl;
  }

  div {
    @apply w-full;
  }

  button {
    @apply my-3 text-primary outline-none;
  }

  .error-info {
    @apply fixed top-0 left-0 z-20 flex min-h-screen w-screen flex-wrap content-center justify-center;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .error-stack {
    @apply flex max-w-xs flex-wrap justify-center rounded-lg bg-even sm:max-w-sm lg:max-w-lg 2xl:max-w-2xl;
  }

  span {
    @apply w-full py-4 text-xl;
  }

  .message-stack {
    @apply px-4;
  }
</style>
