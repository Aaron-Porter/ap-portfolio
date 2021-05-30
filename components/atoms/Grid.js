import { styled } from "stitches.config";
import Box from "components/atoms/Box";
import { contentStyles } from "components/atoms/Content";
import Flex from "components/atoms/Flex";

const Grid = styled(Box, {
  padding: 0,
  margin: 0,
  width: "100%",
  display: "grid",
  gap: "$space300",

  variants: {
    columns: {
      1: {
        gridTemplateColumns: "1fr",
      },
      2: {
        gridTemplateColumns: "1fr",

        "@medium": {
          gridTemplateColumns: "1fr 1fr",
        },
      },
    },
  },

  defaultVariants: {
    columns: 1,
  },

  "@large": {
    gap: "$space400",
  },
});

export default Grid;
