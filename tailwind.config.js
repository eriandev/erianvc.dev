const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.{svelte,html,css}'],
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1900px',
    },
    spacing: {
      0: '0',
      '1px': '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
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
      '6xl': '4rem',
      '7xl': '6rem',
      '8xl': '8rem',
      '9xl': '9rem',
      hero: '16rem',
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
        100: '#E2E2E2',
        300: '#FFFFFFB3',
        500: '#FFFFFF80',
        700: '#FFFFFF4D',
      },

      black: '#1A202C',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    borderRadius: {
      DEFAULT: '0.5rem',
      lg: '1rem',
      xl: '2rem',
      full: '50%',
    },
    extend: {
      transitionProperty: {
        'transform-bgColor': 'transform, background-color, color'
      }
    }
  },
  variants: {},
  plugins: [],
}
