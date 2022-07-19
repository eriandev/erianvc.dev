<script>
  import { BASE_URL } from 'utils/constants'
  import Image from '@components/Image.svelte'

  export let selected = false
  export { className as class }

  let className = ''

  let clicked = false
  let imgClasses = 'rounded-full'

  const firstClick = () => {
    clicked = true
    imgClasses = 'rounded-lg sm:rounded-xl'
  }
</script>

<article class={className}>
  <input type="radio" name="slider" id="s2" bind:group={selected} value={2} />
  <input type="radio" name="slider" id="s3" bind:group={selected} value={3} />
  <input type="radio" name="slider" id="s1" bind:group={selected} value={1} />

  <label for="s3" id="mail">
    <Image src="{BASE_URL}images/qr-mail.svg" title="QR Mail" width="100%" height="100%" class={imgClasses} />
  </label>
  <label for="s1" id="linkedin">
    <Image src="{BASE_URL}images/qr-linkedin.svg" title="QR Linkedin" width="100%" height="100%" class={imgClasses} />
  </label>
  <label for="s2" id="telegram" on:click|once={firstClick}>
    {#if !clicked}
      <Image src="{BASE_URL}images/logo.svg" title="Logo" width="12.5rem" height="12.5rem" class="rounded-full" />
    {:else}
      <Image
        src="{BASE_URL}images/qr-telegram.svg"
        title="QR Telegram"
        width="100%"
        height="100%"
        class="rounded-lg sm:rounded-xl"
      />
    {/if}
  </label>
</article>

<style lang="postcss">
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
    @apply absolute left-0 right-0 m-auto flex cursor-pointer select-none flex-wrap content-center justify-center rounded-lg bg-even;
    width: 200px;
    height: 200px;
    transition: all 0.8s ease;
  }

  #s3:checked ~ #telegram,
  #s1:checked ~ #mail,
  #s2:checked ~ #linkedin {
    @apply opacity-50;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(-40%, 0, 0);
  }

  #s3:checked ~ #mail,
  #s1:checked ~ #linkedin,
  #s2:checked ~ #telegram {
    box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19);
    transform: translate3d(0, 0, 100px);
  }

  #s3:checked ~ #linkedin,
  #s1:checked ~ #telegram,
  #s2:checked ~ #mail {
    @apply opacity-50;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
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
