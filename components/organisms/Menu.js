import Box from "components/atoms/Box";
import Flex from "components/atoms/Flex";
import Text from "components/atoms/Text";
import LinkTo from "components/utilities/LinkTo";
import { useRouter } from "next/router";
import React from "react";

const MenuItem = ({ href = "", path, label }) => {
  const active = path === href;

  return (
    <LinkTo href={href}>
      <Box
        className={`transition-all px-4 py-2 relative rounded-full inline-flex w-max ${
          active ? "text-gray-1000" : "text-gray-200 hover:bg-gray-600 hover:text-gray-0"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Text preset="body" className="text-inherit z-10">
          {label}
        </Text>
        {active && (
          <Box
            layout
            layoutId="highlight"
            className="absolute inset-0 bg-gray-0 rounded-full z-0 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </Box>
    </LinkTo>
  );
};

const Menu = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <Flex
      layout
      className="bg-gray-800 p-3 rounded-[999px] overflow-hidden inline-flex flex-row gap-3 !flex-none pointer-events-auto items-center text-gray-200 w-max shadow-[0_4px_4px_0_rgba(0,0,0,0.7),0_0_24px_0_rgba(0,0,0,0.5)]"
    >
      <MenuItem href="/" path={path} label="Work" />
      <MenuItem href="/about" path={path} label="About Me" />
    </Flex>
  );
};

export default Menu;
