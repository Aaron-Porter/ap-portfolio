import Box from "components/atoms/Box";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import Image from "next/image";
import Menu from "components/organisms/Menu";

const Header = () => (
  <Box
    css={{
      position: "sticky",
      bottom: 0,
      left: 0,
      bottom: "$space600",
      margin: "auto",
      zIndex: 1000,
      pointerEvents: "none",
    }}
  >
    <Content>
      <Flex justify="center" align="center">
        <Menu key="menu" />
      </Flex>
    </Content>
  </Box>
);

export default Header;
