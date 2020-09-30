<script>
    import { onMount, beforeUpdate } from 'svelte'
    import Head from '@components/Head.svelte'
    import Navbar from '@components/Navbar.svelte'
    import Footer from '@components/Footer.svelte'

    export let segment

    let mainSelector

    onMount(() => mainSelector = document.querySelector('main'))
    beforeUpdate(() => mainSelector ? mainSelector.scrollTop = 0 : null)
</script>

<Head />

<Navbar {segment} />

<main>
    <slot />
    <Footer {segment} />
</main>
