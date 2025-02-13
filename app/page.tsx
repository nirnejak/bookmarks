import * as React from "react"

import { type Metadata } from "next"

import { cookies } from "next/headers"

import Bookmarks from "@/components/Bookmarks"
import ErrorComponent from "@/components/ErrorComponent"
import Footer from "@/components/Footer"
import generateMetadata from "@/utils/seo"
import { createClient } from "@/utils/supabase/server"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Bookmarks",
  description: "An elegant bookmarking tool.",
})

const Home = async (): Promise<React.JSX.Element> => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: bookmarks, error } = await supabase
    .from("bookmarks")
    .select()
    .order("created_at", { ascending: false })

  if (error !== null) {
    console.log(error)

    return <ErrorComponent type={500} />
  } else {
    return (
      <main>
        <Bookmarks defaultBookmarks={bookmarks} />
        <Footer />
      </main>
    )
  }
}

export default Home
