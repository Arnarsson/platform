import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#b9d7ff",
          300: "#8ebdff",
          400: "#5a99ff",
          500: "#2f74ff",
          600: "#1b58e6",
          700: "#1746b4",
          800: "#153d92",
          900: "#143574"
        }
      }
    }
  },
  plugins: []
};

export default config;

