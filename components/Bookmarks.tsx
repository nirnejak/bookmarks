"use client"
import * as React from "react"

import { Plus, Sort } from "akar-icons"
import { motion, Reorder } from "framer-motion"
import { v4 as uuidv4 } from "uuid"
import { toast } from "sonner"

import copyToClipboard from "utils/copyToClipboard"
import getUrlFavicon from "utils/getUrlFavicon"
import isValidURL from "utils/isValidURL"
import { createClient } from "utils/supabase/client"

import BookmarkRow from "components/BookmarkRow"

interface Props {
  defaultBookmarks: any[]
}

const Bookmarks: React.FC<Props> = ({ defaultBookmarks }) => {
  let supabase

  React.useEffect(() => {
    supabase = createClient()
    return () => {
      supabase = null
    }
  })
  const [url, setUrl] = React.useState("")

  const [bookmarks, setBookmarks] = React.useState<any[]>(defaultBookmarks)

  const addBookmark = async (e: React.KeyboardEvent): Promise<void> => {
    if (e.key === "Enter") {
      if (url.length === 0) return

      if (!isValidURL(url)) {
        toast.error("Please enter a valid URL")
        return
      }

      const { data: newBookmark, error } = await supabase
        .from("bookmarks")
        .insert({
          id: uuidv4(),
          title: url,
          url: url,
          image_url: getUrlFavicon(url),
        })
        .select()

      if (error) {
        console.log(error)
        toast.error(error.message)
      } else {
        setBookmarks((currentBookmarks) => [
          ...newBookmark,
          ...currentBookmarks,
        ])
        setUrl("")
      }
    }
  }

  const sortBookmarks = (): void => {
    setBookmarks((bookmarks) => {
      const sortedBookmarks = bookmarks
      sortedBookmarks.sort((bk1, bk2) => {
        if (bk1.title > bk2.title) {
          return 1
        } else if (bk1.title < bk2.title) {
          return -1
        }
        return 0
      })
      return sortedBookmarks
    })
  }

  const editBookmark = (id: number): void => {
    // TODO: Update bookmark in local
    // TODO: Update bookmark item in supabase
    toast("Bookmark updated")
  }

  const deleteBookmark = async (id: number): Promise<void> => {
    // TODO: replace window.confirm with custom modal or hold to delete
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this bookmark?"
    )
    if (!isConfirmed) return

    const { error } = await supabase.from("bookmarks").delete().eq("id", id)

    if (error) {
      console.log(error)
      toast.error(error.message)
    } else {
      setBookmarks((bookmarks) =>
        bookmarks.filter((bookmark) => bookmark.id !== id)
      )
      toast("Bookmark deleted")
    }
  }

  return (
    <>
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
              placeholder="Inset link..."
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
                  copyLink={copyToClipboard}
                  editBookmark={editBookmark}
                  deleteBookmark={deleteBookmark}
                />
              ))}
            </Reorder.Group>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Bookmarks
