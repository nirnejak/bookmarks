"use client"
import * as React from "react"

import { Pencil, TrashBin, DragVerticalFill, Copy } from "akar-icons"
import { Reorder, useDragControls, useMotionValue } from "framer-motion"
import Link from "next/link"

interface Props {
  bookmark: any
  copyLink: (link: string) => void
  editBookmark: (id: number) => void
  deleteBookmark: (id: number) => void
}

const BookmarkRow: React.FC<Props> = ({
  bookmark,
  copyLink,
  editBookmark,
  deleteBookmark,
}) => {
  const y = useMotionValue(0)
  const dragControls = useDragControls()

  const style = { y }

  return (
    <Reorder.Item
      value={bookmark}
      dragListener={false}
      dragControls={dragControls}
    >
      <div className="group -mx-2 flex items-center rounded p-1">
        <Link
          target="_blank"
          href={bookmark.url}
          className="my-0 flex items-center gap-1 truncate p-1 text-sm text-slate-700 hover:text-slate-900"
        >
          {bookmark.image_url !== "" && (
            <img
              src={bookmark.image_url}
              alt={bookmark.title}
              className="w-4"
            />
          )}
          <span>{bookmark.title}</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden group-hover:flex">
            <button
              className="rounded p-1 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
              onClick={() => {
                copyLink(bookmark.url)
              }}
            >
              <Copy size={17} />
            </button>
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
          <div
            className="cursor-grab text-slate-400"
            style={style as any}
            onPointerDown={(e) => {
              dragControls.start(e)
            }}
          >
            <DragVerticalFill size={15} />
          </div>
        </div>
      </div>
    </Reorder.Item>
  )
}

export default BookmarkRow
