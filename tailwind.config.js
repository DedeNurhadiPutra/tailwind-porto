const plugin = require('tailwindcss/plugin')
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    extend: {
      colors: {
        ChineseBlack: '#151515',
        VampireBlack: '#0A0A0A',
        Goldenrod: '#FBFCD4',
        GoldenYellow: '#FFDD03',
        GoldenPoppy: '#FBC403',
        Secondary: '#06b6d4'
      },
      screens: {
        '2xl': '1320px',
        'xs': '320px',
      },
      boxShadow: {
        'fire': '0 0 50px #0f0, inset 0 0 50px #0f0',
        'fire2': '0 0 50px #fff, inset 0 0 50px #fff',
      },
      animation: {
        'animate-fire': 'animate 5s linear infinite'
      },
      keyframes: {
        animate: {
          '0%': {
            shadow: '0 0 50px #FFDD03, inset 0 0 50px #FFDD03'
          },
          '20%': {
            shadow: '0 0 50px #FFDD03, inset 0 0 50px #FFDD03'
          },
          '40%': {
            shadow: '0 0 50px #FFDD03, inset 0 0 50px #FFDD03'
          },
          '60%': {
            shadow: '0 0 80px #FBC403, inset 0 0 80px #FBC403'
          },
          '80%': {
            shadow: '0 0 80px #FBC403, inset 0 0 80px #FBC403'
          },
          '100%': {
            shadow: '0 0 80px #FBC403, inset 0 0 80px #FBC403'
          },
        }
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.box-reflect': {
          '-webkit-box-reflect': 'below 10px linear-gradient(transparent,transparent,#0002)',
        },
        '.filter': {
          '-webkit-filter': 'url(#wavy)',
        },
      })
    })
  ],
}
