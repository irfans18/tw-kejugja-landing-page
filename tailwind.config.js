module.exports = {
   mode: "jit",
   content: ["./src/**/*.{html,js}","./*.{html,js}"],
   theme: {
      extend: {
         backgroundImage: {
            "hero-pattern": "url('/src/assets/hero.jpg')",
            "cheese-story-pattern": "url('/src/assets/bg-cheese-story.png')",
            "logo-section-pattern": "url('/src/assets/bg-logo-section.png')",
            // "footer-texture": "url('/img/footer-texture.png')",
         },
         colors: {
            blue: "#1fb6ff",
            pink: "#ff49db",
            "orange-rkj": "#F48F2D",
            "yellow-rkj": "#FFF193",
            "cream-rkj": "#FEF5E6",
            green: "#13ce66",
            "gray-dark": "#273444",
            gray: "#8492a6",
            "gray-light": "#d3dce6",
         },
      },
      variants: {
         extend: {
            fontSize: ["hover", "focus"],
            backgroundOpacity: ["active"],
            borderWidth: ["hover", "focus"],
            textColor: [
               "responsive",
               "dark",
               "group-hover",
               "focus-within",
               "hover",
               "focus",
            ],
            textDecoration: ['hover'],
         },
      },
   },
   plugins: [],
};
