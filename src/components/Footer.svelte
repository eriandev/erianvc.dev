<script>
    import Button from './Button.svelte'
</script>

<footer>
    <ul>
        <li>
            <Button label="Twitter profile link" url="https://twitter.com/erianvc" external>
                <img class="h-8 mx-8 lg:mx-10" src="./assets/icons/twitter.svg" alt="Twitter profile link">
            </Button>
        </li>
        <li>
            <Button label="Github profile link" url="https://github.com/erianvc" external>
                <img class="h-8 mx-8 lg:mx-10" src="./assets/icons/github.svg" alt="Github profile link">
            </Button>
        </li>
        <li>
            <Button label="Linkedin profile link" url="https://linkedin.com/in/erianvc" external>
                <img class="h-8 mx-8 lg:mx-10" src="./assets/icons/linkedin.svg" alt="Linkedin profile link">
            </Button>
        </li>
    </ul>

    <div class="py-4 flex text-white items-center">
        Hecho con 
        <img class="h-4 mx-1 inline" src="./assets/icons/heart.svg" alt="Love"> 
        usando 
        <img class="h-4 mx-1 inline" src="./assets/icons/svelte.svg" title="Svelte" alt="Svelte icon">
    </div>
</footer>

<style>
    footer {
        @apply flex flex-wrap justify-center;
        background: #232323;
    }

    ul {
        @apply w-full pt-20 pb-6 flex flex-wrap justify-center;
    }

    ul > li {
        @apply inline;
    }
</style>