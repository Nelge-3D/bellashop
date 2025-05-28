import { type Config } from "tailwindcss";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 🌙 Utilisation du mode sombre par className (.dark)
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1200px',
      },
    },
    extend: {
      colors: {
        // 🎨 Couleurs personnalisées (liées à CSS variables)
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        'primary-foreground': "var(--primary-foreground)",
        secondary: "var(--secondary)",
        'secondary-foreground': "var(--secondary-foreground)",
        muted: "var(--muted)",
        'muted-foreground': "var(--muted-foreground)",
        accent: "var(--accent)",
        'accent-foreground': "var(--accent-foreground)",
        destructive: "var(--destructive)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        card: "var(--card)",
        'card-foreground': "var(--card-foreground)",
        popover: "var(--popover)",
        'popover-foreground': "var(--popover-foreground)",
        sidebar: "var(--sidebar)",
        'sidebar-foreground': "var(--sidebar-foreground)",
        'sidebar-primary': "var(--sidebar-primary)",
        'sidebar-primary-foreground': "var(--sidebar-primary-foreground)",
        'sidebar-accent': "var(--sidebar-accent)",
        'sidebar-accent-foreground': "var(--sidebar-accent-foreground)",
        'sidebar-border': "var(--sidebar-border)",
        'sidebar-ring': "var(--sidebar-ring)",
        brand: {
          red: "#ff0000",
          redDark: "#cc0000",
        },
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      transitionTimingFunction: {
        'default': 'ease-in-out',
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require("tailwindcss-animate"), // si tu utilises des animations
  ],
};
