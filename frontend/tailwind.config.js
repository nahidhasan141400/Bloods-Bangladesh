/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c90202",
        secondary: "#850000",
        accent: "#fb7185",
        neutral: "#fce7f3",
        "base-100": "#f3f4f6",
        info: "#0000ff",
        success: "#00ff00",
        warning: "#fde047",
        error: "#ff0000",
      },
    },
  },
  plugins: [],
};
