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
    @apply text-center font-fira leading-body text-gray-100 md:text-2xl;
  }

  .right {
    @apply xl:text-right;
  }

  .left {
    @apply xl:text-left;
  }
</style>
