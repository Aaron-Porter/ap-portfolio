import Button from "components/atoms/Button";
import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const CopyToClipboardButton = (props) => {
  const { value, children } = props;
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copy = () => {
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 3000);
    navigator.clipboard.writeText(value);
  };

  const variants = {
    hidden: { opacity: 0, y: "-40%" },
    visible: { opacity: 1, y: "-100%" },
    exit: { opacity: 0, y: "-100%" },
  };

  return (
    <Box css={{ display: "inline-block" }}>
      <AnimatePresence>
        {tooltipVisible && (
          <Flex
            css={{
              position: "absolute",
              display: "inline-flex",
              top: -8,
              left: 0,
              right: 0,
            }}
            justify="center"
            initial="hidden"
            animate={"visible"}
            exit="exit"
            variants={variants}
          >
            <Box
              css={{
                backgroundColor: "$gray700",
                borderRadius: "99999px",
                display: "inline-block",
                padding: "$space100 $space200",
              }}
            >
              <Text>Copied to clipboard</Text>
            </Box>
          </Flex>
        )}
      </AnimatePresence>
      <Button onClick={copy} iconName="Copy" {...props}>
        {children}
      </Button>
    </Box>
  );
};

export default CopyToClipboardButton;
