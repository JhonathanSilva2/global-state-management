import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'sm': '600px',   // Pequeno: 480px
        'md': '768px',   // Médio: 768px
        'lg': '1024px',  // Grande: 1024px
        'xl': '1280px',  // Extra grande: 1280px
        '2xl': '1536px', // 2x extra grande: 1536px
      },
    },
  },
  plugins: [],
};
export default config;
