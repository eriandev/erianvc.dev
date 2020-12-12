<script>
    import getBaseURL from 'utils/baseURL'

    export let src = false
    export let type = 'webp'
    export let title = false
    export let preview = false
    export let name = 'not_found'
    export { className as class }

    let className = ''

    const TITLE_404 = 'Not found'
    const IMG_404 = `${getBaseURL()}images/not_found.svg`

    const getName = () =>
        title
            ? title
            : (name.charAt(0).toUpperCase() + name.slice(1)).replace(
                  /(-|_)/g,
                  ' ',
              )

    function errorHandler() {
        this.onerror = null
        this.src = IMG_404
        this.alt = TITLE_404
        this.title = TITLE_404
    }
</script>

<img
    loading="lazy"
    class:preview
    class={className}
    src={src ? src : `${getBaseURL()}images/${name}.${type}`}
    title={getName()}
    alt={getName()}
    on:click
    on:error={errorHandler} />

<style>
    .preview {
        @apply max-w-300 max-h-180 md:w-full 2xl:max-w-380 2xl:max-h-220;
    }
</style>
