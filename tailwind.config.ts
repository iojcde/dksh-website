import { createPlugin } from "windy-radix-palette";
const colors = createPlugin();
const alias = colors.alias;

const config = {
  darkMode: "class",
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xl: "1280px",
        "2xl": "1000px",
      },
    },
    extend: {
      colors: () => ({
        dksh: {
          50: "hsl(208, 95%, 70%)",
          100: "hsl(208, 95%, 60%)",
          200: "hsl(208, 95%, 50%)",
          300: "hsl(208, 95%, 45%)",
          400: "hsl(208, 95%, 40%)",
          500: "hsl(208, 95%, 30%)",
          600: "hsl(208, 95%, 25%)",
          700: "hsl(208, 95%, 20%)",
          800: "hsl(208, 95%, 15%)",
          900: "hsl(208, 95%, 10%)",
        },
        border: alias("gray", 5),
        input: alias("gray", 6),
        ring: alias("gray", 7),
        background: alias("gray", 1),
        foreground: alias("gray", 12),
        primary: {
          DEFAULT: alias("gray", 12),
          foreground: alias("gray", 1),
        },
        secondary: {
          DEFAULT: alias("gray", 6),
          foreground: alias("gray", 12),
        },
        destructive: {
          DEFAULT: alias("red", 6),
          foreground: alias("red", 11),
        },
        muted: {
          DEFAULT: alias("gray", 3),
          foreground: alias("gray", 11),
        },
        accent: {
          DEFAULT: `${alias("gray", 3)}/20`,
          foreground: alias("gray", 12),
        },
        popover: {
          DEFAULT: alias("gray", 1),
          foreground: alias("gray", 12),
        },
        card: {
          DEFAULT: alias("gray", 1),
          foreground: alias("gray", 12),
        },
      }),
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-ptd)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    colors.plugin,
    require("@tailwindcss/typography"),
  ],
};

export default config;
