<script>
    import Link from '@components/Link.svelte'
    import Icon from '@components/Icon.svelte'
</script>

<footer>
    <div class="content">
        <p>
            Designed by
            <Link
                external
                to="https://www.linkedin.com/in/juancarlos-cruz"
                class="border-b-2 border-prime text-prime font-fira hover:text-primary">
                Juan Carlos Cruz
            </Link>
        </p>
        <p>
            Developed with
            <Icon class="inline w-4 h-4 mb-1" name="love" />
            and
            <Icon class="inline w-4 h-4 mb-1" name="sapper" />
        </p>
    </div>
</footer>

<style>
    footer {
        @apply flex justify-center w-full h-20 mb-20 text-center bg-black font-fira lg:mb-0;
    }

    .content {
        @apply w-full pt-4;
    }

    p {
        @apply pb-1;
    }
</style>
