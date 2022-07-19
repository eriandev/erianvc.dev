<script>
  import Image from '@components/Image.svelte'

  export let title
  export { src as preview }
  export { className as class }

  let src = ''
  let className = ''

  const card = true
</script>

<div class:card class={className}>
  <Image {src} {title} class="rounded" />
  <h5>{title}</h5>
</div>

<style lang="postcss">
  .card {
    @apply h-auto w-[300px];
  }

  h5 {
    @apply mt-2 pl-1 text-left font-fira text-sm leading-title text-gray-300 xl:text-base;
  }
</style>
