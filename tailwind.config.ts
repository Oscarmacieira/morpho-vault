import type { Config } from "tailwindcss";

import tailwindcssTypography from "@tailwindcss/typography";
import tailwindcssAnimate from "tailwindcss-animate";

const tailwindConfig: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /// COLORS
        "color-mint-breeze": "hsl(var(--color-mint-breeze-100))",
        "color-aqua-splash": "hsl(var(--color-aqua-splash-100))",
        "color-ocean-blue": "hsl(var(--color-ocean-blue-100))",
        "color-twilight-purple": "hsl(var(--color-twilight-purple-100))",

        /// BACKGROUNDS
        "background-base": "hsl(var(--background-base))",
        "background-secondary": "hsl(var(--background-secondary))",
        "background-block": "hsl(var(--background-block))",
        "background-primary": "hsl(var(--background-primary))",

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
        "constant-color-valid": "hsl(var(--constant-color-valid))",
        "constant-color-active": "hsl(var(--constant-color-active))",

        /// ICONS
        "icon-interactive-error": "hsl(var(--icon-interactive-error))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: ({ theme }) => ({
        /// EARTH
        "constant-gradient-earth-100":
          "linear-gradient(to bottom left, hsl(var(--color-mint-breeze-100)), hsl(var(--color-aqua-splash-100)), hsl(var(--color-ocean-blue-100)), hsl(var(--color-twilight-purple-100)))",
        "constant-gradient-earth-90":
          "linear-gradient(to bottom left, hsl(var(--color-mint-breeze-90)), hsl(var(--color-aqua-splash-90)), hsl(var(--color-ocean-blue-90)), hsl(var(--color-twilight-purple-90)))",
        "constant-gradient-earth-80":
          "linear-gradient(to bottom left, hsl(var(--color-mint-breeze-80)), hsl(var(--color-aqua-splash-80)), hsl(var(--color-ocean-blue-80)), hsl(var(--color-twilight-purple-80)))",
        "constant-gradient-earth-30":
          "linear-gradient(to bottom left, hsl(var(--color-mint-breeze-30)), hsl(var(--color-aqua-splash-30)), hsl(var(--color-ocean-blue-30)), hsl(var(--color-twilight-purple-30)))",

        /// ACCOUNT
        "constant-gradient-account": `linear-gradient(180deg, hsl(var(--color-soft-sky-blue)) 0%, hsl(var(--color-deep-azure-blue)) 100%)`,
      }),
      fontSize: {
        buttonSmall: ["11px", { lineHeight: "16px", fontWeight: "500" }],
        link: ["13px", { lineHeight: "20px", fontWeight: "400" }],
        body: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        header: ["20px", { lineHeight: "24px", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "16px", fontWeight: "500" }],
        secondary: ["13px", { lineHeight: "16px", fontWeight: "400" }],
      },
      boxShadow: {
        card: "0px 3px 12px 0px hsla(0, 0%, 0%, 0.09)",
      },
      backdropBlur: {
        header: "100px",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography()],
};
export default tailwindConfig;
