import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import Content from "components/atoms/Content";

const Page = ({ children }) => (
  <Box>
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
    {children}
  </Box>
);

export default Page;
