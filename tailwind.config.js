/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', "cursive"],
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-pink-100",
    "border-pink-100",
    "checked:bg-pink-600",
    "checked:border-pink-600",
    "bg-purple-100",
    "border-purple-100",
    "checked:bg-purple-600",
    "checked:border-purple-600",
    "bg-yellow-100",
    "border-yellow-100",
    "checked:bg-yellow-600",
    "checked:border-yellow-600",

    {
      pattern: /(bg|border)-(red|pink|blue)-(100|600)/,
      variants: ["checked"],
    },
    {
      pattern: /text-(red|pink|blue)-(100|600)/,
    },
  ],
};
