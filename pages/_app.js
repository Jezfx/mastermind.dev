import React from "react"
import { ThemeProvider } from "styled-components"

import App from "next/app"
import Head from "next/head"

import theme from "~/utils/theme"
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
        color="#71bac6"
      />
      <meta name="msapplication-TileColor" content="#71bac6" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
)
