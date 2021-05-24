import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import Content from "components/atoms/Content";

export const Header = () => (
  <Box css={{ padding: "$space500 0" }}>
    <Content>
      <Flex>
        <Box>
          <Text preset="heading" css={{ color: "$accent" }}>
            A.
          </Text>
        </Box>
      </Flex>
    </Content>
  </Box>
);
