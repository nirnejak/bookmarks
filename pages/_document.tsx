import * as React from "react"

import { Html, Head, Main, NextScript } from "next/document"

const MyDocument: React.FC = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/<path-to-icons>/icon-512x512.png" />
        <link
          rel="mask-icon"
          href="/<path-to-icons>/icon-512x512.png"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Basic Meta */}
        <meta name="keywords" content="Bookmarks" />
        <meta name="author" content="Bookmarks" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="application-name" content="Bookmarks" />
        {/* Schema.org for Google */}
        <meta itemProp="name" content="Bookmarks" />
        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={"Bookmarks"} />
        {/* Facebook App */}
        <meta property="fb:admins" content="<fb-admin-id>" />
        <meta property="fb:app_id" content="<fb-app-id>" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@nirnejak" />
        <meta name="twitter:site" content="@nirnejak" />
        {/* Plausible Analytics */}
        <script
          defer
          data-domain="bkmrks.vercel.app"
          src="https://plausible.io/js/script.js"
        />
      </Head>
      <body className="overflow-x-hidden bg-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
