const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      $accent1: '#5CC4DE',
      $accent2: '#F9753D',
      $accent3: '#FFD235',
      $accent4: '#5EB3A8',
      $white: '#FFFFFF',
      $primary: '#3F3F3F',
      $primary2: '#979797',
      $indigo: '#749CC2',
      $tint: '#F9FDFF',
      $shade1: '#BBBBBB',
      $shade2: '#F2F2F2',
      $shade3: '#FAFAFA',
      $twitterBlue: '#1DA1F1'
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
      },
      backgroundOpacity: {
        10: '0.1'
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
      newUtilities['.w-$fit-content'] = {
        width: 'fit-content'
      }
      newUtilities['.w-$max-content'] = {
        width: 'max-content'
      }
      newUtilities['.shadow-$rich'] = {
        boxShadow:
          '0px 12px 19px rgba(44, 39, 56, 0.02), 0px 24px 43px rgba(0, 67, 101, 0.04)'
      }
      addUtilities(newUtilities)
    })
  ]
}
