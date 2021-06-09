import { styled } from "stitches.config";
import Box from "components/atoms/Box";
import { contentStyles } from "components/atoms/Content";
import Flex from "components/atoms/Flex";

const Grid = styled(Box, {
  padding: 0,
  margin: 0,
  width: "100%",
  display: "grid",

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
    gapSize: {
      default: {
        gap: "$space300",
        "@large": {
          gap: "$space400",
        },
      },
      large: {
        gap: "$space500",
        "@large": {
          gap: "$space600",
        },
      },
    },
  },

  defaultVariants: {
    columns: 1,
    gapSize: "default",
  },
});

export default Grid;
