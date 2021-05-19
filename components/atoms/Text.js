import { styled } from "stitches.config";

const Text = styled("span", {
  // Reset
  display: "inline-block",
  margin: 0,

  variants: {
    preset: {
      XLTitle: {
        fontWeight: 400,
        fontSize: "52px",
        lineHeight: "60px",
        color: "$gray000",
      },
      title: {
        fontWeight: 400,
        fontSize: "32px",
        lineHeight: "40px",
        color: "$gray000",
      },
      body: {
        fontSize: 16,
        lineHeight: "20px",
        fontWeight: 400,
        color: "$gray000",
      },
    },
  },

  defaultVariants: {
    preset: "body",
  },
});

export default Text;
