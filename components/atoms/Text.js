import { styled } from "stitches.config";

const Text = styled("span", {
  // Reset
  display: "inline-block",
  margin: 0,
  color: "$gray000",
  lineHeight: "calc(1em + 4px)",
  position: "relative",

  // Font Sizes
  $$0: "14px",
  $$1: "18px",
  $$2: "20px",
  $$3: "20px",
  $$4: "32px",

  "@large": {
    $$0: "14px",
    $$1: "18px",
    $$2: "20px",
    $$3: "28px",
    $$4: "36px",
  },

  variants: {
    preset: {
      xLargeHeading: {
        fontWeight: 400,
        fontSize: "28px",
        lineHeight: "32px",
        paddingBottom: "$space300",
        paddingTop: "$space200",

        "@medium": {
          fontSize: "40px",
          lineHeight: "48px",
        },

        "@large": {
          fontSize: "52px",
          lineHeight: "60px",
          paddingBottom: "$space500",
          paddingTop: "$space300",
        },
      },
      largeHeading: {
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "28px",
        paddingBottom: "$space000",
        paddingTop: "$space000",

        "@large": {
          fontSize: "36px",
          lineHeight: "44px",
          paddingTop: "$space100",
        },
      },
      heading: {
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "24px",
        paddingTop: "$space100",
        paddingBottom: "$space100",

        "@large": {
          fontSize: "22px",
          lineHeight: "28px",
        },
      },
      subHeading: {
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "24px",
        letterSpacing: "0.01em",
        paddingBottom: "$space100",
        paddingTop: "$space000",

        "@large": {
          fontSize: "20px",
          lineHeight: "28px",
          paddingBottom: "$space100",
        },
      },
      body: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.015em",
        "@large": {
          fontSize: "18px",
          lineHeight: "24px",
          letterSpacing: "0.015em",
        },
      },
      bodySmall: {
        fontWeight: 400,
        fontSize: "$$0",
        lineHeight: "20px",
      },
      overline: {
        fontWeight: 400,
        fontSize: "12px",
        textTransform: "uppercase",
        fontFamily: "$suisseMono",
        letterSpacing: "0.075em",
        paddingBottom: "$space000",

        "@large": {
          fontSize: "14px",
          paddingBottom: "$space100",
        },
      },
    },
  },

  defaultVariants: {
    preset: "body",
  },
});

export default Text;
