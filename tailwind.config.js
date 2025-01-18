/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: '#eb3323',
        primaryGray: 'rgb(102,102,102)'
      },
      screens: {
        zr: "0px",
        mb: "430px",
        sm: "640px",
        md: "768px",
        lg: "991px",
        xl: "1280px",
      },
      maxWidth: {
        max: '1300px'
      },
      fontFamily: {
        dmsans: "DM Sans"
      },
      keyframes: {
        pageTransition: {
          '0%': {
            width: '0%',
            right: '0',
          },
          '70%': {
            width: '70%',
            right: '0',
          },
          '100%': {
            width: '0%',
            right: '100%',
          }
        }
      },
      animation: {
        'pageTransition': 'pageTransition 1.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

