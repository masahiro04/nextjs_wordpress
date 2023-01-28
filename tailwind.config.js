module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/shared/presentation/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        'main-100': '#edf2fb',
        'main-200': '#e2eafc',
        'main-300': '#d7e3fc',
        'main-400': '#ccdbfd',
        'main-500': '#c1d3fe',
        'main-600': '#b6ccfe',
        'main-700': '#abc4ff'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
