import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import Content from "components/atoms/Content";
import LinkTo from "components/utilities/LinkTo";
import { useRouter } from "next/router";
import { styled } from "stitches.config";

const Item = styled(Box, {
  transition: "$default",

  "&:hover": {
    color: "$gray000",
  },

  variants: {
    active: {
      true: {
        color: "$gray000",
      },
      false: {
        color: "$gray400",
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});

export const Header = () => {
  const router = useRouter();

  const MenuItem = ({ children, href = "" }) => {
    const active = router.pathname === href;
    return (
      <Item active={active}>
        <LinkTo href={href}>
          <Text preset="body" css={{ color: "inherit" }}>
            {children}
          </Text>
        </LinkTo>
      </Item>
    );
  };

  return (
    <Box css={{ padding: "$space500 0" }}>
      <Content>
        <Flex justify="between" align="end">
          <Box>
            <Text preset="heading" css={{ color: "$accent", paddingBottom: 0 }}>
              A.
            </Text>
          </Box>
          <Box>
            <Flex gap>
              <MenuItem href="/">Work</MenuItem>
              <MenuItem href="/about">About Me</MenuItem>
            </Flex>
          </Box>
        </Flex>
      </Content>
    </Box>
  );
};
