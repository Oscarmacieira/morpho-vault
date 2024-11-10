import type { Config } from "tailwindcss";

import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTypography from "@tailwindcss/typography";

const tailwindConfig: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /// BACKGROUNDS
        "background-base": "hsl(var(--background-base))",
        "background-secondary": "hsl(var(--background-secondary))",
        "background-block": "hsl(var(--background-block))",

        /// TEXTS
        "text-body": "hsl(var(--text-body))",
        "text-secondary": "hsl(var(--text-secondary))",
        "text-tertiary": "hsl(var(--text-tertiary))",
        "text-button-primary": "hsl(var(--text-button-primary))",
        "text-interactive-error": "hsl(var(--text-interactive-error))",
        "text-interactive-valid": "hsl(var(--text-interactive-valid))",

        /// BORDERS
        "border-primary": "hsl(var(--border-primary))",
        "border-inactive": "hsl(var(--border-inactive))",

        /// CONSTANTS
        "constant-gradient-earth": "hsl(var(--constant-gradient-earth))",
        "constant-color-valid": "hsl(var(--constant-color-valid))",

        /// ICONS
        "icon-interactive-error": "hsl(var(--icon-interactive-error))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography()],
};
export default tailwindConfig;
