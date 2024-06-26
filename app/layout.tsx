import * as React from "react"

import localFont from "next/font/local"
import { Toaster } from "sonner"

import classNames from "utils/classNames"

import "styles/main.css"

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

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="bkmrks.vercel.app"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body
        className={classNames(
          generalSans.variable,
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
