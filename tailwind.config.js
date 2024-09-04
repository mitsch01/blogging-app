module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
