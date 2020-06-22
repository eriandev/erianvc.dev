<script>
    import { projects } from '../data/info'
    import Project from './Project.svelte'
    import Button from './Button.svelte'
</script>

<section class="projects">

    <h3>Proyectos</h3>

    <div class="container flex flex-wrap">

        {#each $projects as project, i}

            <Project 
                title={project.title} 
                description={project.description} 
                icons={project.technologies} 
                demo={project.demo} 
            />

        {/each}

    </div>

    <div class="w-full mt-8 text-center">
        <Button green external style="text-2xl lg:text-3xl" url="https://github.com/erianvc">
            Más proyectos en Github
        </Button>
    </div>

</section>

<style>
    .projects {
        @apply my-24 text-center;
    }

    h3 {
        @apply w-full mb-16 text-5xl text-center font-bold font-dosis uppercase;
    }



    @screen lg {
        .projects {
            @apply py-16 text-left;
        }
    }
</style>