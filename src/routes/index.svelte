<script>
    import Hero from '@segments/Hero.svelte'
    import SliderGrid from '@components/SliderGrid.svelte'

    const data = [
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
        {
            title: 'Weather App',
            repo: 'https://github.com/erianvc/weather-app',
            preview: 'https://erianvc.dev/assets/images/weather-app-preview.png'
        },
        {
            title: 'COVID Perú',
            repo: 'https://github.com/erianvc/covid-peru',
            preview: 'https://erianvc.dev/assets/images/covid-peru-preview.png'
        },
    ]
</script>

<Hero />

<div class="w-full xl:w-1/2">
    <SliderGrid {data} />
</div>
