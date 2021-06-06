import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import Content from "components/atoms/Content";
import LinkTo from "components/utilities/LinkTo";
import { useRouter } from "next/router";
import { styled } from "stitches.config";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Image from "next/image";
import React from "react";
import Icon from "components/atoms/Icon";

const Menu = styled(Flex, {
  backgroundColor: "white",
  padding: "$space100",
  borderRadius: "999px",
  flexDirection: "row",
  overflow: "hidden",
});

const Avatar = styled(Box, {
  backgroundImage: "url('images/avatar.png')",
});

const Item = styled(Box, {
  transition: "$default",
  padding: "$space200 $space400",
  position: "relative",

  "&:hover": {
    color: "$accent",
  },

  variants: {
    active: {
      true: {
        color: "rgba(219, 66, 34, 1)",
      },
      false: {
        color: "$gray600",
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});

const Highlight = styled(Box, {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(255, 233, 228, 1)",
  borderRadius: "999px",
  zIndex: 0,
  display: "block",
});

const MenuItem = ({ href = "", path, label, children }) => {
  const active = path === href;

  return (
    <LinkTo href={href} displayContents>
      <Item
        active={active}
        css=""
        key={label}
        layout
        layoutId={label}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Flex>
          {children}
          <Text preset="body" css={{ color: "inherit", zIndex: 10 }}>
            {label}
          </Text>
        </Flex>
        {active && (
          <Highlight
            layout
            layoutId="highlight"
            key="highlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </Item>
    </LinkTo>
  );
};

export const Header = () => {
  const router = useRouter();
  const path = router.pathname;

  const isProject = path.includes("project");
  React.useEffect(() => {
    console.log("mount");
  }, []);

  return (
    <Box css={{ padding: "$space500 0" }}>
      <Content>
        <Flex>
          <AnimateSharedLayout>
            <AnimatePresence>
              {!isProject && (
                <Box
                  css={{
                    borderRadius: "50%",
                    marginRight: "$space200",
                    overflow: "hidden",
                    width: "64px",
                    height: "64px",
                    position: "relative",
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  layout
                  key="avatar"
                  layoutId="avatar"
                >
                  <Image src="/images/avatar.png" layout="fill" />
                </Box>
              )}
              <Menu key="menu" css={{ flex: "initial" }} layout>
                {isProject && (
                  <MenuItem
                    href="/"
                    path={path}
                    label="All Work"
                    key="all-work"
                  >
                    <Icon
                      name="ArrowsClockwise"
                      css={{
                        width: "24px",
                        height: "24px",
                        marginRight: "$space200",
                      }}
                    />
                  </MenuItem>
                )}
                {!isProject && (
                  <MenuItem href="/" path={path} label="Work" key="work" />
                )}
                <MenuItem
                  href="/about"
                  path={path}
                  label="About Me"
                  key="about"
                />
              </Menu>
            </AnimatePresence>
          </AnimateSharedLayout>
        </Flex>
      </Content>
    </Box>
  );
};
