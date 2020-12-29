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
            title="Logo" />

        <h1 class="title prime">Erick Vargas</h1>
        <h2 class="subtitle">Frontend Developer</h2>

        <Text class="mb-4 sm:px-8 md:mb-8 2xl:px-16">
            Focused on improving performance and the user experience in your web
            applications.
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
        @apply relative grid min-h-screen pt-8 text-center place-items-center;
    }

    h1 {
        @apply mb-2;
    }

    h2 {
        @apply mb-4 md:mb-8;
    }

    .circles {
        @apply absolute bottom-0 left-0 z-0 w-full h-full overflow-hidden;
        max-width: 100vw;
        z-index: -1;
    }

    .circles li {
        @apply absolute block w-6 h-6 bg-white;
        animation: animate 25s linear infinite;
        bottom: calc(-150px - 40vh);
    }

    .circles li:nth-child(1) {
        @apply w-20 h-20 rounded-full bg-prime;
        left: 25%;
        animation-duration: 20s;
    }

    .circles li:nth-child(2) {
        @apply w-6 h-6 bg-white rounded-full;
        left: 10%;
        animation-duration: 25s;
    }

    .circles li:nth-child(3) {
        @apply w-6 h-6 rounded-full bg-prime;
        left: 70%;
        animation-duration: 30s;
    }

    .circles li:nth-child(4) {
        @apply rounded-full w-14 h-14 bg-secondary;
        left: 40%;
        animation-duration: 15s;
    }

    .circles li:nth-child(5) {
        @apply w-6 h-6 bg-white rounded-full;
        left: 65%;
        animation-duration: 20s;
    }

    .circles li:nth-child(6) {
        @apply w-24 h-24 rounded-full bg-secondary;
        left: 75%;
        animation-duration: 25s;
    }

    .circles li:nth-child(7) {
        @apply w-12 h-12 rounded-full bg-prime;
        left: 35%;
        animation-duration: 30s;
    }

    .circles li:nth-child(8) {
        @apply w-6 h-6 rounded-full bg-secondary;
        left: 50%;
        animation-duration: 35s;
    }

    .circles li:nth-child(9) {
        @apply w-4 h-4 rounded-full bg-prime;
        left: 20%;
        animation-duration: 40s;
    }

    .circles li:nth-child(10) {
        @apply w-12 h-12 bg-white rounded-full;
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
