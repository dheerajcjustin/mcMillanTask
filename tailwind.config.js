/** @type {import('tailwindcss').Config} */
export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
            extend: {
                  colors: {},
                  fontFamily: {
                        kalam: ["Kalam", "cursive"],
                  },
                  boxShadow: {
                        bottom: "0px 5px 0px 0px",
                  },
                  transitionProperty: {
                        width: "width",
                        height: "height",
                  },
            },
      },
      plugins: [],
};
