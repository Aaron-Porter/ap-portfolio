import { styled } from "stitches.config";
import Box from "./Box";

const Flex = styled(Box, {
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  flex: 1,
  position: "relative",

  $$gap: "$space$space300",
  "@large": {
    $$gap: "$space$space400",
  },

  variants: {
    direction: {
      row: {
        "@medium": {
          flexDirection: "row",
        },
      },
      column: {
        flexDirection: "column",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
      columnReverse: {
        flexDirection: "column-reverse",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
      stretch: {
        alignItems: "stretch",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
    wrap: {
      noWrap: {
        flexWrap: "nowrap",
      },
      wrap: {
        flexWrap: "wrap",
      },
      wrapReverse: {
        flexWrap: "wrap-reverse",
      },
    },
    gap: {
      true: {},
    },
  },
  compoundVariants: [
    {
      gap: true,
      direction: "row",
      css: {
        gapVertical: "$$gap",
        "@medium": {
          gapHorizontal: "$$gap",
        },
      },
    },
    {
      gap: true,
      direction: "column",
      css: {
        gapVertical: "$$gap",
      },
    },
  ],
  defaultVariants: {
    direction: "row",
    align: "stretch",
    justify: "start",
    wrap: "noWrap",
  },
});

export default Flex;
