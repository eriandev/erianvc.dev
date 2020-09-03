const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    experimental: {
        applyComplexClasses: true,
    },
    future: {
        removeDeprecatedGapUtilities: true,
    },
    purge: ['./src/**/*.svelte', './src/**/*.html'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1280px',
            xl: '1440px',
        },
        container: {
            center: true,
            padding: {
                default: '1rem',
                md: '4rem',
                xl: '3rem',            
        },
        },
        spacing: {
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '4': '1rem',
            '6': '1.5rem',
            '8': '2rem',
            '12': '3rem',
            '14': '3.5rem',
            '16': '4rem',
            auto: 'auto',
        },
        fontFamily: {
            dosis: ['Dosis', ...fontFamily.mono],
            fira: ['Fira Sans', ...fontFamily.sans],
        },
        fontSize: {
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '2rem',
            '4xl': '2.5rem',
            '5xl': '3.5rem',
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            bold: 700,
        },
        lineHeight: {
            title: '1.25',
            body: '1.5',
        },
        colors: {
            prime: 'var(--color-prime)',
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',

            odd: '#2D3748',
            even: '#222B3C',

            gray: {
                '100': '#E2E2E2',
                '300': '#FFFFFFB3',
                '500': '#FFFFFF80',
                '700': '#FFFFFF4D',
            },

            black: '#1A202C',
            white: '#FFFFFF',
            transparent: 'transparent',
        },
        borderRadius: {
            default: '0.5rem',
        },
    },
    variants: {},
    plugins: [],
}
