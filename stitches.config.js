import { createCss } from "@stitches/react";

export const { styled, getCssString, global } = createCss({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
      3: "17px",
    },
  },
});

export const globalStyles = global({
  "@font-face": [
    {
      fontFamily: "Suisse",
      src: `url("fonts/Suisse/SuisseIntl-Regular-WebS.woff2") format("woff2"),
            url("fonts/Suisse/SuisseIntl-Regular-WebS.woff") format("woff"),
            url("fonts/Suisse/SuisseIntl-Regular-WebS.ttf")  format("truetype")`,
      fontStyle: "normal",
      fontWeight: 400,
    },
  ],
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "Suisse",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
});
