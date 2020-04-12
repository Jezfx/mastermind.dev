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
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
)
