import Box from "components/atoms/Box";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";

const Page = ({ children }) => (
  <Box>
    <Header />
    {children}
    <Footer />
  </Box>
);

export default Page;
