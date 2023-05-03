import * as React from "react"
import { useInView } from "react-intersection-observer"

import { Pencil, Plus, TrashBin, TrashCan } from "akar-icons"
import { motion, useAnimation } from "framer-motion"
import Head from "next/head"
import Link from "next/link"

import { getUrlMetadata } from "../utils/getUrlMetadata"

const Home: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const [url, setUrl] = React.useState("")

  const [bookmarks, setBookmarks] = React.useState([
    {
      id: 1,
      title: "Portfolio website",
      link: "https://svg-animations-gallery.vercel.app/",
      icon: "",
    },
    {
      id: 2,
      title: "SVG Animations",
      link: "https://svg-animations-gallery.vercel.app/",
      icon: "",
    },
    {
      id: 3,
      title: "Portfolio website",
      link: "https://svg-animations-gallery.vercel.app/",
      icon: "",
    },
    {
      id: 4,
      title: "SVG Animations",
      link: "https://svg-animations-gallery.vercel.app/",
      icon: "",
    },
    {
      id: 5,
      title: "Portfolio website",
      link: "https://svg-animations-gallery.vercel.app/",
      icon: "",
    },
  ])

  React.useEffect(() => {
    if (inView) {
      controls.start("visible").catch((err) => {
        console.log(err)
      })
    }
  }, [controls, inView])

  const addBookmark = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      const newBookmark = {
        id: bookmarks.length,
        title: url,
        link: url,
        icon: "",
      }
      setBookmarks([newBookmark, ...bookmarks])
      fillMetadata(0, url)
      setUrl("")
    }
  }

  const editBookmark = (id: string): void => {
    // TODO: Edit boomark
  }

  const deleteBookmark = (id: string): void => {
    // TODO: Delete boomark
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

  const variants = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 10 },
  }

  return (
    <div>
      <Head>
        <title>Bookmarks</title>
        <meta name="description" content="An elegant bookmarking tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0, duration: 0.15, type: "spring" }}
        className="flex justify-center pt-20 text-slate-700 md:pt-40"
      >
        <div className="w-[500px]">
          <h1 className="mb-1 text-sm text-slate-700">Bookmarks</h1>
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
          <p className="mb-3 mt-10 text-xs text-slate-500">Inbox</p>
          <div className="flex w-full flex-col">
            {bookmarks.map((bookmark, index) => (
              <div
                className="group -mx-2 flex items-center rounded p-2 hover:bg-slate-200"
                key={index}
              >
                <Link
                  target="_blank"
                  href={bookmark.link}
                  className="my-0 text-sm"
                >
                  {bookmark.title}
                </Link>
                <div className="ml-auto hidden gap-1.5 group-hover:flex">
                  <button
                    className="text-slate-500 hover:text-slate-700"
                    onClick={() => {
                      editBookmark(bookmark.id)
                    }}
                  >
                    <Pencil size={17} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => {
                      deleteBookmark(bookmark.id)
                    }}
                  >
                    <TrashBin size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.main>
    </div>
  )
}

export default Home
