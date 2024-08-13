import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
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
    ],
  },

  theme: {
    extend: {
     
    },
  },
  plugins: [require("daisyui")],
};
export default config;
