<script>
    import Text from '@components/Text.svelte'
    import Image from '@components/Image.svelte'
    import Icon from '@components/Icon.svelte'
    import Link from '@components/Link.svelte'
</script>

<section id="about">
    <h3 class="title">A little bit about me</h3>

    <article class="look-at-me">
        <div class="img-container">
            <Image circle class="w-24 h-24 border-4 md:w-40 md:h-40 border-prime" src="images/photo.png" title="Erick photo" />
        </div>

        <div class="socials">

            <div class="flex w-full mb-2">
                <Icon class="self-center inline w-6 h-6 text-gray-700 fill-current" name="location" />
                <Text class="inline w-1/2">Lima, Peru</Text>
            </div>

            <ul class="w-full">
                <li>
                    <Link external to="https://www.linkedin.com/in/erianvc">
                        <Icon class="w-6 h-6 text-gray-700 fill-current" name="linkedin" />
                    </Link>
                </li>
                <li>
                    <Link external to="https://github.com/erianvc">
                        <Icon class="w-6 h-6 text-gray-700 fill-current" name="github" />
                    </Link>
                </li>
                <li>
                    <Link external to="https://twitter.com/erianvc">
                        <Icon class="w-6 h-6 text-gray-700 fill-current" name="twitter" />
                    </Link>
                </li>
            </ul>

        </div>
    </article>

    <article class="container description">
        <Text class="mb-6">
            Student of the professional career of Systems Engineering,
            I am someone self-taught, proactive, effective, who loves technology 
            and always be updated on new and better ways to do things well.
        </Text>

        <Text>
            I am currently dedicated to the development of web applications 
            that help solve the various problems that afflict the world today. 
        </Text>
    </article>

    <div class="action-button">
        <Link to="contact" btn featured fill>
            Let's work together
        </Link>
    </div>
</section>

<style>
    section {
        @apply flex flex-wrap justify-center pt-8 text-center sm:min-h-screen sm:pt-0 sm:content-center md:pt-24;
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
        @apply hidden w-full mb-32 sm:inline-block;
    }
</style>
