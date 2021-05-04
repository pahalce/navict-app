const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      $white: '#FFFFFF',
      $lightblue: '#E7F5FB',
      $greyblue: '#F8FAFF',
      $black: '#3F3F3F',
      $blue: '#76C3DB',
      $red: '#E97C4C',
      $yellow: '#F5B76B',
      $green: '#73B1A8',
      $grey: '#C0C0C0'
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
        '.font-$t1': {
          fontFamily: theme('fontFamily.noto'),
          fontWeight: 'bold',
          fontSize: theme('fontSize.4xl')
        },
        '.font-$t2': {
          fontFamily: theme('fontFamily.noto'),
          fontWeight: 'bold',
          fontSize: theme('fontSize.5xl')
        }
      }

      addUtilities(newUtilities)
    })
  ]
}
