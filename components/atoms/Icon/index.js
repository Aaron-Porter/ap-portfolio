import React from "react";
import Box from "components/atoms/Box";
import ArrowRightUp from "./icons/ArrowRightUp.svg";
import EyeSlash from "./icons/EyeSlash.svg";
import ArrowDown from "./icons/ArrowDown.svg";

const iconTypes = {
  ArrowRightUp: ArrowRightUp,
  EyeSlash: EyeSlash,
  ArrowDown: ArrowDown,
};

const Icon = ({ name, css, ...props }) => {
  let _Icon = iconTypes[name];
  return (
    <Box css={css}>
      <_Icon {...props} style={{ height: "100%", width: "100%" }} />
    </Box>
  );
};

export default Icon;
