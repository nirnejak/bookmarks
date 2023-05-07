import * as React from "react"

import { sql } from "@vercel/postgres"
import { GithubFill } from "akar-icons"

import Bookmarks from "components/Bookmarks"

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
  }
}

const Home = async (): Promise<React.JSX.Element> => {
  await getBookmarks()

  return (
    <main>
      <section className="flex justify-center pt-20 text-slate-700 md:pt-40">
        <Bookmarks />
      </section>

      <footer className="fixed bottom-2 right-2 text-slate-700 hover:text-slate-900">
        <a href="http://github.com/nirnejak/bookmarks/" target="_blank">
          <GithubFill />
        </a>
      </footer>
    </main>
  )
}

export default Home
