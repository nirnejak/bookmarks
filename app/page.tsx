import * as React from "react"

import { sql } from "@vercel/postgres"

import Bookmarks from "components/Bookmarks"
import Footer from "components/Footer"

export interface BOOKMARK {
  id: number
  title: string
  link: string
  icon: string
}

const getBookmarks = async (): Promise<BOOKMARK[] | undefined> => {
  try {
    const { rows } = await sql`SELECT * from bookmarks`
    return rows as BOOKMARK[]
  } catch (err) {
    console.log(err)
    return []
  }
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
