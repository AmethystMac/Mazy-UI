import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            "primary": "#0C0C0C",
            "secondary": "#5F5F5F",
            "ternary": "#181818",
            "accent": "#01A9A9",
        },
    },
  },
  plugins: [],
};
export default config;
