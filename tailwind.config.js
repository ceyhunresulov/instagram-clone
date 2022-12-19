/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-pattern": "url('/src/images/instagram.png')",
        "inst-pattern":
          "url('https://static.cdninstagram.com/rsrc.php/v3/yr/r/NL0hPV-L09m.png')",
      },
      colors: {
        "light-gray": "rgb(142, 142, 142)",
        "login-btn": "rgb(0, 149, 246)",
        "light-blue": "rgba(0, 149, 246,0.3)",
        "dark-blue": "rgb(0,55,107)",
      },
    },
  },
  plugins: [],
};
