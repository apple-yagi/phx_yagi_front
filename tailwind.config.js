module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "500px",
      md: "960px",
      lg: "1126px"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
