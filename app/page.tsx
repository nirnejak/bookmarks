import * as React from "react"
import { cookies } from "next/headers"

import Bookmarks from "components/Bookmarks"
import Footer from "components/Footer"

import { createClient } from "utils/supabase/server"

const Home = async (): Promise<React.JSX.Element> => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: bookmarks } = await supabase.from("bookmarks").select()

  console.log(bookmarks)

  return (
    <main>
      <Bookmarks defaultBookmarks={bookmarks} />
      <Footer />
    </main>
  )
}

export default Home
