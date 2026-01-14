/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      colors: {
        background: "rgb(var(--background)/<alpha-value>)",
        foreground: "rgb(var(--foreground)/<alpha-value>)",
        border: "rgb(var(--border)/<alpha-value>)",
        muted: "rgb(var(--muted)/<alpha-value>)",
        accent: "rgb(var(--accent)/<alpha-value>)"
      }
    }
  },
  plugins: []
};
