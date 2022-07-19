<script>
  import { onMount } from 'svelte'
  import { SOCIALS } from 'utils/constants'
  import { getFeaturedDataOf } from 'utils/data'
  import Text from '@components/Text.svelte'
  import Link from '@components/Link.svelte'
  import SliderGrid from '@components/SliderGrid.svelte'

  let data

  onMount(async () => (data = await getFeaturedDataOf('posts')))
</script>

<section id="posts">
  <div class="content">
    <article class="container">
      <h3 class="title">Sharing what I know</h3>

      <Text left class="mb-6 xl:w-full">
        I believe that sharing our knowledge is the best thing to improve as a professional. That is why I have wrote
        short but effective articles about different topics.
      </Text>

      <Text left class="mb-8 xl:w-full">
        Don’t be shy and take a look at what I have for you and hope you can learn something.
      </Text>

      <h4 class="emphasis">Cool articles to read</h4>

      <div class="btn-desktop">
        <Link external to={SOCIALS.DEVTO} btn outline>View more posts</Link>
      </div>
    </article>

    <SliderGrid for="posts" {data} />

    <div class="btn-mobile">
      <Link external to={SOCIALS.DEVTO} btn outline>View more posts</Link>
    </div>
  </div>
</section>

<style lang="postcss">
  section {
    @apply min-h-screen bg-even text-center;
  }

  .content {
    @apply flex min-h-screen flex-wrap justify-center pt-12 pb-8 sm:content-center lg:pt-32 xl:mx-auto xl:max-w-screen-xl xl:flex-row-reverse;
  }

  article {
    @apply xl:w-1/2 xl:pl-8;
  }

  h3 {
    @apply mb-6 xl:text-left;
  }

  h4 {
    @apply mb-8 xl:text-left;
  }

  .btn-mobile {
    @apply mb-16 mt-14 hidden md:flex md:justify-center xl:hidden;
  }

  .btn-desktop {
    @apply hidden xl:flex xl:justify-start;
  }
</style>
