import * as React from "react"

import localFont from "next/font/local"
import { Toaster } from "sonner"

import classNames from "@/utils/classNames"

import "@/styles/main.css"

const sansFont = localFont({
  variable: "--sans-font",
  src: [
    {
      path: "../fonts/GeneralSans-Variable.woff2",
      weight: "300 800",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-VariableItalic.woff2",
      weight: "300 800",
      style: "italic",
    },
  ],
})

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head></head>
      <body
        className={classNames(
          sansFont.variable,
          "overflow-x-hidden bg-slate-50"
        )}
      >
        {children}
        <Toaster position="bottom-right" closeButton />
      </body>
    </html>
  )
}

export default RootLayout
