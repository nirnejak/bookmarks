import * as React from "react"

import { type Metadata } from "next"

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

const baseUrl = "https://nirnejak.com"
const metaTitle = "Bookmarks"
const metaDescription =
  "Jitendra Nirnejak is a developer and designer based out of Bangalore, India. He has expertise in React, TypeScript, Node.js, UI Design and Prototyping."
const metaImage = `${baseUrl}/cover.png`

const path = "/"

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,

  applicationName: "Bookmarks",
  authors: [{ name: "Jitendra Nirnejak", url: "https://nirnejak.com/" }],
  keywords: "Bookmarks",
  themeColor: "#000000",
  twitter: {
    title: metaTitle,
    description: metaDescription,
    images: metaImage,
    card: "summary_large_image",
    creator: "@jeetnirnejak",
    site: "@jeetnirnejak",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    images: metaImage,
    url: `${baseUrl}${path}`,
  },
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Meta */}
        <meta charSet="utf-8" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta itemProp="description" content={metaDescription} />
        <meta itemProp="name" content="Bookmarks" />
        <meta property="fb:admins" content="<fb-admin-id>" />
        <meta property="fb:app_id" content="<fb-app-id>" />
        <link rel="canonical" href={`${baseUrl}/`} />
        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/<path-to-icons>/icon-512x512.png" />
        <link
          rel="mask-icon"
          href="/<path-to-icons>/icon-512x512.png"
          color="#000000"
        />
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Plausible Analytics */}
        <script
          defer
          data-domain="bkmrks.vercel.app"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body
        className={classNames(
          generalSans.variable,
          "font-sans",
          "overflow-x-hidden bg-slate-50"
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
