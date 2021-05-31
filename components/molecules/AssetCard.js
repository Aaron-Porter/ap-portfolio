import Box from "components/atoms/Box";
import Text from "components/atoms/Text";
import Card from "components/atoms/Card";
import Icon from "components/atoms/Icon";
import { useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Caption = ({ open, text }) => {
  const parentVariants = {
    closed: {
      borderRadius: 32,
    },
    open: {
      borderRadius: 8,
    },
  };

  const textVariants = {
    closed: {
      x: 24,
      opacity: 0,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
      },
    },
  };

  const iconVariants = {
    closed: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
    open: {
      scale: 0.1,
      opacity: 0,
    },
  };

  return (
    <AnimateSharedLayout>
      <Box
        layout
        variants={parentVariants}
        animate={open ? "open" : "closed"}
        css={{
          backgroundColor: "$gray500",
          padding: "$space200",
          backgroundColor: "$gray800",
          position: "absolute",
          bottom: "40px",
          right: "40px",
          color: "$gray000",
          maxWidth: "35ch",
          display: "block",
          overflow: "hidden",
        }}
      >
        {!open && (
          <Box
            key="poiuhyg"
            layout
            variants={iconVariants}
            initial="open"
            exit="closed"
          >
            <Icon name="Chat" css={{ height: "24px", width: "24px" }} />
          </Box>
        )}
        {open && (
          <Box
            key="hgfd"
            layout
            variants={textVariants}
            initial="closed"
            exit="closed"
          >
            <Text>{text}</Text>
          </Box>
        )}
      </Box>
    </AnimateSharedLayout>
  );
};

const AssetCard = ({ columns = 2, children, caption }) => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      css={{ gridColumn: `span ${columns}`, position: "relative" }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <Card pressable={false}>{children}</Card>
      {caption && <Caption text={caption} open={hover} />}
    </Box>
  );
};

export default AssetCard;
