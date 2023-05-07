"use client"
import * as React from "react"

import { Plus, Sort } from "akar-icons"
import { motion, Reorder } from "framer-motion"
import { v4 as uuidv4 } from "uuid"

// import { getUrlMetadata } from "../utils/getUrlMetadata"
import { type BOOKMARK } from "app/page"
import BookmarkRow from "components/BookmarkRow"

interface Props {
  defaultBookmarks: BOOKMARK[]
}

const addBookmarkAPI = (newBookmark): void => {
  fetch("/api/bookmarks", {
    method: "POST",
    body: JSON.stringify(newBookmark),
  })
    .then(async (res) => await res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
}

const Bookmarks: React.FC<Props> = ({ defaultBookmarks }) => {
  const [url, setUrl] = React.useState("")

  const [bookmarks, setBookmarks] = React.useState<BOOKMARK[]>(defaultBookmarks)

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

      addBookmarkAPI(newBookmark)
    }
  }

  const sortBookmarks = (): void => {
    setBookmarks((bookmarks) => {
      const updatedBookmarks = bookmarks
      updatedBookmarks.sort((bk1, bk2) => {
        if (bk1.title > bk2.title) {
          return 1
        } else if (bk1.title < bk2.title) {
          return -1
        }
        return 0
      })
      return updatedBookmarks
    })
  }

  const editBookmark = (id: number): void => {
    // TODO: Edit bookmark
  }

  const deleteBookmark = (id: number): void => {
    setBookmarks((bookmarks) =>
      bookmarks.filter((bookmark) => bookmark.id !== id)
    )
  }

  const fillMetadata = (id, url): void => {
    // getUrlMetadata(url, "jeetnirnejak@gmail.com")
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }

  return (
    <section className="flex justify-center text-slate-700">
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.15, type: "spring" }}
        className="mx-auto mt-20 w-[500px] md:mt-40"
      >
        <h1 className="mb-3 font-semibold text-slate-700">Bookmarks</h1>
        <div className="group relative flex items-center">
          <Plus
            size={15}
            className="absolute left-3 z-10 text-slate-400 group-hover:text-slate-700"
          />
          <input
            type="text"
            value={url}
            className="relative w-full rounded bg-slate-200/80 py-2.5 pl-8 pr-3 text-sm text-slate-700 focus:outline-none"
            placeholder="Inset link, image, or just plain text..."
            onChange={(e) => {
              setUrl(e.target.value)
            }}
            onKeyUp={addBookmark}
          />
        </div>
        {bookmarks.length > 0 && (
          <div className="mb-3 mt-10 flex items-center text-slate-500">
            <p className="text-xs font-medium">Inbox</p>
            <button
              className="-mr-1 ml-auto rounded p-1 hover:bg-slate-100"
              onClick={() => {
                sortBookmarks()
              }}
            >
              <Sort size={15} />
            </button>
          </div>
        )}
        <div className="flex w-full select-none flex-col font-[450]">
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
    </section>
  )
}

export default Bookmarks
