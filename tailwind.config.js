/* eslint-env node */
/* eslint @typescript-eslint/no-var-requires: "off" */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html",
    "./src/**/*.{html,js,ts,tsx}",
    "node_modules/@skzm/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
