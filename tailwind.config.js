/** @type {(tailwindConfig: object) => object} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /text-.*/,
      variants: ['xl'],
    },
    {
      pattern: /font-.*/,
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': '#073B3A',
        'secondary': '#0B6E4F',
        'accent': '#08A045',
        'mantis': '#6BBF59',
        'emerald': '#21D375',
        'gray': '#828282',
        'lightGray': '#D9D9D9',
        'error-red': '#CC4545',
      },
      keyframes: {},
      animation: {},
    }
  },
  plugins: [],
})