import * as React from "react"
import { cookies } from "next/headers"

import Bookmarks from "components/Bookmarks"
import Footer from "components/Footer"
import ErrorComponent from "components/ErrorComponent"

import { createClient } from "utils/supabase/server"

const defaultBookmarks = [
  {
    id: 1,
    title: "Website",
    link: "https://nirnejak.com",
    icon: "https://nirnejak.com/favicon.ico",
  },
  {
    id: 2,
    title: "Twitter",
    link: "https://twitter.com/jeetnirnejak",
    icon: "https://twitter.com/favicon.ico",
  },
  {
    id: 3,
    title: "Layers.to",
    link: "https://layers.to/nirnejak",
    icon: "https://layers.to/build/favicon.ico",
  },
  {
    id: 4,
    title: "Github",
    link: "https://github.com/nirnejak",
    icon: "https://github.com/favicon.ico",
  },
]

const Home = async (): Promise<React.JSX.Element> => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: bookmarks, error } = await supabase
    .from("bookmarks")
    .select()
    .order("created_at", { ascending: false })

  if (error) {
    console.log(error)

    return <ErrorComponent type={500} />
  } else {
    return (
      <main>
        <Bookmarks
          defaultBookmarks={
            bookmarks && bookmarks.length ? bookmarks : defaultBookmarks
          }
        />
        <Footer />
      </main>
    )
  }
}

export default Home
