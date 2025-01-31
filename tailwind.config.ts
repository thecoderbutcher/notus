import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT: '#111827',
          dark: '#1F2937',
        },
        secondary:{ 
          DEFAULT: '#cbdeff',
          dark: '#94b7f3'
        },
        accent:{
          DEFAULT: '#10B981',
          dark: '#059669'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
