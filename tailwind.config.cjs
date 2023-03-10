/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  prefix: 'tw-',
  theme: {
    extend: {
      padding: {
        '75-percent': '75%'
      }
    },
  },
  plugins: [],
}