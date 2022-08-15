/* eslint-disable linebreak-style */
/* eslint-disable global-require */
const { ESLINT_MODES } = require('@craco/craco');

module.exports = {
  style: {
    postOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  eslint: {
    mode: ESLINT_MODES.file,
  },
};
