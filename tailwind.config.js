/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        negro: "#000814",
        gris: "#001D3D",
        azul: "#003566",
        naranjo: "#FFC300",
        amarillo: "#FFD60A",

        primary: {
          50: "#eef6ff",
          100: "#dcecff",
          200: "#b2daff",
          300: "#6dbcff",
          400: "#2099ff",
          500: "#007cff",
          600: "#005fdf",
          700: "#004bb4",
          800: "#002a61",
          900: "#001f47",
          950: "#000814",
        },
        midnight: {
          50: "#e9faff",
          100: "#cef4ff",
          200: "#a7eeff",
          300: "#6be7ff",
          400: "#26d4ff",
          500: "#00b0ff",
          600: "#0086ff",
          700: "#006bff",
          800: "#005ce6",
          900: "#0052b3",
          950: "#001d3d",
        },
        "midnight-blue": {
          50: "#eef7ff",
          100: "#dcefff",
          200: "#b2e0ff",
          300: "#6dc8ff",
          400: "#20adff",
          500: "#0092ff",
          600: "#0073df",
          700: "#005bb4",
          800: "#004d94",
          900: "#003566",
          950: "#002851",
        },

        "lightning-yellow": {
          50: "#ffffea",
          100: "#fffcc5",
          200: "#fffa85",
          300: "#fff046",
          400: "#ffe21b",
          500: "#ffc300",
          600: "#e29700",
          700: "#bb6b02",
          800: "#985308",
          900: "#7c430b",
          950: "#482300",
        },
        gold: {
          50: "#fefde8",
          100: "#fffcc2",
          200: "#fff687",
          300: "#ffe943",
          400: "#ffd60a",
          500: "#efbe03",
          600: "#ce9300",
          700: "#a46804",
          800: "#88510b",
          900: "#734210",
          950: "#432205",
        },
      },
      fontFamily: {
        libre: [ 'Sulphur Point', "sans-serif"]
      },
      animation: {
        "fade-in": "fade-in 1s ",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
