import { globalStyles, lightTheme } from "stitches.config";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Menu from "components/organisms/Menu";
import Box from "components/atoms/Box";
import { useEffect, useRef } from "react";
import Router from "next/router";
import { ThemeProvider } from "next-themes";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import Image from "next/image";
import Header from "components/molecules/Header";

const handleExitComplete = () => {
  console.log("exited");
};

function MyApp({ Component, pageProps, router }) {
  globalStyles();

  // useEffect(() => {
  //   window.history.scrollRestoration = "manual";

  //   const cachedScroll = [];

  //   Router.events.on("routeChangeStart", () => {
  //     cachedScroll.push([window.scrollX, window.scrollY]);
  //   });

  //   Router.beforePopState(() => {
  //     const [x, y] = cachedScroll.pop();
  //     setTimeout(() => {
  //       window.scrollTo(x, y);
  //     }, 100);

  //     return true;
  //   });
  // }, []);

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: "dark",
        light: lightTheme.className,
      }}
    >
      <Header />

      <Box
        layout
        css={{
          perspective: "1000px",
          "perspective-origin": "top center",
        }}
      >
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <motion.div
            key={router.pathname}
            transition={spring}
            initial={{ z: 100, opacity: 0 }}
            animate={{ z: 0, opacity: 1 }}
            exit={{ z: -100, opacity: 0 }}
            originZ={0}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
