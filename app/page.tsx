import * as React from "react"
import { cookies } from "next/headers"

import Bookmarks from "components/Bookmarks"
import Footer from "components/Footer"
import ErrorComponent from "components/ErrorComponent"

import { createClient } from "utils/supabase/server"

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
          defaultBookmarks={bookmarks && bookmarks.length ? bookmarks : []}
        />
        <Footer />
      </main>
    )
  }
}

export default Home
