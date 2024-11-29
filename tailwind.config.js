/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle, rgba(3,20,40,1) 4%, rgba(0,17,32,1) 53%, rgba(0,28,60,1) 87%)",
        "custom-linear-gradient-for-hero-image":
          "linear-gradient(90deg, rgba(2,4,11,1) 15%, rgba(3,19,36,1) 51%, rgba(2,4,11,1) 82%)",
        "custom-linear-gradient-light-Eco-system":
          "linear-gradient(135deg, rgba(255,255,255,1) 35%, rgba(237,247,255,1) 51%)",
        "custom-linear-gradient-ecosystem-label":
          "linear-gradient(90deg, rgba(164,184,255,1) 11%, rgba(206,217,255,1) 27%, rgba(239,234,255,1) 42%)",
        "custom-gradient-for-product-bg":
          "linear-gradient(135deg, rgba(171, 194, 208, 1) 36%, rgba(255, 255, 255, 1) 61%)",
        "custom-gradient-for-productType-bg":
          "linear-gradient(180deg, rgba(255,255,255,1) 34%, rgba(230,246,255,1) 57%)",
        "custom-gradient-for-ani-button":
          "radial-gradient(circle, rgba(206,226,236,1) 31%, rgba(190,217,240,1) 36%)",
      },
    },
  },
  plugins: [],
};
