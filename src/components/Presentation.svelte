<script>
    import Button from './Button.svelte'
</script>

<section class="presentation">
    <div class="container">
        <h1>
            <span class="name">Erick Vargas</span>
            <span class="lg:block">Estudiante de Ingeniería en Sistemas</span>
        </h1>
        <Button green scrollTo=".about-me" style="my-8 text-2xl lg:text-3xl">
            Más acerca de mí
        </Button>
    </div>
</section>

<style>
    .name {
        display: block;
        background: linear-gradient(to right, #02aab0, #00cdac);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .presentation {
        @apply flex flex-wrap content-center text-center;
        min-height: 99vh;
    }

    h1 {
        @apply text-4xl font-bold font-dosis leading-tight;
    }

    @screen xs {
        h1 {
            @apply text-5xl;
        }
    }

    @screen lg {
        .presentation {
            @apply pl-24 text-left;
        }

        h1 {
            @apply text-6xl;
        }

        .name {
            display: inline;
        }
    }
</style>
