/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray_50": "#f0f3f9",
        "gray_55": "#eaeef4",
        "gray_100": "#dce2e8",
        "gray_400": "#82879b",
        "gray_300": "#a0a9b9",
        "gray_500": "#6a7583",
        "gray_700": "#5c5d5f",
        "gray_900": "#222",
        "blue_50": "#e9f3ff",
        "blue_55": "#deeeff",
        "blue_100": "#c2e0ff",
        "blue_200": "#B6CCEB",
        "blue_300": "rgb(145, 195, 255)",
        "blue_400": "rgb(101, 136, 255)",
        "blue_700": "#0067ff",
        "blue_900": "#0043a7",
        "black_100": "rgb(21, 25, 42)",
        "green_100": "rgb(111, 207, 117)"
      },

      screens: {
        'xmd': "832px",
        'xxs': "380px",
      }
    },
  },
  plugins: [],
};
