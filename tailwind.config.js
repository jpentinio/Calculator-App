/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeOneMainBg: "hsl(222, 26%, 31%)",
        themeTwoMainBg: "hsl(0, 0%, 90%)",
        themeThreeMainBg: "hsl(268, 75%, 9%)",
        themeOneScreen: "hsl(224, 36%, 15%)",
      },
      boxShadow: {
        button: "0 4px hsl(28, 16%, 65%)",
      },
    },
  },
  plugins: [],
};
