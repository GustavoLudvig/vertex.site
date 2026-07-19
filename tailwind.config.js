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
          black: '#0a0a0a',
          gold: '#C9A84C',
          magenta: '#FF006E',
          'magenta-soft': '#FF3D8F',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 110, 0.35), 0 0 40px rgba(201, 168, 76, 0.15)' },
          '50%': { boxShadow: '0 0 35px rgba(255, 0, 110, 0.6), 0 0 70px rgba(201, 168, 76, 0.3)' },
        },
      },
      backgroundImage: {
        'gold-shine': 'linear-gradient(90deg, transparent, #C9A84C 20%, #FFE08A 40%, #C9A84C 60%, transparent 80%)',
        'magenta-gold': 'linear-gradient(135deg, #FF006E 0%, #C9A84C 100%)',
      },
    },
  },
  plugins: [],
}
