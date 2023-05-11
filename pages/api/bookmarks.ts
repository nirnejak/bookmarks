import { type NextApiRequest, type NextApiResponse } from "next"

import { sql, type QueryResult, type QueryResultRow } from "@vercel/postgres"

const addBookmark = async (
  id: string,
  title: string,
  link: string,
  icon: string
): Promise<QueryResult<QueryResultRow>> => {
  return await sql`INSERT INTO bookmarks(id, title, link, icon) VALUES (${id}, ${title}, ${link}, ${icon})`
}

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  switch (request.method) {
    case "POST":
      try {
        await addBookmark(
          request.body.id,
          request.body.title,
          request.body.link,
          request.body.icon
        )
        response.status(201).json({ message: "Bookmark Added" })
      } catch (err) {
        console.log(err)
        response.status(500).json({ message: "Unable to add Bookmark" })
      }
      break
    default:
      response.status(405)
  }
}

export default handler
