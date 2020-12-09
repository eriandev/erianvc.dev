<script>
    import Love from '@assets/icons/love.svg'
    import About from '@assets/icons/about.svg'
    import Posts from '@assets/icons/posts.svg'
    import Sapper from '@assets/icons/sapper.svg'
    import Github from '@assets/icons/github.svg'
    import Contact from '@assets/icons/contact.svg'
    import Twitter from '@assets/icons/twitter.svg'
    import Projects from '@assets/icons/projects.svg'
    import Linkendin from '@assets/icons/linkedin.svg'
    import NotFound from '@assets/icons/not-found.svg'

    export let size = 24
    export let color = '#FFFFFF4D'
    export let name = 'not-found'
    export { className as class }

    let className = ''

    const AVAIBLE_ICONS = {
        love: Love,
        about: About,
        posts: Posts,
        sapper: Sapper,
        github: Github,
        contact: Contact,
        twitter: Twitter,
        projects: Projects,
        linkedin: Linkendin,
        'not-found': NotFound,
    }
</script>

<svelte:component
    this={AVAIBLE_ICONS[Object.keys(AVAIBLE_ICONS).includes(name) ? name : 'not-found']}
    class={className}
    width={size}
    height={size}
    fill={color} />
