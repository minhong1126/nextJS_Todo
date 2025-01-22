import type { Config } from "tailwindcss";

// tailwind.config.ts
// tailwindCSS의 환경.
// 색 변수, 반응형을 위한 breakpoint, 박스 그림자가 선언되어 있습니다.

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainPurple: "#7c3aed",
        lightPurple: "#ede9fe",
        rose: "#f43f5e",
        lime: "#bef264",
        amber: "#92400E",

        gray: "#F9FAFB",
        black900: "#0f172a",
        black800: "#1e293b",
        black500: "#64748b",
        black400: "#94a3b8",
        black300: "#cbd5e1",
        black200: "#e2e8f0",
        black100: "#f1f5f9",
      },
      boxShadow: {
        btnLar: "3.65px 4px 0 0 black900",
        btnMed: "3.52px 4px 0 0 black900",
        btnSml: "1.22px 4px 0 0 black900",
        inputLar: "4.06px 3.5px 0 0 black900",
        inputMed: "2.07px 3.5px 0 0 black900",
        inputSml: "1.22px 3.5px 0 0 black900",
      },
    },
    screens: {
      sml: "375px",
      med: "744px",
      lar: "1200px",
    },
  },
  plugins: [],
} satisfies Config;
