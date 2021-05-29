import Box from "components/atoms/Box";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";
import Section from "../atoms/Section";
import Content from "../atoms/Content";
import Flex from "../atoms/Flex";
import Text from "../atoms/Text";

const Project = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default Project;
