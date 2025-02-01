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
          DEFAULT: '#7380ec',
          dart: '#4b5ac1',
        },
        danger:{
          DEFAULT: '#ff7782',
          dart: '#d65c66',
        },
        success:{
          DEFAULT: '#41f1b6',
          dart: '#2ca380',
        },
        warning:{
          DEFAULT: '#ffbb55',
          dart: '#d98a30',
        },
        info:{
          DEFAULT: '#dce1eb',
          dart: '#7d8da1',
        },
        background:{
          DEFAULT: '#f6f6f9',
          dart: '#181a1e',
        },
        content:{
          DEFAULT: '#363949',
          dark: '#edeffd',
        },
        variant:{
          DEFAULT: '#677483',
          dark: '#a3bdcc'
        },
        shadow: {
          DEFAULT: 'rgba(132, 139, 200, 0.18)',
          dark: 'rgba(0, 0, 0, 0.4)',

        }
      },
    },
  },
  plugins: [],
} satisfies Config;
