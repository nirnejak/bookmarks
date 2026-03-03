import { GithubFill } from "akar-icons"
import type * as React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="fixed right-2 bottom-2 text-slate-700 hover:text-slate-900">
      <a
        href="http://github.com/nirnejak/bookmarks/"
        target="_blank"
        rel="noopener"
      >
        <GithubFill />
      </a>
    </footer>
  )
}

export default Footer
