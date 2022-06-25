<script>
  import { BASE_URL, SOCIALS } from 'utils/constants'
  import Text from '@components/Text.svelte'
  import Image from '@components/Image.svelte'
  import Icon from '@components/Icon.svelte'
  import Link from '@components/Link.svelte'
  import Button from '@components/Button.svelte'
</script>

<section id="about">
  <h3 class="title">A little bit about me</h3>

  <article class="look-at-me">
    <div class="img-container">
      <Image
        src="{BASE_URL}images/photo.webp"
        width="100%"
        height="100%"
        title="Erick Vargas photo"
        class="rounded-full border-4 border-prime"
      />
    </div>

    <div class="socials">
      <div class="mb-2 flex w-full">
        <Text left class="inline">Lima, Peru</Text>
      </div>

      <ul>
        <li>
          <Link external to={SOCIALS.LINKEDIN} label="Linkedin">
            <Icon name="linkedin" />
          </Link>
        </li>
        <li>
          <Link external to={SOCIALS.GITHUB} label="Github">
            <Icon name="github" />
          </Link>
        </li>
        <li>
          <Link external to={SOCIALS.TWITTER} label="Twitter">
            <Icon name="twitter" />
          </Link>
        </li>
      </ul>
    </div>
  </article>

  <article class="container description">
    <Text class="mb-6">
      Student of the professional career of Systems Engineering, I am someone self-taught, proactive, effective, who
      loves technology and always be updated on new and better ways to do things well.
    </Text>

    <Text>
      I am currently dedicated to the development of web applications that help solve the various problems that afflict
      the world today.
    </Text>
  </article>

  <div class="action-button">
    <Button scrollTo="#contact" featured fill>Let's work together</Button>
  </div>
</section>

<style>
  section {
    @apply flex min-h-screen flex-wrap content-center justify-center bg-odd pt-12 pb-8 text-center lg:pt-32;
  }

  h3 {
    @apply mb-12;
  }

  .look-at-me {
    @apply mb-12 grid w-full grid-cols-2 grid-rows-1 content-center;
  }

  .img-container {
    @apply mr-4 w-24 justify-self-end md:w-40;
  }

  .socials {
    @apply flex flex-wrap content-center justify-self-start pl-4;
  }

  .description {
    @apply mb-12 w-full justify-center;
  }

  ul {
    @apply flex w-full flex-wrap justify-start;
  }

  li {
    @apply mr-4 inline;
  }

  .action-button {
    @apply mb-16 hidden w-full sm:inline-block;
  }
</style>
