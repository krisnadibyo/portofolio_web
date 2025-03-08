import { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#0EA5E9", // Blue color
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#333333",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        textDark: "#1E293B", // Darker text for better contrast
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        // Smooth flowing gradients that transition between sections
        "hero-gradient":
          "linear-gradient(to bottom, #DFFAFC, #C7F5F7, #B0F1F3, #A0EDF0)",
        "services-gradient":
          "linear-gradient(to bottom, #A0EDF0, #B8E6F1, #D0E0F2, #E8F1F9)",
        "projects-gradient":
          "linear-gradient(to bottom, #E8F1F9, #F0F4F8, #F8F7F4, #FFF7ED)",
        "experience-gradient":
          "linear-gradient(to bottom, #FFF7ED, #FFEDD5, #FED7AA, #DBEAFE)",
        "contact-gradient":
          "linear-gradient(to bottom, #DBEAFE, #BFDBFE, #93C5FD, #FFFFFF)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
