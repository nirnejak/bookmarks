import { type NextApiRequest, type NextApiResponse } from "next"

import { sql } from "@vercel/postgres"

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  if (request.method === "GET") {
    const { rows } = await sql`SELECT * from bookmarks`

    response.json({
      result: rows,
    })
  } else {
    response.send(405)
  }
}

export default handler
