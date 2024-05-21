/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
    content: [
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{html,js,ts,tsx,jsx}"
    ],
  theme: {
      extend: {
          backgroundImage: {
              'minecraft-dirt': "url('/public/images/minecraft-dirt.png')"
          }
      },
    },
    darkMode: "class",
  plugins: [nextui()],
}

