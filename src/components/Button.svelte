<script>
    import { scrollTo as animatedScroll } from 'svelte-scrollto'

    export let btn = true
    export let fill = false
    export let small = false
    export let outline = false
    export let duration = 1500
    export let featured = false
    export { className as class }
    export { element as scrollTo }

    let className = ''
    let element = false

    const scrollTo = () =>
        element ? animatedScroll({ element, duration }) : null

</script>

<button
    class={className}
    class:btn
    class:featured
    class:small
    class:fill
    class:outline
    on:click={scrollTo}>
    <slot />
</button>

<style>
    button {
        @apply focus:outline-none;
    }

</style>
