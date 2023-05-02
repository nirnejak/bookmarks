import urlMetadata from "url-metadata"

export const getUrlMetadata = async (url, email): Promise<any> => {
  return await urlMetadata(url, {
    requestHeaders: {
      "User-Agent": "foo",
      From: email,
    },
  })
}
