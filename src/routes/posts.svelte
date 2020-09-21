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

<section id="posts">
    <article class="container">
        <h3 class="title">Sharing what I know</h3>

        <Text left class="mb-6 xl:w-full 2xl:pr-24">
            I believe that sharing our knowledge is the best thing to improve as a professional.
            That is why I have wrote short but effective articles about different topics.
        </Text>

        <Text left class="mb-8 xl:w-full 2xl:pr-24">
            Don’t be shy and take a look at what I have for you and hope you can learn something.
        </Text>

        <h4 class="emphasis">Cool articles to read</h4>

        <div>
            <Link external to="https://dev.to/erianvc" btn outline>
                View more posts
            </Link>
        </div>
    </article>

    <SliderGrid posts {data} />
</section>

<style>
    section {
        @apply flex flex-wrap content-center justify-center min-h-screen text-center xl:flex-row-reverse xl:max-w-screen-xl xl:mx-auto;
    }

    article {
        @apply xl:w-1/2 xl:pl-8;
    }

    h3 {
        @apply mb-6 xl:text-left;
    }

    h4 {
        @apply mb-12 xl:text-left;
    }

    div {
        @apply hidden xl:flex xl:justify-start xl:block;
    }
</style>
