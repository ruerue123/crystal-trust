
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        // Crystal Trust School real palette — blue & silver (from logo + uniform).
        // Primary blue
        royal: '#1F6FC4',
        // Deep navy for dark sections / headings
        navy: '#143C66',
        // Bright sky accent (links, highlights, hovers)
        sky: '#4FA3E3',
        // Silver / cool grey supporting tone
        silver: '#C7CDD4',
        // Light cool off-white background
        cloud: '#F4F7FB',
        charcoal: '#15202B',

        // --- Legacy tokens remapped to the new palette so every existing
        //     component re-themes without sweeping edits. ---
        forestGreen: '#143C66', // was deep green -> navy
        deepEmerald: '#1F6FC4', // was emerald   -> royal blue
        gold: '#4FA3E3', // was gold     -> sky accent
        ivory: '#F4F7FB', // was ivory    -> cool cloud
        stone: '#D8DEE6' // was warm stone -> cool silver-grey
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif']
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
};
