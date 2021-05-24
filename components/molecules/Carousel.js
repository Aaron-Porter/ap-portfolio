import { styled } from "stitches.config";
import Box from "components/atoms/Box";

const Container = styled(Box, {
  overflowX: "scroll",
  overflowY: "visible",
  scrollSnapType: "both mandatory",
  margin: "0 auto",
  padding: "8px 0",

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

const Track = styled(Box, {
  height: "100%",
  display: "flex",
  padding: "0 calc(((100vw - 1128px) / 2) - 20px)",
  margin: "0 20px",
  width: "max-content",
  gap: "16px", // TODO: write polyfill
  justifyContent: "flex-start",

  "& > *": {
    flex: 1,
  },
});

const Carousel = ({ children }) => (
  <Container>
    <Track>{children}</Track>
  </Container>
);

export default Carousel;
