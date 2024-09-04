// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Source Sans 3"', "sans-serif"],
        body: ["Lora", "serif"],
        title: ['"Pacifico"', "cursive"]
      },
      fontWeight: {
        bold: 700,
        normal: 400
      }
    }
  },
  plugins: []
}
