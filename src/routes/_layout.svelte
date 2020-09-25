<script>
    import Head from '@components/Head.svelte'
    import Navbar from '@components/Navbar.svelte'

    export let segment
</script>

<Head />

<main>
    <slot />
</main>

<Navbar {segment} />
