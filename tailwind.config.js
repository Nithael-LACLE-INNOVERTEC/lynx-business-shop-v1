const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        boulangerieExpress: {
          primary: "#94b262",
          secondary: "#FF9119",
          primaryDark: "#6e8",
          secondaryDark: "#FF9119",
        },
      },
      backgroundColor: {
        'boulangerie-primary': 'red',
        'boulangerie-secondary': 'blue',
      },
      textColor: {
        'boulangerie-white': '#ffffff',
      },
      fontSize: {
        xxs: '0.6rem',
        xxxs: '0.5rem'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          backgroundColor: theme('colors.boulangerieExpress.primary'),
          color: theme('colors.white'),
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRadius: theme('borderRadius.lg'),
          '&:hover': {
            backgroundColor: theme('colors.boulangerieExpress.primaryDark'),
          },
        },
      });
    },
  ],
}

