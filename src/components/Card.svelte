<script>
  import Image from '@components/Image.svelte'

  export let title
  export { src as preview }
  export { className as class }

  let src = ''
  let className = ''

  const card = true

</script>

<style>
  .card {
    width: 300px;
    height: auto;
  }

  h5 {
    @apply pl-1 mt-2 text-sm text-left text-gray-300 font-fira leading-title xl:text-base;
  }

</style>

<div class:card class={className}>
  <Image {src} {title} class="rounded" />
  <h5>{title}</h5>
</div>
