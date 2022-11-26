/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./*.html"],
  theme: {
    // Custom Tailwind Breakpoints
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      // Theme Colors
      colors: {},
      // All Fonts
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
      },
    },
  },
  plugins: [],
};
