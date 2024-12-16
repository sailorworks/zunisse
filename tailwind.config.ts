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
        // Luxury Color Palette
        gold: {
          DEFAULT: "#D4AF37", // Champagne gold
          dark: "#8B7355", // Deeper gold tone
        },
        black: {
          DEFAULT: "#000000",
          soft: "#121212",
        },
        pearl: {
          DEFAULT: "#F0EAD6", // Soft pearl white
          light: "#F8F8FF",
        },
        rose: {
          DEFAULT: "#B76E79", // Soft rose gold
          light: "#FADADD", // Soft pink
        },
        emerald: {
          DEFAULT: "#50C878", // Emerald green
        },
        sapphire: {
          DEFAULT: "#0F52BA", // Deep sapphire blue
        },
      },
      fontFamily: {
        // Luxury Font Families
        heading: ["Playfair Display", "serif"],
        body: ["Montserrat", "sans-serif"],
        accent: ["Great Vibes", "cursive"],
      },
      backgroundImage: {
        "luxury-gradient":
          "linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.05))",
      },
      boxShadow: {
        luxury: "0 10px 30px rgba(212,175,55,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
