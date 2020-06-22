<script>
    import * as animateScroll from 'svelte-scrollto';
    export let external=false,
        style=null,
        label=null,
        url='#',
        green=false,
        white=false,
        borderless=false,
        scrollTo='#'

    function getClasses() {
        let classesNames
        if (green || white || borderless) {
            classesNames = 'btn'
            if (green) classesNames += ' btn-green'
            if (white) classesNames += ' btn-white'
            if (borderless) classesNames += ' btn-borderless'
            if (style) classesNames += ` ${style}`
            return classesNames
        }
    }
</script>

{#if external}

    <a
        rel="noopener noreferrer"
        target="_blank"
        href={url}
        aria-label={label}
        class={getClasses() ? getClasses() : null}
    >
        <slot />
    </a>

{:else}

    <button 
        class={getClasses() ? getClasses() : null} 
        on:click={() => animateScroll.scrollTo({element: scrollTo, duration: 1200})}>
        <slot />
    </button>

{/if}

<style>
    .btn {
        @apply py-1 px-4 font-dosis font-bold cursor-pointer outline-none;
    }

    .btn-green {
        background: linear-gradient(to right, #02aab0, #00cdac);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border: 10px solid;
        border-image-slice: 1;
        border-width: 3px;
        border-image-source: linear-gradient(to bottom, #02aab0, #0cdacc);
    }

    .btn-green:hover {
        -webkit-text-fill-color: white;
        background: linear-gradient(to bottom, #02aab0, #00cdac);
    }



    .btn-white {
        @apply text-xl text-white border-2;
    }

    .btn-white:hover {
        color: #00cdac; /* #01bcba */
        background: white;
    }



    .btn-borderless {
        background: linear-gradient(to right,#02AAB0,#00CDAC);
        background-clip: text;
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent;
    }



    @screen sm {
        .btn-white {
            @apply text-2xl;
        }
    }



    @screen lg {
        .btn-green {
            border-image-source: linear-gradient(to right, #02aab0, #00cdac);
        }

        .btn-green:hover {
            background: linear-gradient(to right, #02aab0, #00cdac);
        }
    }
</style>
