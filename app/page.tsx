import * as React from "react"
import { cookies } from "next/headers"

import Bookmarks from "components/Bookmarks"
import Footer from "components/Footer"

import { createClient } from "utils/supabase/server"

const defaultBookmarks = [
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

const Home = async (): Promise<React.JSX.Element> => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: bookmarks } = await supabase.from("bookmarks").select()

  console.log(bookmarks)

  return (
    <main>
      <Bookmarks defaultBookmarks={bookmarks || defaultBookmarks} />
      <Footer />
    </main>
  )
}

export default Home
