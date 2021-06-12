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

function MyApp({ Component, pageProps, router }) {
  globalStyles();
  const [transitionState, setTransitionState] = useState();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const handleExitComplete = () => {
    console.log("exit");
    window.scrollTo(0, 0);
  };

  Router.events.on("routeChangeStart", () => {
    setTransitionState("begin");
  });

  Router.events.on("routeChangeComplete", () => {
    setTransitionState("done");
  });

  const spring = {
    duration: 0.2,
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
