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
          dark: '#4b5ac1',
        },
        danger:{
          DEFAULT: '#ff7782',
          dark: '#d65c66',
        },
        success:{
          DEFAULT: '#41f1b6',
          dark: '#2ca380',
        },
        warning:{
          DEFAULT: '#ffbb55',
          dark: '#d98a30',
        },
        info:{
          DEFAULT: '#dce1eb',
          dark: '#7d8da1',
        },
        background:{
          DEFAULT: '#f6f6f9',
          dark: '#181a1e',
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
        },
        stats: {
          pastel_pink:'#FFB3BA',
          light_peach:'#FFDFBA',
          soft_yellow:'#FFFFBA',
          mint_green:'#BAFFC9',
          pastel_blue:'#BAE1FF',
          light_lavender:'#E6E6FA',
          baby_pink:'#FADADD',
          soft_lilac:'#D5AAFF',
          pastel_green:'#C8E6C9',
          light_mauve:'#F5E1FD',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
