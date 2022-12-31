module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.mdx"
  ],
  presets: [
    require('decanter')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
