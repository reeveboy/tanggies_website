module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      tile_gray: "#282724",
      off_white: "#F2F2F2",
      night_blue: "#2C3863",
      sand: "#F6ECCC",
      cyan: "#2BB3C3",
      new_yellow: "#FFC32A",
      nice_pink: "#F18AA5",
    }),

    textColor: (theme) => ({
      ...theme("colors"),
      sand_stone: "#D6C7B8",
      wood: "#4E4242",
      lighter_black: "#202020",
      bluish_white: "#E4EAFF",
      brownish_black: "#302B1D",
      brown: "#786A6A",
      cyan: "#2BB3C3",
    }),

    fontSize: (theme) => ({
      ...theme("sizes"),
      tiny: ".6rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
