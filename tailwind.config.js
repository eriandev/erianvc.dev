const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./**/*.html', './**/*.svelte', './**/*.css'],
    theme: {
        screens: {
            xs: '360px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        container: {
            center: true,
            padding: {
                default: '1rem',
                sm: '4rem',
            },
        },
        extend: {
            fontFamily: {
                dosis: ['Dosis', ...defaultTheme.fontFamily.mono],
                fira: ['Fira Sans', ...defaultTheme.fontFamily.sans],
                jost: ['Jost', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '2xs': '.55rem',
                '7xl': '5rem',
            },
            height: {
                '7': '1.75rem',
            },
            padding: {
                '72': '18rem',
            },
            colors: {
                primary: '#02AAB0',
                secondary: '#00CDAC',
            },
            borderRadius: {
                xl: '1rem',
            },
        },
    },
    variants: {},
    plugins: [],
}
