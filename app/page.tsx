import type { Metadata } from "next"
import type * as React from "react"

import Bookmarks from "@/components/Bookmarks"
import Footer from "@/components/Footer"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Bookmarks",
  description: "An elegant bookmarking tool.",
})

const bookmarks = []

const Home = async (): Promise<React.JSX.Element> => {
  return (
    <main>
      <Bookmarks defaultBookmarks={bookmarks} />
      <Footer />
    </main>
  )
}

export default Home
