
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        'paper-warm': '#F6F6F4',
        'paper-deep': '#ECECE9',
        ink: '#3A3A38',
        'ink-soft': '#66665F',
        'ink-faint': '#A0A09A',
        gold: '#A89572',
        celadon: '#8FA39A',
      },
      fontFamily: {
        song: ['Noto Serif SC', 'Songti SC', 'serif'],
        sanscn: ['Noto Sans SC', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
