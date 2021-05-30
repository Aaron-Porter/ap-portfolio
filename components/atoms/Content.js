import { styled, css } from "stitches.config";
import Box from "./Box";

export const contentStyles = {
  width: "calc(100% - 80px)",
  maxWidth: "1128px",
  margin: "0 auto",
};

export const Content = ({ children }) => {
  return <Box css={{ ...contentStyles }}>{children}</Box>;
};

export default Content;
