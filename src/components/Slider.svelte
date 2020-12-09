<script>
    import Icon from '@components/Icon.svelte'

    export let selected = false
    export { className as class }

    let className = ''

    let firstSlide = 'logo'
    let imgClasses = 'h-32'

    const firstClick = () => {
        imgClasses = null
        firstSlide = 'qr-telegram'
    }
</script>

<article class={className}>
    <input type="radio" name="slider" id="s2" bind:group={selected} value={2} />
    <input type="radio" name="slider" id="s3" bind:group={selected} value={3} />
    <input type="radio" name="slider" id="s1" bind:group={selected} value={1} />

    <label for="s3" id="mail">
        <Icon class="rounded-lg sm:rounded-xl {imgClasses}" name="qr-mail" />
    </label>
    <label for="s1" id="linkedin">
        <Icon
            class="rounded-lg sm:rounded-xl {imgClasses}"
            name="qr-linkedin" />
    </label>
    <label for="s2" id="telegram" on:click|once={firstClick}>
        <Icon class="rounded-lg sm:rounded-xl" name={firstSlide} />
    </label>
</article>

<style>
    input {
        @apply hidden;
    }

    article {
        @apply relative;
        height: 200px;
        perspective: 1000px;
        transform-style: preserve-3d;
    }

    label {
        @apply absolute left-0 right-0 flex flex-wrap content-center justify-center m-auto rounded-lg cursor-pointer select-none bg-even;
        width: 200px;
        height: 200px;
        transition: all 0.8s ease;
    }

    #s3:checked ~ #telegram,
    #s1:checked ~ #mail,
    #s2:checked ~ #linkedin {
        @apply opacity-50;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3),
            0 2px 2px 0 rgba(0, 0, 0, 0.2);
        transform: translate3d(-40%, 0, 0);
    }

    #s3:checked ~ #mail,
    #s1:checked ~ #linkedin,
    #s2:checked ~ #telegram {
        box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3),
            0 11px 7px 0 rgba(0, 0, 0, 0.19);
        transform: translate3d(0, 0, 100px);
    }

    #s3:checked ~ #linkedin,
    #s1:checked ~ #telegram,
    #s2:checked ~ #mail {
        @apply opacity-50;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3),
            0 2px 2px 0 rgba(0, 0, 0, 0.2);
        transform: translate3d(40%, 0, 0);
    }

    @screen sm {
        article {
            height: 300px;
        }

        label {
            @apply rounded-xl;
            width: 300px;
            height: 300px;
        }
    }
</style>
