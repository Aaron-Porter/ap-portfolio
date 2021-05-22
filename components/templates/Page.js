import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import Content from "components/atoms/Content";

const Header = () => (
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

const Footer = () => (
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

const Page = ({ children }) => (
  <Box>
    <Header />
    {children}
    <Footer />
  </Box>
);

export default Page;
