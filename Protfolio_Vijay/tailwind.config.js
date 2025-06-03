/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['"Orbitron"', 'sans-serif'],
        firacode: ['"Fira Code"', 'monospace'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
    animation: {
      'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
      'glow-blur': 'glowBlur 2s infinite ease-in-out',
    },
    keyframes: {
      pulseGlow: {
        '0%, 100%': { boxShadow: '0 0 15px #0ff' },
        '50%': { boxShadow: '0 0 35px #0ff' },
      },
      glowBlur: {
        '0%, 100%': { opacity: 0.4 },
        '50%': { opacity: 1 },
      },
    },
},
  },
  plugins: [],
}

