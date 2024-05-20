const getUrlMetadata = async (
  url
): Promise<{ title: string; favicon: string }> => {
  const fallbackFaviconUrl = `https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`

  try {
    const response = await fetch(`/api/metadata/`, {
      method: "POST",
      body: JSON.stringify({ url: url }),
    })
    const { title, favicon } = await response.json()

    return { title, favicon }
  } catch (err) {
    return { title: url, favicon: fallbackFaviconUrl }
  }
}

export default getUrlMetadata
