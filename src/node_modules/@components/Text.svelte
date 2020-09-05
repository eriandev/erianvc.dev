<script>
    export let right = false
    export let left = false
    export { className as class }

    let className = ''
</script>

<p class:right class:left class={className}>
    <slot />
</p>

<style>
    p {
        @apply text-center text-gray-100 font-fira leading-body md:text-2xl;
    }

    .right {
        @apply xl:text-right;
    }

    .left {
        @apply xl:text-left;
    }
</style>
