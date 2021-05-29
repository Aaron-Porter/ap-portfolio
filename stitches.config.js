import { createCss } from "@stitches/react";

export const { styled, getCssString, global } = createCss({
  theme: {
    fonts: {
      system: "system-ui",
      suisse: "Suisse",
      suisseMono: "Suisse Mono",
    },
    colors: {
      gray000: "#FFFFFF",
      gray100: "#e9e9e9",
      gray200: "#d9d9d9",
      gray300: "#c4c4c4",
      gray400: "#9d9d9d",
      gray500: "#7b7b7b",
      gray600: "#555555",
      gray700: "#434343",
      gray800: "#262626",
      gray900: "#101010",
      gray1000: "#000000",
      accent: "#F66141",
    },
    space: {
      space000: "4px",
      space100: "8px",
      space200: "12px",
      space300: "16px",
      space400: "24px",
      space500: "32px",
      space600: "64px",
      space700: "128px",
      space800: "256px",
    },
    transitions: {
      default: "all 0.2s ease",
    },
  },
  media: {
    small: "(min-width: 640px)",
    medium: "(min-width: 768px)",
    lessThanLarge: "(max-width: 1024px)", // all devices below 'desktop'
    large: "(min-width: 1024px)",
    xLarge: "(min-width: 1200px)",
    xXLarge: "(min-width: 1536px)",
  },
});

export const globalStyles = global({
  "@font-face": [
    {
      fontFamily: "Suisse",
      src: `url("/fonts/Suisse/SuisseIntl-Regular-WebS.woff2") format("woff2"),
            url("/fonts/Suisse/SuisseIntl-Regular-WebS.woff") format("woff"),
            url("/fonts/Suisse/SuisseIntl-Regular-WebS.ttf")  format("truetype")`,
      fontStyle: "normal",
      fontWeight: 400,
    },
    {
      fontFamily: "Suisse Mono",
      src: `url("/fonts/SuisseMono/SuisseIntlMono-Regular-WebS.woff2") format("woff2"),
            url("/fonts/SuisseMono/SuisseIntlMono-Regular-WebS.woff") format("woff"),
            url("/fonts/SuisseMono/SuisseIntlMono-Regular-WebS.ttf")  format("truetype")`,
      fontStyle: "normal",
      fontWeight: 400,
    },
  ],
  html: {
    "scroll-behavior": "smooth",
  },
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "$gray1000",
    fontFamily: "Suisse",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
});
