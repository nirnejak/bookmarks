import * as React from "react"

import { GithubFill } from "akar-icons"

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-2 right-2 text-slate-700 hover:text-slate-900">
      <a href="http://github.com/nirnejak/bookmarks/" target="_blank">
        <GithubFill />
      </a>
    </footer>
  )
}

export default Footer
