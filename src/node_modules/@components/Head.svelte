<script>
    import { stores } from '@sapper/app'
    import { beforeUpdate } from 'svelte'
    import getBaseURL from 'utils/baseURL'

    let currentPage

    const DESCRIPTION = 'Developer passionate about programming and adoption of new technologies'
    const { page } = stores()

    beforeUpdate(() => {
        switch ($page.path) {
            case '/about':
                currentPage = 'About'
                break
            case '/contact':
                currentPage = 'Contact'
                break
            case '/projects':
                currentPage = 'Projects'
                break
            case '/posts':
                currentPage = 'Posts'
                break
            default:
                currentPage = 'Portfolio'
                break
        }
    })
</script>

<svelte:head>
    <title>Erick Vargas | {currentPage}</title>
    <meta name="description" content={DESCRIPTION} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://erianvc.dev/" />
    <meta property="og:title" content="Erick Vargas | {currentPage ? currentPage : 'Portfolio'}" />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:image" content="{getBaseURL()}images/preview.png" />

    <meta name="twitter:creator" content="@erianvc" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Erick Vargas | {currentPage ? currentPage : 'Portfolio'}" />
    <meta name="twitter:description" content={DESCRIPTION} />
</svelte:head>
