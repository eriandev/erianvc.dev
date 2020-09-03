<script>
    import Button from '@components/Button.svelte'
    import Text from '@components/Text.svelte'
</script>

<section class="flex flex-col space-y-4">
    <div>
        <Button featured fill>
            Button Prime fill
        </Button>
        <Button fill>
            Button Fill
        </Button>
    </div>

    <div>
        <Button featured outline>
            Button Prime outline
        </Button>
        <Button outline>
            Button outline
        </Button>
    </div>
</section>

<section class="container flex flex-wrap justify-center">
    <Text class="w-full lg:w-1/2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus quae iste et.
        Hic tempora eveniet voluptatibus inventore placeat optio quae impedit sed adipisci repellat?
        Enim perspiciatis amet praesentium minus.
    </Text>

    <Text right class="w-full lg:w-1/2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus quae iste et.
        Hic tempora eveniet voluptatibus inventore placeat optio quae impedit sed adipisci repellat?
        Enim perspiciatis amet praesentium minus.
    </Text>

    <Text class="w-full lg:w-1/2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus quae iste et.
        Hic tempora eveniet voluptatibus inventore placeat optio quae impedit sed adipisci repellat?
        Enim perspiciatis amet praesentium minus.
    </Text>

    <Text left class="w-full lg:w-1/2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus quae iste et.
        Hic tempora eveniet voluptatibus inventore placeat optio quae impedit sed adipisci repellat?
        Enim perspiciatis amet praesentium minus.
    </Text>
</section>
