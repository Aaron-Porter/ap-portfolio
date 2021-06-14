import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import Content from "components/atoms/Content";
import LinkTo from "components/utilities/LinkTo";
import { useRouter } from "next/router";
import { styled } from "stitches.config";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icon from "components/atoms/Icon";
import { useTheme } from "next-themes";

const _Menu = styled(Flex, {
  backgroundColor: "$gray800",
  padding: "$space200",
  borderRadius: "999px",
  flexDirection: "row",
  overflow: "hidden",
  display: "inline-flex",
  gapHorizontal: "$space200",
  flex: "initial",
  pointerEvents: "all",
  align: "center",
  color: "$gray200",
  width: "max-content",
  boxShadow:
    "0px 4px 4px 0px rgba(0, 0, 0, 0.7), 0px 0px 24px 0px rgba(0, 0, 0, 0.5)",
});

const Item = styled(Box, {
  transition: "$default",
  padding: "$space100 $space300",
  position: "relative",
  borderRadius: "999px",
  display: "inline-flex",
  width: "max-content",

  variants: {
    active: {
      true: {
        color: "$gray1000",
        "&:hover": {
          color: "$gray1000",
        },
      },
      false: {
        color: "$gray200",
        "&:hover": {
          backgroundColor: "$gray600",
          color: "$gray000",
        },
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
  backgroundColor: "$gray000",
  borderRadius: "999px",
  zIndex: 0,
  display: "block",
});

const MenuItem = ({
  href = "",
  path,
  label,
  children,
  key,
  icon,
  layoutId,
}) => {
  const active = path === href;

  return (
    <LinkTo href={href}>
      <Item
        active={active}
        key={label}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Text preset="body" css={{ color: "inherit", zIndex: 10 }} key="text">
          {label}
        </Text>
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

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(targetTheme);
  };
  return (
    <Flex
      align="center"
      onClick={toggleTheme}
      css={{
        padding: "12px",
        borderRadius: "9999px",
        border: "1px $gray700 solid",
        cursor: "pointer",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {resolvedTheme === "dark" && (
        <Icon name="Moon" css={{ width: "16px", height: "16px" }} />
      )}
      {resolvedTheme === "light" && (
        <Icon name="Sun" css={{ width: "16px", height: "16px" }} />
      )}
    </Flex>
  );
};

const Menu = () => {
  const router = useRouter();
  const path = router.pathname;

  const isProject = path.includes("project");

  return (
    <_Menu key="menu" layout>
      <AnimateSharedLayout>
        <MenuItem
          href="/"
          path={path}
          label="Work"
          layoutId="work"
          icon={isProject}
        />
        <MenuItem
          href="/about"
          path={path}
          label="About Me"
          key="about"
          layoutId="about"
        />
        {/* <ThemeToggle /> */}
      </AnimateSharedLayout>
    </_Menu>
  );
};

export default Menu;
