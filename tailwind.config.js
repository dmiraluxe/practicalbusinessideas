/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. EXTRA CONTRAST COLORS
      colors: {
        gold: {
          300: "#FCF6BA", // Brighter Highlight
          400: "#F6E05E",
          500: "#D4AF37", 
          600: "#AA771B", // Deep Bronze
        },
        luxury: {
          pure: "#000000", // Max Contrast for Mobile
          black: "#050505", 
          charcoal: "#121212",
          glass: "rgba(255, 255, 255, 0.05)",
        }
      },
      // 2. TIGHT LETTER SPACING (For that "High-End" look)
      letterSpacing: {
        tightest: '-.075em',
        empire: '0.5em', // For subtitles
      },
      // 3. ENHANCED ANIMATIONS
      animation: {
        'glow-slow': 'glow 8s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: 0.3, filter: 'blur(5px)' },
          '100%': { opacity: 0.8, filter: 'blur(15px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.05)' },
        }
      },
      // 4. CUSTOM SCREENS FOR MOBILE OVERFLOW FIX
      screens: {
        'xs': '375px', // For small iPhones/Androids
      }
    },
  },
  plugins: [],
};
