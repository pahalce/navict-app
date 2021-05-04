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
      $primary: '#3F3F3F',
      $primary2: '#979797',
      $indigo: '#7C9CBF',
      $tint: '#FAFDFF',
      $shade1: '#C0C0C0',
      $shade2: '#F2F2F2',
      $shade3: '#FAFAFA',
      $twitterBlue: '#1DA1F1',
      $white: '#FFFFFF'
    },
    fontFamily: {
      noto: 'Noto Sans JP',
      josefin: 'Josefin Sans',
      roboto: 'Roboto',
      body: ['Noto Sans JP', 'Josefin Sans', 'Roboto', 'sans-serif']
    },
    extend: {
      fontSize: {
        '3.5xl': '2rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {}
      const fontSystems = {
        types: [
          { prefix: '.text-$t', family: theme('fontFamily.noto') },
          { prefix: '.text-$T', family: theme('fontFamily.josefin') }
        ],
        sizes: ['64px', '36px', '24px', '20px', '18px', '16px', '14px'],
        weights: ['700', '700', '700', '700', '500', '400', '400'],
        letterSpacings: ['-2%', '3%', '3%', '3%', '3%', '0%', '-2%']
      }
      fontSystems.types.forEach((type) => {
        for (let i = 0; i < fontSystems.sizes.length; i++) {
          newUtilities[type.prefix + i.toString()] = {
            fontFamily: type.family,
            fontSize: fontSystems.sizes[i],
            fontWeight: fontSystems.weights[i],
            letterSpacing: fontSystems.letterSpacings[i]
          }
        }
      })
      addUtilities(newUtilities)
    })
  ]
}
