import Box from "components/atoms/Box";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";

const Page = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default Page;
