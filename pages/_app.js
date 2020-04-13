import React from "react"
import { ThemeProvider } from "styled-components"

import App from "next/app"
import Head from "next/head"

import theme from "~/utils/theme"
import { GA_TRACKING_ID } from "~/utils/analytics"
import GlobalStyles from "~/utils/global-styles"

import "normalize.css"
import config from "../site.config"

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>{config.title}</title>
      <link href={config.googleFontsURI} rel="stylesheet" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/images/favicon/safari-pinned-tab.svg"
        color={theme.colors.primary}
      />
      <meta name="msapplication-TileColor" content={theme.colors.primary} />
      <meta name="theme-color" content="#ffffff" />

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
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
)
