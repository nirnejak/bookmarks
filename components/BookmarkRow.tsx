import * as React from "react"

import { Pencil, TrashBin } from "akar-icons"
import { Reorder } from "framer-motion"
import Link from "next/link"

import { type BOOKMARK } from "pages"

interface Props {
  bookmark: BOOKMARK
  editBookmark: (id: number) => void
  deleteBookmark: (id: number) => void
}

const BookmarkRow: React.FC<Props> = ({
  bookmark,
  editBookmark,
  deleteBookmark,
}) => {
  return (
    <Reorder.Item value={bookmark}>
      <div className="group -mx-2 flex cursor-move items-center rounded p-1 hover:bg-slate-100">
        <Link
          target="_blank"
          href={bookmark.link}
          className="my-0 truncate p-1 text-sm text-slate-700 hover:text-slate-900"
        >
          {bookmark.title}
        </Link>
        <div className="ml-auto hidden group-hover:flex">
          <button
            className="rounded p-1 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
            onClick={() => {
              editBookmark(bookmark.id)
            }}
          >
            <Pencil size={17} />
          </button>
          <button
            className="rounded p-1 text-red-400 transition-colors hover:bg-red-100 hover:text-red-600"
            onClick={() => {
              deleteBookmark(bookmark.id)
            }}
          >
            <TrashBin size={17} />
          </button>
        </div>
      </div>
    </Reorder.Item>
  )
}

export default BookmarkRow
