import type { Config } from "tailwindcss";

import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTypography from "@tailwindcss/typography";

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
        "constant-gradient-earth-100": `linear-gradient(223.53deg, hsl(var(--color-mint-breeze-100)) 3.65%, hsl(var(--color-aqua-splash-100)) 31.56%, hsl(var(--color-ocean-blue-100)) 65.16%, hsl(var(--color-twilight-purple-100)) 102.22%)`,
        "constant-gradient-earth-90": `linear-gradient(223.53deg, hsl(var(--color-mint-breeze-90)) 3.65%, hsl(var(--color-aqua-splash-90)) 31.56%, hsl(var(--color-ocean-blue-90)) 65.16%, hsl(var(--color-twilight-purple-90)) 102.22%)`,
        "constant-gradient-earth-80": `linear-gradient(223.53deg, hsl(var(--color-mint-breeze-80)) 3.65%, hsl(var(--color-aqua-splash-80)) 31.56%, hsl(var(--color-ocean-blue-80)) 65.16%, hsl(var(--color-twilight-purple-80)) 102.22%)`,
        "constant-gradient-earth-30": `linear-gradient(223.53deg, hsl(var(--color-mint-breeze-30)) 3.65%, hsl(var(--color-aqua-splash-30)) 31.56%, hsl(var(--color-ocean-blue-30)) 65.16%, hsl(var(--color-twilight-purple-30)) 102.22%)`,
      }),
      fontSize: {
        smallButton: ["11px", { lineHeight: "16px", fontWeight: "500" }],
        link: ["13px", { lineHeight: "20px", fontWeight: "400" }],
        body: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        header: ["20px", { lineHeight: "24px", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography()],
};
export default tailwindConfig;
