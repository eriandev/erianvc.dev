<script>
    import Button from './Button.svelte';
    export let title, description, icons, demo;

    function getKebabCaseTitle() {
        const cleanTitle = title.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
        return cleanTitle.trim().toLowerCase().replace(/ /g, '-');
    }
</script>

<article>

    <div class="lg:w-3/5 mb-6" data-tilt data-tilt-max="3" data-tilt-speed="800">
        <img loading="lazy" class="img-mockup" src={`./assets/images/${getKebabCaseTitle()}-mockup.png`} alt={`${title} mockup`}>
        <img loading="lazy" class="img-preview" src={`./assets/images/${getKebabCaseTitle()}-preview.png`} alt={`${title} preview`}>
    </div>

    <div class="w-full lg:w-2/5 mb-8">

        <h2>{title}</h2>

        {#each icons as icon}

            <img class="icon" title={icon} src={`./assets/icons/${icon.toLowerCase()}.svg`} alt={`${icon} logo`}>

        {/each}

        <p>
            {description}
        </p>

        <div class="mt-8 font-mono mx-1 lg:mx-0">

            <Button green style="mx-1 lg:mx-0 text-lg sm:text-xl" url={demo} external>
                Demo
            </Button>

            <Button borderless style="mx-1 text-lg sm:text-xl" url={`https://github.com/erianvc/${getKebabCaseTitle()}`} external>
                Repo
            </Button>

        </div>
    </div>

</article>

<style scoped>
    article {
        @apply w-full mb-16 flex flex-wrap justify-center;
    }

    h2 {
        @apply text-2xl font-fira font-bold;
    }

    p {
        @apply text-gray-900 font-fira font-light;
    }

    .img-mockup {
        @apply mx-auto;
        max-height: 360px;
    }

    .img-preview {
        @apply mx-auto hidden shadow-xl rounded-xl;
    }

    .icon {
        @apply inline h-6 mb-6 mr-2;
    }



    @screen xs {
        .img-mockup {
            max-height: 400px;
        }
    }



    @screen sm {
        .img-mockup {
            max-height: 440px;
        }
    }



    @screen lg {
        article {
            @apply flex-row-reverse justify-start;
        }

        h2 {
            @apply text-3xl;
        }

        p {
            @apply pr-6;
        }

        .img-mockup {
            @apply hidden;
        }

        .img-preview {
            @apply block;
        }

        .icon {
            @apply h-8;
        }
    }

    @screen xl {
        p {
            @apply pr-10;
        }
    }
</style>