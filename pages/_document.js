import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssString, lightTheme } from "../stitches.config";
import { GA_TRACKING_ID } from "../lib/gtag";

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style
              id="stitches"
              dangerouslySetInnerHTML={{ __html: getCssString() }}
            />
          </>
        ),
      };
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link rel="stylesheet" href="/fonts/style.css" />
          <link
            rel="preload"
            href="/fonts/Suisse/SuisseIntl-Regular-WebS.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/SuisseMono/SuisseIntlMono-Regular-WebS.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Generics */}
          <link rel="icon" href="/favicons/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" href="/favicons/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" href="/favicons/favicon-96x96.png" sizes="96x96" />
          <link
            rel="icon"
            href="/favicons/favicon-128x128.png"
            sizes="128x128"
          />
          <link
            rel="icon"
            href="/favicons/favicon-196x196.png"
            sizes="192x192"
          />

          {/* Android */}
          <link
            rel="shortcut icon"
            sizes="196x196"
            href="/favicons/favicon-196x196.png"
          />

          {/* iOS */}
          <link
            rel="apple-touch-icon"
            href="/favicons/apple-touch-icon-120x120.png"
            sizes="120x120"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/apple-touch-icon-152x152.png"
            sizes="152x152"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/apple-touch-icon-180x180.png"
            sizes="180x180"
          />

          {/* Windows */}
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta
            name="msapplication-TileImage"
            content="/favicons/mstile-144x144.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
