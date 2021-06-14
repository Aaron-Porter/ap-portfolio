import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import Content from "components/atoms/Content";
import CopyToClipboardButton from "components/molecules/CopyToClipboardButton";
import Button from "components/atoms/Button";

export const Footer = () => (
  <Box css={{ padding: "$space700 0 $space900" }}>
    <Content>
      <Flex align="stretch" justify="start" gap>
        <Box>
          <CopyToClipboardButton value="hello@aaronporter.co" variant="ghost">
            hello@aaronporter.co
          </CopyToClipboardButton>
        </Box>
        <Box>
          <Button variant="ghost" href="https://twitter.com/Aaron_porter">
            Twitter
          </Button>
        </Box>

        <Box>
          <Button variant="ghost" href="https://www.linkedin.com/in/aaporter/">
            LinkedIn
          </Button>
        </Box>
        <Flex align="center" justify="end">
          <Button
            variant="ghost"
            iconName="Github"
            href="https://github.com/Aaron-Porter/ap-portfolio"
          >
            This website is open source
          </Button>
        </Flex>
      </Flex>
    </Content>
  </Box>
);
