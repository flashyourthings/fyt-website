import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // Back to media strategy
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#ff6b00',
          DEFAULT: '#ff5500',
          dark: '#ff4400',
        }
      },
    },
  },
  plugins: [],
};

export default config; 