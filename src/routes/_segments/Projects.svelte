<script>
  import { onMount } from 'svelte'
  import { SOCIALS } from 'utils/constants'
  import { getFeaturedDataOf } from 'utils/data'
  import Text from '@components/Text.svelte'
  import Link from '@components/Link.svelte'
  import SliderGrid from '@components/SliderGrid.svelte'

  let data

  onMount(async () => (data = await getFeaturedDataOf('projects')))
</script>

<section id="projects">
  <div class="content">
    <article class="container">
      <h3 class="title">Made from Scratch</h3>

      <Text right class="mb-6 xl:w-full 2xl:pl-24">
        I have been puting the work crafting my knowledge, gaining experience building real world projects.
      </Text>

      <Text right class="mb-8 xl:w-full 2xl:pl-24">
        Practice is an important aspect for any skill
        <br class="hidden xl:block" />even more in software development.
      </Text>

      <h4 class="emphasis">Watch the cool stuff I have built</h4>

      <div class="btn-desktop">
        <Link external to={SOCIALS.GITHUB} btn outline>View more projects</Link>
      </div>
    </article>

    <SliderGrid for="projects" {data} />

    <div class="btn-mobile">
      <Link external to={SOCIALS.GITHUB} btn outline>View more projects</Link>
    </div>
  </div>
</section>

<style>
  section {
    @apply min-h-screen bg-odd text-center;
  }

  .content {
    @apply flex min-h-screen flex-wrap justify-center pt-8 pt-12 sm:content-center lg:pt-32 xl:mx-auto xl:max-w-screen-xl;
  }

  article {
    @apply xl:w-1/2 xl:pr-8;
  }

  h3 {
    @apply mb-6 xl:text-right;
  }

  h4 {
    @apply mb-12 xl:text-right;
  }

  .btn-mobile {
    @apply mb-16 mt-14 hidden md:block md:flex md:justify-center xl:hidden;
  }

  .btn-desktop {
    @apply hidden xl:block xl:flex xl:justify-end;
  }
</style>
