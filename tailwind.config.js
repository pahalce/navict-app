const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      b_white: '#FFFFFF',
      b_lightblue: '#E7F5FB',
      b_greyblue: '#F8FAFF',
      b_black: '#3F3F3F',
      b_blue: '#76C3DB',
      b_red: '#E97C4C',
      b_yellow: '#F5B76B',
      b_green: '#73B1A8'
    },
    fontFamily: {
      noto: 'Noto Sans JP',
      josefin: 'Josefin Sans',
      roboto: 'Roboto',
      body: ['Noto Sans JP', 'Josefin Sans', 'Roboto']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        '.b-font-t1': {
          fontFamily: theme('fontFamily.noto'),
          fontWeight: 'bold',
          fontSize: theme('fontSize.4xl')
        },
        '.b-font-t2': {
          fontFamily: theme('fontFamily.noto'),
          fontWeight: 'bold',
          fontSize: theme('fontSize.5xl')
        }
      }

      addUtilities(newUtilities)
    })
  ]
}
