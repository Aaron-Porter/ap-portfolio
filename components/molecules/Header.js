import Box from "components/atoms/Box";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import Image from "next/image";
import Menu from "components/organisms/Menu";

const Header = () => (
  <Box
    css={{
      position: "fixed",
      right: 0,
      left: 0,
      bottom: "$space600",
      margin: "auto",
      zIndex: 1000,
    }}
  >
    <Content>
      <Flex justify="center" align="center">
        {/* <Box
          css={{
            borderRadius: "50%",
            marginRight: "$space300",
            overflow: "hidden",
            width: "56px",
            height: "56px",
            cursor: "grab",
            boxShadow:
              "0px 4px 4px 0px rgba(0, 0, 0, 0.7), 0px 0px 24px 0px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Image src="/images/avatar.png" width={64} height={64} />
        </Box> */}
        <Menu key="menu" />
      </Flex>
    </Content>
  </Box>
);

export default Header;
