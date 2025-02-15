"use client"
import * as React from "react"

import { Plus, Sort } from "akar-icons"
import { motion, Reorder } from "motion/react"
import { toast } from "sonner"
import { v4 as uuidv4 } from "uuid"

import BookmarkRow from "@/components/BookmarkRow"
import copyToClipboard from "@/utils/copyToClipboard"
import getUrlMetadata from "@/utils/getUrlMetadata"
import isValidURL from "@/utils/isValidURL"
import { createClient } from "@/utils/supabase/client"

interface Props {
  defaultBookmarks: any[]
}

let supabase

const Bookmarks: React.FC<Props> = ({ defaultBookmarks }) => {
  React.useEffect(() => {
    supabase = createClient()
    return () => {
      supabase = null
    }
  })

  const [bookmarks, setBookmarks] = React.useState<any[]>(defaultBookmarks)
  const [url, setUrl] = React.useState("")
  const [sortField, setSortField] = React.useState("")

  const addBookmark = async (e: React.KeyboardEvent): Promise<void> => {
    if (e.key === "Enter") {
      if (url.length === 0) return

      if (!isValidURL(url)) {
        toast.error("Please enter a valid URL")
        return
      }

      const payload = { id: uuidv4(), title: url, url, image_url: "" }
      setUrl("")

      const { title, favicon } = await getUrlMetadata(payload.url)
      payload.title = title
      payload.image_url = favicon

      const { data: newBookmark, error } = await supabase
        .from("bookmarks")
        .insert(payload)
        .select()

      if (error !== null) {
        console.log(error)
        toast.error(error.message as string)
      } else {
        setBookmarks((currentBookmarks) => [
          ...newBookmark,
          ...currentBookmarks,
        ])
      }
    }
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

    if (error !== null) {
      console.log(error)
      toast.error(error.message as string)
    } else {
      setBookmarks((bookmarks) =>
        bookmarks.filter((bookmark) => bookmark.id !== id)
      )
      toast("Bookmark deleted")
    }
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
            className="relative w-full rounded-sm bg-slate-200/80 py-2.5 pl-8 pr-3 text-sm text-slate-700 focus:outline-hidden"
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
              className="-mr-1 ml-auto rounded-sm p-1 hover:bg-slate-100"
              onClick={() => {
                setSortField("title")
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
  )
}

export default Bookmarks
