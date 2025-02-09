/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Adjust paths as needed
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Add the daisyUI plugin here
  daisyui: {
    themes: [
      // "light",
        // "dark",
        // "cupcake",
        // "bumblebee",
        "emerald",
        // "corporate",
        // "synthwave",
        // "retro",
        // "cyberpunk",
        // "valentine",
        //  "halloween",
        // "garden",
        // "forest",
        // "aqua",
        // "lofi",
        // "pastel",
        // "fantasy",
        // "wireframe",
        // "black",
        // "luxury",
        // "dracula",
        // "cmyk",
        // "autumn",
        // "business",
        //  "acid",
        // "lemonade",
        // "night",
        // "coffee",
        // "winter",
        // "dim",
        // "nord",
        // "sunset",
    ],
  },
};
