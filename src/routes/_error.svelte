<script>
    export let status
    export let error

    const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<main>
    <h1>{status}</h1>

    <p>{error.message}</p>

    {#if dev && error.stack}
        <pre>{error.stack}</pre>
    {/if}
</main>

<style>
    main {
        @apply flex flex-wrap content-center justify-center text-center;
    }

    h1, p {
        @apply w-full mx-auto my-0;
    }

    h1 {
        @apply ml-2 text-5xl font-bold;
    }

    p {
        @apply mx-auto my-2;
    }
</style>
