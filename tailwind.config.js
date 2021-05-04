const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      $accent1: '#76C3DB',
      $accent2: '#E97C4C',
      $accent3: '#F2C94C',
      $accent4: '#73B1A8',
      $primary: '#2C2738',
      $primary2: '#2C2738',
      $muted: '#7C9CBF',
      $shade: '#F2F2F2',
      $tint: '#FAFDFF'
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
        // '.text-$t1': {
        //   fontFamily: theme('fontFamily.noto'),
        //   fontWeight: 'bold',
        //   fontSize: theme('fontSize.4xl')
        // },
        // '.text-$t2': {
        //   fontFamily: theme('fontFamily.noto'),
        //   fontWeight: 'bold',
        //   fontSize: theme('fontSize.5xl')
        // }
      }
      const fontSystems = {
        types: [
          { prefix: '.text-$t', family: theme('fontFamily.noto') },
          { prefix: '.text-$TEXT', family: theme('fontFamily.josefin') }
        ],
        sizes: ['64', '36', '24', '20', '18', '16', '14'],
        weight: 'bold',
        letterSpacings: ['-2%', '3%', '3%', '3%', '3%', '0%', '-2%']
      }
      fontSystems.types.forEach((type) => {
        for (let i = 0; i < fontSystems.sizes.length; i++) {
          newUtilities[type.prefix + i.toString()] = {
            fontFamily: type.family,
            fontSize: fontSystems.sizes[i],
            fontWeight: fontSystems.weight,
            letterSpacing: fontSystems.letterSpacings[i]
          }
        }
      })
      addUtilities(newUtilities)
    })
  ]
}
