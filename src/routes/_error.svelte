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

    <p class="message">
        The page you are looking for doesn't exist or an other error ocurred
    </p>

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
                    <button class="w-full" on:click={toggleVisibility}>
                        Close
                    </button>
                </div>
            </div>
        {/if}
    {/if}
</section>

<style>
    section {
        @apply flex flex-wrap content-center justify-center min-h-screen text-center;
    }

    h1 {
        @apply w-full font-bold text-prime text-9xl font-dosis lg:text-hero;
        line-height: 1;
    }

    h2 {
        @apply w-full text-2xl font-fira;
    }

    .message {
        @apply max-w-sm pt-4 pb-6 text-xl;
    }

    div {
        @apply w-full;
    }

    button {
        @apply my-3 outline-none text-primary;
    }

    .error-info {
        @apply fixed top-0 left-0 z-20 flex flex-wrap content-center justify-center w-screen min-h-screen;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .error-stack {
        @apply flex flex-wrap justify-center max-w-xs rounded-lg sm:max-w-sm lg:max-w-lg bg-even 2xl:max-w-2xl;
    }

    span {
        @apply w-full py-4 text-xl;
    }

    .message-stack {
        @apply px-4;
    }
</style>
