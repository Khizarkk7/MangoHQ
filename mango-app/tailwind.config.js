/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // <-- necessary for Next.js App Router
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFA726',   // Mango orange
        secondary: '#4CAF50', // Leaf green
        accent: '#FFD700',    // Golden yellow
        dark: '#333333',      // Text color
        light: '#FFF8E1',     // Cream background
      },
    },
  },
  plugins: [
    
  ],
};

