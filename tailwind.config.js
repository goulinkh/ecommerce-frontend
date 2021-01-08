module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        "Poppins",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        "accent-1": "#333",
        "gray-50": "#EDF0F3",
        "blue-400": "#49A9E6",
        "gray-800": "#333333",
      },
      width: {
        0.5: ".125rem",
        fit: "fit-content",
        148: "48rem",
      },
      height: {
        0.5: ".125rem",
        fit: "fit-content",
      },
    },
  },
  variants: {
    extend: { borderWidth: ["last"] },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
