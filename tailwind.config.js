/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vertex: {
          black: '#050505',
          coal: '#0d0d0d',
          gold: '#C9A84C',
          'gold-light': '#E8CE7E',
          amber: '#8A6D2F',
          ink: '#F4F4F5',
          mute: '#B0B0B0',
        },
      },
      fontFamily: {
        display: ['"Roboto Flex"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'shine': 'shine 3s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'pulse-green': 'pulse-green 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.8s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 18px rgba(201, 168, 76, 0.3), 0 0 40px rgba(201, 168, 76, 0.12)' },
          '50%': { boxShadow: '0 0 30px rgba(201, 168, 76, 0.55), 0 0 65px rgba(201, 168, 76, 0.25)' },
        },
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.45), 0 0 22px rgba(37, 211, 102, 0.35)' },
          '50%': { boxShadow: '0 0 0 12px rgba(37, 211, 102, 0), 0 0 38px rgba(37, 211, 102, 0.55)' },
        },
      },
      backgroundImage: {
        'gold-shine': 'linear-gradient(90deg, transparent, #C9A84C 20%, #FFE08A 40%, #C9A84C 60%, transparent 80%)',
        'gold-sheen': 'linear-gradient(135deg, #E8CE7E 0%, #C9A84C 45%, #8A6D2F 100%)',
      },
    },
  },
  plugins: [],
}
