import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";

const Card = ({ children, css, padding = "40px" }) => {
  return (
    <Flex
      css={{
        backgroundColor: "$gray900",
        borderRadius: "8px",
        ...css,
      }}
    >
      <Box css={{ padding: padding }}>{children}</Box>
    </Flex>
  );
};

export default Card;
