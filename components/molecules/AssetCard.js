import Box from "components/atoms/Box";
import Text from "components/atoms/Text";
import Card from "components/atoms/Card";
import Icon from "components/atoms/Icon";
import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";

const Caption = ({ expand, text }) => {
  const parentVariants = {
    default: {
      borderRadius: 32,
      height: 48,
      width: 48,
    },
    hover: {
      borderRadius: 8,
      height: "auto",
      width: "auto",
      transition: {
        delay: 0,
      },
    },
  };
  const iconVariants = {
    default: {
      opacity: 1,
    },
    hover: {
      opacity: 0,
    },
  };
  const textVariants = {
    default: {
      opacity: 0,
      y: 10,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <Box
      variants={parentVariants}
      css={{
        backgroundColor: "$gray500",
        padding: "$space200",
        backgroundColor: "$gray800",
        position: "absolute",
        bottom: "40px",
        right: "40px",
        color: "$gray000",
        maxWidth: "35ch",
      }}
      transition={{ delay: 0.5 }}
    >
      <Box
        variants={iconVariants}
        transition={{
          delay: 0.5,
        }}
      >
        <Icon name="Chat" css={{ height: "24px", width: "24px" }} />
      </Box>
      <Box variants={textVariants}>
        <Text>{text}</Text>
      </Box>
    </Box>
  );
};

const AssetCard = ({ columns = 2, children, caption }) => {
  return (
    <Box css={{ gridColumn: `span ${columns}`, position: "relative" }}>
      <Card pressable={false}>
        {children}
        {caption && <Caption text={caption} />}
      </Card>
    </Box>
  );
};

export default AssetCard;
