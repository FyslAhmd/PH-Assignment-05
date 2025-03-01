import { createRequire } from 'module';

const require = createRequire(import.meta.url);

 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
