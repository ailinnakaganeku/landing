/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "5E0000",
        "primary-100": "#222d4f",
        "primary-300": "#FFA6E3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD58",
        "secondary-500": "#ded22e",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg,#FF616A 0%, #FFC837 100%",
        "mobile-home": "url('./assets/Home.jpeg')",
      }),
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
