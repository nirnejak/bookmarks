import { type NextApiRequest, type NextApiResponse } from "next"

import { sql } from "@vercel/postgres"

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  const { rows } = await sql`SELECT * from bookmarks`

  response.send({
    result: rows,
  })
}

export default handler
