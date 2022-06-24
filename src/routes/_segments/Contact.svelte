<script>
    import { onMount } from 'svelte'
    import { QR_DATA } from 'utils/constants'
    import Text from '@components/Text.svelte'
    import Link from '@components/Link.svelte'
    import Slider from '@components/Slider.svelte'

    let selected
    let clickTap

    onMount(() => (clickTap = 'ontouchstart' in window ? 'Tap' : 'Click'))

</script>

<section id="contact">
    <div class="container">
        <h3 class="title">Get in Touch</h3>

        <Text class="mb-12">
            Whether it is a small venture, complex web app or business software,
            contact me and we will discuss it thoroughly.
        </Text>

        {#if selected}
            <Link external to={QR_DATA[selected - 1].link} btn small outline>
                {QR_DATA[selected - 1].msg}
            </Link>
        {:else}
            <h4 class="emphasis">
                {clickTap}
                on my logo to know how to contact me
            </h4>
        {/if}

        <Slider class="mt-12 mb-16" bind:selected />
    </div>
</section>

<style>
    section {
        @apply flex flex-wrap content-center justify-center pt-12 pb-8 text-center bg-even;
        height: calc(100vh - 5rem);
    }

    h3 {
        @apply mb-6;
    }

    h4 {
        @apply mb-8;
    }

</style>
