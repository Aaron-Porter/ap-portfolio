import { createCss } from "@stitches/react";

export const { styled, getCssString, global, theme } = createCss({
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
      space600: "40px",
      space700: "64px",
      space800: "96px",
      space800: "128px",
      space900: "192px",
    },
    transitions: {
      default: "all 0.3s ease-out",
    },
  },
  media: {
    small: "(min-width: 640px)",
    lessThanMedium: "(max-width: 768px)",
    medium: "(min-width: 768px)",
    lessThanLarge: "(max-width: 1024px)", // all devices below 'desktop'
    large: "(min-width: 1024px)",
    xLarge: "(min-width: 1200px)",
    xXLarge: "(min-width: 1536px)",
  },
  utils: {
    gapVertical: (config) => (value) => ({
      "& > * + *": {
        margin: `${value} 0 0 0`,
      },
    }),
    gapHorizontal: (config) => (value) => ({
      "& > * + *": {
        margin: `0 0 0 ${value}`,
      },
    }),
  },
});

export const lightTheme = theme("light-theme", {
  colors: {
    gray000: "#000000",
    gray100: "#101010",
    gray200: "#262626",
    gray300: "#434343",
    gray400: "#555555",
    gray500: "#7b7b7b",
    gray600: "#9d9d9d",
    gray700: "#c4c4c4",
    gray800: "#d9d9d9",
    gray900: "#e9e9e9",
    gray1000: "#FFFFFF",
    accent: "#F66141",
  },
  space: {},
  fonts: {},
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
    overflow: "auto",
    backgroundColor: "$gray1000",
    fontFamily: "Suisse",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
});
