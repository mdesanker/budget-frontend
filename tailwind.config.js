module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: ["responsive", "hover", "focus", "focus-within"],
      borderWidth: {
        6: "6px",
      },
      zIndex: {
        "-1": "-1",
        1: "1",
      },
      transformOrigin: {
        0: "0%",
      },
      spacing: {
        "9/10": "90%",
      },
      width: {
        15: "60px",
        31: "122px",
      },
    },
  },
  plugins: [],
};
