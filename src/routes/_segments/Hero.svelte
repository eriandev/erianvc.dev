<script>
    import Text from '@components/Text.svelte'
    import Image from '@components/Image.svelte'
    import Button from '@components/Button.svelte'
</script>

<section id="hero">
    <div class="container">
        <Image name="logo" type="svg" class="w-40 h-40 mx-auto mb-4" />

        <h1 class="title prime">Erick Vargas</h1>
        <h2 class="subtitle">Frontend Developer</h2>

        <Text class="mb-4 sm:px-8 md:mb-8 2xl:px-16">
            Focused on improving performance and the user experience in your web
            applications.
        </Text>

        <Button scrollTo="#projects" featured fill>See my projects</Button>
    </div>
</section>

<style>
    section {
        @apply grid min-h-screen pt-8 text-center bg-center bg-no-repeat bg-cover place-items-center;
        background-image: url('/images/bg-hero.webp');
    }

    h1 {
        @apply mb-2;
    }

    h2 {
        @apply mb-4 md:mb-8;
    }
</style>
