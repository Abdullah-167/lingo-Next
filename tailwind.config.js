/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    screens: {
      'small': '497px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:
      {
        primary: '#AC35E1',
        secondary: '#8424E1',
        tertiary: '#6FE1D8',
        dark: '#333333',
        grey: '#666666',
      }

    },
  },
  plugins: [],
}

