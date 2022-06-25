<script>
  import { BASE_URL } from 'utils/constants'

  export let src = false
  export let width = '300px'
  export let height = '169px'
  export let title = TITLE_404
  export { className as class }

  let className = ''
  let loading = true

  const loaded = new Map()
  const TITLE_404 = 'Not found'
  const IMG_404 = `${BASE_URL}images/not-found.svg`

  const lazy = (node, data) => {
    const img = new Image()
    img.src = data.src
    img.onload = () => {
      loaded.set(data.src, img)
      node.setAttribute('src', data.src)
      node.setAttribute('title', title)
      node.setAttribute('alt', title)
      loading = false
    }
  }

  function errorHandler() {
    this.onerror = null
    this.src = IMG_404
    this.alt = TITLE_404
    this.title = TITLE_404
  }
</script>

<img
  alt
  loading="lazy"
  class:loading
  class={className}
  on:click
  on:error={errorHandler}
  use:lazy={{ src: src ? src : IMG_404 }}
  style="width: {width}; height: {height};"
/>

<style>
  img {
    @apply inline-block object-cover;
  }

  .loading {
    @apply animate-[loading_3s_infinite] bg-[#f9f9f9];
  }

  @keyframes loading {
    100% {
      background-color: #9ca3af;
    }

    50% {
      background-color: #6b7280;
    }

    0% {
      background-color: #9ca3af;
    }
  }
</style>
