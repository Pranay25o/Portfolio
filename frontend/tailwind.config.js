/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        uzumaki: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        kurama: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#4c0519',
        },
        rasengan: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        sage: {
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        },
        obsidian: {
          900: '#0a0604',
          950: '#050302',
          DEFAULT: '#000000',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Cinzel', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'kurama': '0 0 30px -5px rgba(0, 0, 0, 1), 0 0 20px rgba(249, 115, 22, 0.65)',
        'kurama-lg': '0 0 50px -5px rgba(0, 0, 0, 1), 0 0 30px rgba(234, 88, 12, 0.8)',
        'rasengan-glow': '0 0 25px rgba(14, 165, 233, 0.6), inset 0 0 15px rgba(56, 189, 248, 0.4)',
        'sage-edge': 'inset 0 1px 0 0 rgba(249, 115, 22, 0.5), 0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'chakra-drift': 'drift 8s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(20px) rotate(15deg)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}
