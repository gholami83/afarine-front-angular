module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/**/*.{html,ts}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}