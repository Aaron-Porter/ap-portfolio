import Flex from "components/atoms/Flex";
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
      transition: {
        borderRadius: { delay: 0.2, type: "spring", stiffness: 100 },
      },
    },
    open: {
      borderRadius: 8,
    },
  };

  const textVariants = {
    closed: {
      x: -24,
      opacity: 0,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        // stiffness: 300,
        bounce: 0.25,
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
          padding: "$space100",
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
            key="icon"
            layout
            variants={iconVariants}
            initial="open"
            animate="closed"
            exit="open"
          >
            <Icon name="Info" css={{ height: "16px", width: "16px" }} />
          </Box>
        )}
        {open && (
          <Box
            key="text"
            layout
            variants={textVariants}
            initial="closed"
            animate="open"
            exit="closed"
            css={{ padding: "$space100" }}
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
    <Flex
      css={{ gridColumn: `span ${columns}`, position: "relative" }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <Card pressable={false}>
        <Flex align="center" justify="center">
          {children}
        </Flex>
      </Card>
      {caption && <Caption text={caption} open={hover} />}
    </Flex>
  );
};

export default AssetCard;
