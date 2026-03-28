/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        venix: {
          light: '#3b82f6',
          DEFAULT: '#1d4ed8',
          dark: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
};

export default config;