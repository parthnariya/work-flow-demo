import type { Config } from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#312b8b",
      "primary-light": "#1a192b",
      white: "#fff",
      "primary-dark": "#333154",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
