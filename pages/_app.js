import { globalStyles, lightTheme } from "stitches.config";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Menu from "components/organisms/Menu";
import Box from "components/atoms/Box";
import { useEffect, useRef, useState } from "react";
import Router from "next/router";
import { ThemeProvider } from "next-themes";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import Image from "next/image";
import Header from "components/molecules/Header";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps, router }) {
  globalStyles();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const handleExitComplete = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const spring = {
    duration: 0.2,
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        dark: "dark",
        // light: lightTheme.className,
      }}
    >
      <Header />
      <Box
        css={{
          perspective: "1000px",
          "perspective-origin": "center center",
        }}
      >
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Box
            key={router.pathname}
            transition={spring}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            originZ={0}
          >
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
