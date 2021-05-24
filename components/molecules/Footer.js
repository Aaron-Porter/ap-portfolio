import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import Content from "components/atoms/Content";

export const Footer = () => (
  <Box css={{ padding: "$space700 0 $space500" }}>
    <Content>
      <Flex gap>
        <Box>
          <Text preset="overline" css={{ color: "$gray500" }}>
            hello@aaronporter.co
          </Text>
        </Box>
        <Box>
          <Text preset="overline" css={{ color: "$gray500" }}>
            Twitter
          </Text>
        </Box>
        <Box>
          <Text preset="overline" css={{ color: "$gray500" }}>
            LinkedIn
          </Text>
        </Box>
      </Flex>
    </Content>
  </Box>
);
