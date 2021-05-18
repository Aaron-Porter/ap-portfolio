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
  body: {
    margin: 0,
    padding: 0,
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
});
