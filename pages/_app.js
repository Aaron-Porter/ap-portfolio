import { globalStyles, lightTheme } from "stitches.config";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Menu from "components/organisms/Menu";
import Box from "components/atoms/Box";
import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "next-themes";
import Content from "components/atoms/Content";
import Flex from "components/atoms/Flex";
import Image from "next/image";
import Header from "components/molecules/Header";
import { Footer } from "components/molecules/Footer";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  globalStyles();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const handleExitComplete = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      setTimeout(() => {
        if (!window) {
          return;
        }

        gtag.pageview(url);
      }, 1000);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const spring = {
    duration: 0.3,
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
            <DefaultSeo {...SEO} />
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gtag.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />

            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </Box>
      <Header />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
