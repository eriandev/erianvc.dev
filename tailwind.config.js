module.exports = {
    experimental: {
        applyComplexClasses: true,
        extendedFontSizeScale: true,
    },
    future: {
        removeDeprecatedGapUtilities: true,
    },
    purge: ['./src/**/*.svelte', './src/**/*.html'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
    },
    variants: {},
    plugins: [],
}
