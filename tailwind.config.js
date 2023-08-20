/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-montserrat)",
      },
      colors: {
        zelena: "#00934a",
        bezova: "#f1ede5",
        hneda: "#8e4a49",
        shadow: "rgba(0,0,0,0.6)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(180px, 1fr))",
      },
      margin: {
        image: "5.125rem",
      },
      backgroundImage: {
        plus: `url("data:image/svg+xml;utf8,<svg fill='rgb(0,147,74)' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 96 960 960' width='24'><path d='M450.001 845.999v-240h-240v-59.998h240v-240h59.998v240h240v59.998h-240v240h-59.998Z'/></svg>")`,
        close: `url("data:image/svg+xml;utf8,<svg fill='rgb(0,147,74)' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 96 960 960' width='24'><path d='M256 842.153 213.847 800l224-224-224-224L256 309.847l224 224 224-224L746.153 352l-224 224 224 224L704 842.153l-224-224-224 224Z'/></svg>")`,
        top: `url("data:image/svg+xml;utf8,<svg fill='rgb(245, 245, 245)' xmlns='http://www.w3.org/2000/svg' height='40' viewBox='0 -960 960 960' width='40'><path d='M242-424.434 186.434-480 480-773.566 773.566-480 718-424.434l-238-237-238 237Z'/></svg>")`,
      },
      backgroundPosition: {
        "99center": "99% center",
      },
    },
  },
  plugins: [],
};
