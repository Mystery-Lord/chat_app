import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#280166'
      },
      fontFamily: {
        Heading: ["Patrick Hand SC", "cursive"]
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
};
export default config;
