import * as React from "react"

import { GithubFill } from "akar-icons"

import Bookmarks from "components/Bookmarks"

export interface BOOKMARK {
  id: number
  title: string
  link: string
  icon: string
}

const Home = async (): Promise<React.JSX.Element> => {
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
