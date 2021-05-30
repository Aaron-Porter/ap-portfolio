import { styled } from "stitches.config";

const Text = styled("span", {
  // Reset
  display: "inline-block",
  margin: 0,
  color: "$gray000",
  lineHeight: "calc(1em + 4px)",

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
        fontSize: "32px",
        paddingBottom: "$space300",
        paddingTop: "$space200",

        "@medium": {
          fontSize: "40px",
        },

        "@large": {
          fontSize: "52px",
          paddingBottom: "$space500",
          paddingTop: "$space300",
        },
      },
      largeHeading: {
        fontWeight: 400,
        fontSize: "$$4",
        paddingBottom: "$space100",
        paddingTop: "$space100",
      },
      heading: {
        fontWeight: 400,
        fontSize: "$$3",
        paddingTop: "$space100",
        paddingBottom: "$space100",
      },
      subHeading: {
        fontWeight: 400,
        fontSize: "$$2",
        letterSpacing: "0.01em",
        paddingBottom: "$space100",
      },
      body: {
        fontWeight: 400,
        fontSize: "$$1",
        lineHeight: "24px",
      },
      bodySmall: {
        fontWeight: 400,
        fontSize: "$$0",
        lineHeight: "20px",
      },
      overline: {
        fontWeight: 400,
        fontSize: "$$0",
        textTransform: "uppercase",
        fontFamily: "$suisseMono",
        letterSpacing: "0.05em",
        paddingBottom: "$space100",
      },
    },
  },

  defaultVariants: {
    preset: "body",
  },
});

export default Text;
