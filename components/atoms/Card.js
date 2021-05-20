import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import { styled } from "stitches.config";

const Card = (props) => {
  const { children, css } = props;
  return (
    <Flex
      css={{
        backgroundColor: "$gray900",
        borderRadius: "8px",
        ...css,
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

Card.Content = styled(Flex, {
  padding: "40px",
  defaultVariants: {
    direction: "column",
  },
});

export default Card;
