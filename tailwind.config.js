/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "morado-azulado": "rgba(65,72,220,255)",
        "morado-azulado-oscuro": "rgba(50, 60, 180, 255)",
        "morado-azulado-claro": "rgba(65, 72, 220, 0.1)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        // Agrega tus valores personalizados aquí
        "2xl": "1536px", // Por ejemplo, para pantallas extra grandes
      },
    },
  },
  plugins: [],
};
