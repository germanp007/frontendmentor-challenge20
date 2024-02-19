/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradientOne:
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        gradientTwo:
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%),100%)",
        DesaturatedRed: "hsl(0, 36%, 70%)",
        SoftRed: "hsl(0, 93%, 68%)",
        DarkGrayishRed: "hsl(0, 6%, 24%)",
      },
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
