import * as React from "react"

import Bookmarks from "components/Bookmarks"
import Footer from "components/Footer"

export interface BOOKMARK {
  id: number
  title: string
  link: string
  icon: string
}

const getBookmarks = async (): Promise<BOOKMARK[]> => {
  return [
    { id: 1, title: "Website", link: "https://nirnejak.com", icon: "" },
    {
      id: 1,
      title: "Dribbble",
      link: "https://dribbble.com/nirnejak",
      icon: "",
    },
    { id: 1, title: "Layers.to", link: "https://layers.to/nirnejak", icon: "" },
    { id: 1, title: "Github", link: "https://github.com/nirnejak", icon: "" },
  ]
}

const Home = async (): Promise<React.JSX.Element> => {
  const bookmarks = await getBookmarks()

  return (
    <main>
      <Bookmarks defaultBookmarks={bookmarks} />
      <Footer />
    </main>
  )
}

export default Home
