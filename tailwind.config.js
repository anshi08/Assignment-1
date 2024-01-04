/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#444957",
        primary: "#0e2368",
        white: "#fff",
        lightsteelblue: "rgba(147, 162, 211, 0.38)",
        gainsboro: "rgba(217, 217, 217, 0)",
        darkslategray: "#424961",
        darkgray: "#afafaf",
        crimson: "#e23744",
        b9c: "#828b9c",
        dimgray: "#646874",
        whitesmoke: "#f8f8f8",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        poppins: "Poppins",
        "source-sans-pro": "'Source Sans Pro'",
        roboto: "Roboto",
      },
      borderRadius: {
        "2xl": "21px",
        "xl-9": "20.9px",
        "8xs": "5px",
      },
    },
    fontSize: {
      mini: "15px",
      "2xl": "21px",
      "37xl": "56px",
      "3xl": "22px",
      "mini-7": "14.7px",
      "lg-8": "18.8px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
