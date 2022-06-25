<script>
  import { onMount } from 'svelte'
  import Icon from '@components/Icon.svelte'
  import Button from '@components/Button.svelte'

  let allSections
  let onviewSegment

  const updateOnviewSegment = (sectionID) => (onviewSegment = sectionID)

  const getThreshold = (width, height) => Math.min(width, height) / Math.max(width, height)

  onMount(() => {
    const WIDTH = window.innerWidth
    const HEIGHT = window.innerHeight

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => !!entry.isIntersecting && updateOnviewSegment(entry.target.id))
      },
      { threshold: getThreshold(WIDTH, HEIGHT) }
    )

    allSections = document.querySelectorAll('section')
    allSections.forEach((section) => io.observe(section))
  })
</script>

<nav class:hidden={onviewSegment === 'hero'}>
  <ul>
    <li aria-current={onviewSegment === 'projects' ? 'page' : null}>
      <Button scrollTo="#projects" class="flex flex-wrap content-center justify-center w-full h-full" btn={false}>
        <Icon name="projects" class="fill-current lg:hidden" />
        <span>Projects</span>
      </Button>
    </li>

    <li aria-current={onviewSegment === 'posts' ? 'page' : null}>
      <Button scrollTo="#posts" class="flex flex-wrap content-center justify-center w-full h-full" btn={false}>
        <Icon name="posts" class="fill-current lg:hidden" />
        <span>Posts</span>
      </Button>
    </li>

    <li aria-current={onviewSegment === 'about' ? 'page' : null}>
      <Button scrollTo="#about" class="flex flex-wrap content-center justify-center w-full h-full" btn={false}>
        <Icon name="about" class="fill-current lg:hidden" />
        <span>About</span>
      </Button>
    </li>

    <li aria-current={onviewSegment === 'contact' ? 'page' : null}>
      <Button scrollTo="#contact" class="flex flex-wrap content-center justify-center w-full h-full" btn={false}>
        <Icon name="contact" class="fill-current lg:hidden" />
        <span>Contact</span>
      </Button>
    </li>
  </ul>
</nav>

<style>
  nav {
    @apply fixed bottom-0 z-50 w-full h-20 bg-black lg:h-14 lg:top-0;
  }

  ul {
    @apply grid h-full max-w-screen-sm grid-cols-4 grid-rows-1 mx-auto;
  }

  li {
    @apply flex flex-wrap content-center justify-center text-center text-gray-500;
  }

  [aria-current],
  li:hover {
    @apply relative text-prime;
  }

  [aria-current]::after,
  li:hover::after {
    @apply absolute bottom-0 block h-1 bg-prime;
    content: '';
    width: 80%;
  }

  span {
    @apply w-full mt-2 text-sm uppercase font-fira lg:pb-1 lg:normal-case;
  }
</style>
