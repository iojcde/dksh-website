import { createPlugin } from "windy-radix-palette";
const colors = createPlugin({
  opacitySupport: true,
});
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
          25: "hsl(var(--dksh-25))",
          50: "hsl(var(--dksh-50))",
          100: "hsl(var(--dksh-100))",
          200: "hsl(var(--dksh-200))",
          300: "hsl(var(--dksh-300))",
          400: "hsl(var(--dksh-400))",
          500: "hsl(var(--dksh-500))",
          600: "hsl(var(--dksh-600))",
          700: "hsl(var(--dksh-700))",
          800: "hsl(var(--dksh-800))",
          900: "hsl(var(--dksh-900))",
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
          // DEFAULT: `${alias("gray", 3)}/80`,
          DEFAULT: "rgb(var(--gray3) / 0.8)",
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
