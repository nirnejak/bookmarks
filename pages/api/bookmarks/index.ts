import { type NextApiRequest, type NextApiResponse } from "next"

import { sql } from "@vercel/postgres"

interface BOOKMARK {
  id: number
  title: string
  link: string
  icon: string
}

const getBookmarks = async (): Promise<BOOKMARK[]> => {
  const { rows } = await sql`SELECT * from bookmarks`
  return rows as BOOKMARK[]
}

const addBookmark = async (
  id: number,
  title: string,
  link: string,
  icon: string
): Promise<void> => {
  try {
    await sql`INSERT INTO bookmarks VALUES("${id}", "${title}", "${link}", "${icon}")`
  } catch (err) {
    return err
  }
}

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  if (request.method === "GET") {
    const result = await getBookmarks()
    response.json({ result })
  } else if (request.method === "POST") {
    await addBookmark(
      request.body.id,
      request.body.title,
      request.body.link,
      request.body.icon
    )
    response.send(201)
  } else {
    response.send(405)
  }
}

export default handler
