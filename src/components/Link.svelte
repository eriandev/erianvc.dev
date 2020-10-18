<script>
    export let btn = false
    export let fill = false
    export let small = false
    export let outline = false
    export let featured = false
    export let external = false    
    export { href as to }
    export { className as class }

    let href
    let className = ''
</script>

<a class={className} class:btn class:featured class:outline class:fill class:small 
    rel={external ? 'external noopener noreferrer' : 'prefetch'} 
    target={external ? '_blank' : null} 
    {href}>
    <slot />
</a>
