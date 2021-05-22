import React from "react";
import ArrowRightUp from "./icons/ArrowRightUp.svg";
import Box from "components/atoms/Box";

const iconTypes = {
  ArrowRightUp: ArrowRightUp,
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
