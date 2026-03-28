/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Luxury Palette
        gold: {
          400: "#F6E05E",
          500: "#D4AF37", // Classic Metallic Gold
          600: "#B8860B",
        },
        luxury: {
          black: "#050505", // Deeper than standard black
          charcoal: "#121212",
        }
      },
      animation: {
        'glow-slow': 'glow 8s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: 0.3 },
          '100%': { opacity: 0.7 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
