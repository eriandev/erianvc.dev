<script>
	import getBaseURL from 'utils/baseURL'
    import Link from '@components/Link.svelte'
    import Card from '@components/Card.svelte'
    import { GITHUB, DEVTO } from 'utils/socials'

    export let data = []
    export { type as for }

    let type

    const posts = type === 'posts' ? true : false
    const projects = type === 'projects' ? true : false
</script>

<article class:projects class:posts>
    {#each Array(4) as unusedItem, position}

        {#if data[position]}
            <Link external to={data[position].link}>
                <Card class="mr-6" title={data[position].title} preview={data[position].preview} />
            </Link>
        {/if}

    {/each}

    <Link external to={type === 'projects' ? GITHUB : DEVTO} class="md:hidden">
        <Card class="mr-0" title="See more {type}" preview="{getBaseURL()}images/see-more-{type}.png" />
    </Link>

    <aside>x</aside>

</article>

<style>
    article {
        @apply flex flex-no-wrap justify-between px-4 pb-2 overflow-y-hidden text-center;
    }

    article::-webkit-scrollbar {
        @apply h-2;
    }

    article::-webkit-scrollbar-track {
        box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
        -webkit-box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
    }

    article::-webkit-scrollbar-thumb {
        @apply bg-prime;
        outline: 1px solid #2D3748;
    }

    aside {
        @apply flex-none invisible;
        margin-left: 10px;
    }



    @screen sm {
        article {
            @apply px-6;
        }

        aside {
            margin-left: 20px;
        }
    }

    @screen md {
        article {
            @apply grid justify-center w-full gap-12 px-16 overflow-auto;
            grid-template-columns: 300px 300px;
            grid-template-rows: 200px 200px;
        }

        aside {
            @apply hidden;
        }
    }

    @screen xl {
        article {
            @apply w-1/2 px-0 mx-0;
        }

        .projects {
            @apply justify-start pl-8;
        }

        .posts {
            @apply justify-end pr-8;
        }
    }
</style>
