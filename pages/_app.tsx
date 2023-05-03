import * as React from "react"

import type { AppProps } from "next/app"
import localFont from "next/font/local"

import classNames from "utils/classNames"

import "../styles/main.css"

const generalSans = localFont({
  variable: "--font-general-sans",
  src: [
    {
      path: "../fonts/GeneralSans-Variable.ttf",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-VariableItalic.ttf",
      style: "italic",
    },
  ],
})

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <main className={classNames(generalSans.variable, "font-sans")}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
