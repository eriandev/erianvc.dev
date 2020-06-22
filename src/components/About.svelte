<script>
    import Button from './Button.svelte'
</script>

<section id="about-me" class="about-me">

    <h3>Acerca de mí</h3>

    <div class="container">
        
        <article class="photo-zone">

            <div class="w-full">
                <img class="my-photo" src="./assets/images/photo.png" alt="Erick Vargas face">
            </div>

        </article>

        <article class="description-zone">
            <p>
                Soy estudiante de Ingeniería en Sistemas apasionado por la programación y la adopción de nuevas tecnologías,
                actualmente enfocado en el desarrollo web y mobile.
            </p>
            <br>
            <p>
                Siempre en búsqueda de nuevos conocimientos y listo para iniciar nuevos retos.
            </p>

            <ul>
                <li>
                    <Button external label="Twitter profile link" url="https://twitter.com/erianvc">
                        <img class="h-8 mx-6 lg:mx-0" src="./assets/icons/twitter.svg" alt="Twitter profile link">
                    </Button>
                </li>
                <li>
                    <Button external label="Github profile link" url="https://github.com/erianvc">
                        <img class="h-8 mx-6 lg:mx-12" src="./assets/icons/github.svg" alt="Github profile link">
                    </Button>
                </li>
                <li>
                    <Button external label="Linkedin profile link" url="https://linkedin.com/in/erianvc">
                        <img class="h-8 mx-6 lg:mx-0" src="./assets/icons/linkedin.svg" alt="Linkedin profile link">
                    </Button>
                </li>
            </ul>
        </article>

    </div>
</section>

<style>
    .about-me {
        @apply text-white pt-16 pb-20;
        background: #02AAB0;
        background: linear-gradient(to bottom,#02AAB0,#00CDAC);
    }

    h3 {
        @apply w-full mb-6 text-5xl text-center font-bold font-dosis uppercase;
    }

    .about-me .container {
        @apply flex flex-wrap;
    }

    .photo-zone {
        @apply w-full mb-8 flex flex-wrap justify-center;
    }

    .my-photo {
        @apply mx-auto rounded-full shadow-2xl;
        max-height: 180px;
    }

    ul {
        @apply w-full pt-8 mb-6 flex flex-wrap justify-center;
    }

    li {
        @apply inline;
    }

    .description-zone {
        @apply w-full flex flex-col text-center justify-center;
    }

    .description-zone p {
        @apply text-lg font-fira;
    }



    @screen md {
        .my-photo {
            max-height: 220px;
        }
    }



    @screen lg {
        .about-me {
            @apply pt-24 pb-32;
            background: #02AAB0; 
            background: linear-gradient(to right,#02AAB0,#00CDAC);
        }

        h3 {
            @apply mb-12;
        }

        .photo-zone {
            @apply w-1/2 pl-16 mb-0;
        }

        .my-photo {
            max-height: 260px;
        }

        ul {
            @apply justify-start;
        }

        .description-zone {
            @apply w-1/2 text-left;
        }
    }



    @screen xl {
        .photo-zone {
            @apply pl-40;
        }
    }
</style>
