const mode = process.env.NODE_ENV
const dev = mode === 'development'
const config = { preset: ['default', { discardComments: { removeAll: true } }] }

module.exports = {
  plugins: [
    require('tailwindcss')(),
    require('postcss-preset-env')(),
    !dev && require('cssnano')(config),
  ],
}
