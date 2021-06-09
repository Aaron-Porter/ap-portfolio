import { styled } from "stitches.config";
import Box from "components/atoms/Box";
import {
  contentStyles,
  contentWidth,
  contentGutter,
} from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import Grid from "components/atoms/Grid";

const Container = styled(Box, {
  overflowX: "scroll",
  overflowY: "visible",
  scrollSnapType: "both mandatory",
  margin: "0 auto",

  // Hide scrollbar
  "::-webkit-scrollbar": {
    display: "none" /* Chrome Safari */,
    "-webkit-appearance": "none",
    appearance: "none",
    width: 0,
    height: 0,
  },
  "scrollbar-width": "none" /* Firefox */,
  "-ms-overflow-style": "none" /* IE 10+ */,
});

const Track = styled(Grid, {
  // height: "100%",
  // gap: "24px", // TODO: write polyfill
  // justifyContent: "flex-start",
  // display: "flex",
  // flexDirection: "column",
  // margin: "0 auto",
  // width: "max-contsent",
  // padding: "0 calc(((100vw - 1128px) / 2) - 20px)",
  // margin: "0 20px",
  // flexDirection: "row",

  // "& > *": {
  //   maxWidth: "calc(100vw - 80px)",
  // },

  defaultVariants: {
    columns: 2,
    gapSize: "default",
  },

  "@lessThanMedium": {
    display: "flex",
    width: "max-content",
    padding: `0 ${contentGutter}`,
    gap: "8px",
    "& > *": {
      width: "calc(100vw - 80px)",
      maxWidth: "500px",
      maxHeight: "500px",
    },
  },

  "@medium": {
    ...contentStyles,
  },
});

const Carousel = ({ children, mobileCarousel = false }) => (
  <Container>
    <Track carousel={mobileCarousel}>{children}</Track>
  </Container>
);

export default Carousel;
