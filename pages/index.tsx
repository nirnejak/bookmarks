import * as React from "react"

import { Plus } from "akar-icons"
import { motion, Reorder } from "framer-motion"
import Head from "next/head"
import { v4 as uuidv4 } from "uuid"

import { getUrlMetadata } from "../utils/getUrlMetadata"
import BookmarkRow from "components/BookmarkRow"

export interface BOOKMARK {
  id: number
  title: string
  link: string
  icon: string
}

const Home: React.FC = () => {
  const [url, setUrl] = React.useState("")

  const [bookmarks, setBookmarks] = React.useState<BOOKMARK[]>([])

  const addBookmark = (e: React.KeyboardEvent): void => {
    if (url.length === 0) return

    if (e.key === "Enter") {
      const newBookmark = {
        id: uuidv4(),
        title: url,
        link: url,
        icon: "",
      }
      setBookmarks((currentBookmarks) => [newBookmark, ...currentBookmarks])
      fillMetadata(0, url)
      setUrl("")
    }
  }

  const editBookmark = (id: number): void => {
    // TODO: Edit boomark
  }

  const deleteBookmark = (id: number): void => {
    setBookmarks((bookmarks) =>
      bookmarks.filter((bookmark) => bookmark.id !== id)
    )
  }

  const fillMetadata = (id, url): void => {
    getUrlMetadata(url, "jeetnirnejak@gmail.com")
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <Head>
        <title>Bookmarks</title>
        <meta name="description" content="An elegant bookmarking tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center pt-20 text-slate-700 md:pt-40">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.15, type: "spring" }}
          className="w-[500px]"
        >
          <h1 className="mb-2 text-sm text-slate-700">Bookmarks</h1>
          <div className="group relative flex items-center">
            <Plus
              size={15}
              className="absolute left-3 z-10 text-slate-400 group-hover:text-slate-700"
            />
            <input
              type="text"
              value={url}
              className="relative w-full rounded bg-slate-200 py-2.5 pl-8 pr-3 text-sm text-slate-700 focus:outline-none"
              placeholder="Inset link, image, or just plain text..."
              onChange={(e) => {
                setUrl(e.target.value)
              }}
              onKeyUp={addBookmark}
            />
          </div>
          {bookmarks.length > 0 && (
            <p className="mb-3 mt-10 text-xs text-slate-500">Inbox</p>
          )}
          <div className="flex w-full select-none flex-col">
            <Reorder.Group axis="y" values={bookmarks} onReorder={setBookmarks}>
              {bookmarks.map((bookmark) => (
                <BookmarkRow
                  key={bookmark.id}
                  bookmark={bookmark}
                  editBookmark={editBookmark}
                  deleteBookmark={deleteBookmark}
                />
              ))}
            </Reorder.Group>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default Home
