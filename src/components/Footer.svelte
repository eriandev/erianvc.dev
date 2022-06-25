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
        class="border-b-2 border-prime font-fira text-prime hover:text-primary"
      >
        Juan Carlos Cruz
      </Link>
    </p>
    <p>
      Developed with
      <Icon class="mb-1 inline" name="love" size="16" />
      and
      <Icon class="mb-1 inline" name="sapper" size="16" />
    </p>
  </div>
</footer>

<style>
  footer {
    @apply mb-20 flex h-20 w-full justify-center bg-black text-center font-fira lg:mb-0;
  }

  .content {
    @apply w-full pt-4;
  }

  p {
    @apply pb-1;
  }
</style>
