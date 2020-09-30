<script>
    import getBaseURL from 'utils/baseURL'

    const IMG_404 = getBaseURL() + 'images/not_found.png'
    const TITLE_404 = 'Image Not Found'

    export let src = IMG_404
    export let title = TITLE_404
    export let circle = false
    export let preview = false
    export let cornerless = false
    export { className as class }

    let className = ''
    let alt = title

    function errorHandler() {
        this.onerror = null
        this.src = IMG_404
        this.title = TITLE_404
    }
</script>

<img loading="lazy" class={className} class:cornerless class:circle class:preview {src} {title} {alt} on:error={errorHandler} />

<style>
    .preview {
        @apply max-w-300 max-h-180 md:w-full 2xl:max-w-380 2xl:max-h-220;
    }

    .cornerless {
        @apply rounded;
    }

    .circle {
        @apply rounded-full;
    }
</style>
