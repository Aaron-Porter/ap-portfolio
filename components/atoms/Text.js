import { styled } from "stitches.config";

const Text = styled("span", {
  // Reset
  display: "inline-block",
  margin: 0,
  color: "$gray000",
  lineHeight: "calc(1em + 4px)",

  // Font Sizes
  $$0: "14px",
  $$1: "16px",
  $$2: "20px",
  $$3: "20px",
  $$4: "32px",
  $$5: "40px",

  "@large": {
    $$0: "14px",
    $$1: "16px",
    $$2: "20px",
    $$3: "28px",
    $$4: "40px",
    $$5: "60px",
  },

  variants: {
    preset: {
      xLargeHeading: {
        fontWeight: 400,
        fontSize: "$$5",
      },
      largeHeading: {
        fontWeight: 400,
        fontSize: "$$4",
        paddingBottom: "$space100",
      },
      heading: {
        fontWeight: 400,
        fontSize: "$$3",
        paddingBottom: "$space100",
      },
      subHeading: {
        fontWeight: 400,
        fontSize: "$$2",
      },
      body: {
        fontWeight: 400,
        fontSize: "$$1",
      },
      overline: {
        fontWeight: 400,
        fontSize: "$$0",
        textTransform: "uppercase",
      },
    },
  },

  defaultVariants: {
    preset: "body",
  },
});

export default Text;
