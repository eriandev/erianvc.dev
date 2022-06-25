<script>
  import { BASE_URL, SOCIALS } from 'utils/constants'
  import Text from '@components/Text.svelte'
  import Image from '@components/Image.svelte'
  import Icon from '@components/Icon.svelte'
  import Link from '@components/Link.svelte'
  import Button from '@components/Button.svelte'

</script>

<style>
  section {
    @apply flex flex-wrap content-center justify-center min-h-screen pt-12 pb-8 text-center bg-odd lg:pt-32;
  }

  h3 {
    @apply mb-12;
  }

  .look-at-me {
    @apply grid content-center w-full grid-cols-2 grid-rows-1 mb-12;
  }

  .img-container {
    @apply w-24 mr-4 md:w-40 justify-self-end;
  }

  .socials {
    @apply flex flex-wrap content-center pl-4 justify-self-start;
  }

  .description {
    @apply justify-center w-full mb-12;
  }

  ul {
    @apply flex flex-wrap justify-start w-full;
  }

  li {
    @apply inline mr-4;
  }

  .action-button {
    @apply hidden w-full mb-16 sm:inline-block;
  }

</style>

<section id="about">
  <h3 class="title">A little bit about me</h3>

  <article class="look-at-me">
    <div class="img-container">
      <Image
        src="{BASE_URL}images/photo.webp"
        width="100%"
        height="100%"
        title="Erick Vargas photo"
        class="border-4 rounded-full border-prime" />
    </div>

    <div class="socials">
      <div class="flex w-full mb-2">
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
