import { styled } from "stitches.config";

const Section = styled("section", {
  padding: "$medium 0",

  "@medium": {
    padding: "$large 0",
  },
});

export default Section;
