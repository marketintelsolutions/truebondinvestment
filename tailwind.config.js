/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: '#f48534'
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
      }
    },
  },
  plugins: [],
}

