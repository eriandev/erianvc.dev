<script>
    import Text from '@components/Text.svelte'
    import Link from '@components/Link.svelte'
    import SliderGrid from '@components/SliderGrid.svelte'

    const data = [
        {
            title: 'COVID Perú',
            repo: 'https://github.com/erianvc/covid-peru',
            preview: 'https://erianvc.dev/assets/images/covid-peru-preview.png'
        },
        {
            title: 'Weather App',
            repo: 'https://github.com/erianvc/weather-app',
            preview: 'https://erianvc.dev/assets/images/weather-app-preview.png'
        },
        {
            title: 'Fylo Landing Page',
            repo: 'https://github.com/erianvc/fylo-landing-page',
            preview: 'https://erianvc.dev/assets/images/fylo-landing-page-preview.png'
        },
        {
            title: 'Huddle Landing Page',
            repo: 'https://github.com/erianvc/huddle-landing-page',
            preview: 'https://erianvc.dev/assets/images/huddle-landing-page-preview.png'
        },
    ]
</script>

<section id="projects">
    <div class="content">
        <article class="container">
            <h3 class="title">Made from Scratch</h3>

            <Text right class="mb-6 xl:w-full 2xl:pl-24">
                I have been puting the work crafting my knowledge,
                gaining experience building real world projects.
            </Text>

            <Text right class="mb-8 xl:w-full 2xl:pl-24">
                Practice is an important aspect for any skill <br class="hidden xl:block">even more in software development. 
            </Text>

            <h4 class="emphasis">Watch the cool stuff I have built</h4>

            <div class="btn-desktop">
                <Link external to="https://github.com/erianvc" btn outline>
                    View more projects
                </Link>
            </div>
        </article>

        <SliderGrid projects {data} />

        <div class="btn-mobile">
            <Link external to="https://github.com/erianvc" btn outline>
                View more projects
            </Link>
        </div>
    </div>
</section>

<style>
    section {
        @apply min-h-screen text-center;
    }

    .content {
        @apply flex flex-wrap justify-center pt-8 sm:content-center sm:min-h-screen sm:pt-0 md:pt-24 xl:max-w-screen-xl xl:mx-auto;
    }

    article {
        @apply xl:w-1/2 xl:pr-8;
    }

    h3 {
        @apply mb-6 xl:text-right;
    }

    h4 {
        @apply mb-12 xl:text-right;
    }

    .btn-mobile {
        @apply hidden mb-32 md:block md:flex md:justify-center mt-14 xl:hidden;
    }

    .btn-desktop {
        @apply hidden xl:flex xl:justify-end xl:block;
    }
</style>
