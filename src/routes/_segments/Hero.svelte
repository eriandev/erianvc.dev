<script>
    import Icon from '@components/Icon.svelte'
    import Text from '@components/Text.svelte'
    import Button from '@components/Button.svelte'
</script>

<section id="hero">
    <div class="container">
        <Icon class="h-40 mb-4" name="logo" center />

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
        background-image: url('/images/bg-hero.png');
    }

    h1 {
        @apply mb-2;
    }

    h2 {
        @apply mb-4 md:mb-8;
    }
</style>
