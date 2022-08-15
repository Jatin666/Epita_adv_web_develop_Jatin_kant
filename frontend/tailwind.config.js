/* eslint-disable linebreak-style */
/* eslint-disable global-require */
/* eslint-disable quote-props */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'red': '#BF2C23',
        'yellow': '#E0B833',
        'light-yellow': '#F8CF47',
        'dark-blue': '#285DAB',
        'light-blue': '#2B6DB1',
        'dark-grey': '#666666',
        'grey': '#DDDDDD',
        'light-grey': '#F0F0F0',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
};
