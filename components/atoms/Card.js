import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import { styled } from "stitches.config";

const _Card = styled(Flex, {
  backgroundColor: "$gray900",
  borderRadius: "$space$space100",
  position: "relative",
  overflow: "hidden",

  variants: {
    pressable: {
      true: {
        cursor: "pointer",
      },
    },
  },
});

const Card = (props) => {
  const { children, css, pressable = false } = props;
  return (
    <_Card
      variants={{
        default: { transform: "translateY(0px) scale(1)" },
        hover: { transform: "translateY(0px) scale(1.03)" },
        tap: { transform: "translateY(0px) scale(0.97)" },
      }}
      initial="default"
      whileHover={pressable && "hover"}
      whileTap={pressable && "tap"}
      pressable={pressable}
      css={css}
      {...props}
    >
      {children}
    </_Card>
  );
};

Card.Content = styled(Flex, {
  padding: "$space400",
  defaultVariants: {
    direction: "column",
  },

  "@large": {
    padding: "$space600",
  },
});

export default Card;
