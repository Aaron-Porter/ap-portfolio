import Box from "components/atoms/Box";
import Grid from "components/atoms/Grid";

const Carousel = ({ children }) => (
  <Box className="mx-auto max-md:overflow-x-scroll max-md:pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
    <Grid className="md:mx-auto md:w-[calc(100%-32px)] md:max-w-[1128px] lg:w-[calc(100%-80px)] max-md:flex max-md:w-max max-md:px-4 max-md:gap-2 max-md:[&>*]:w-[calc(100vw-80px)] max-md:[&>*]:max-w-[500px] max-md:[&>*]:max-h-[500px]" columns={2}>
      {children}
    </Grid>
  </Box>
);

export default Carousel;
