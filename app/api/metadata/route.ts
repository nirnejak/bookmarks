import { NextResponse } from "next/server"
import { JSDOM } from "jsdom"

export async function POST(request: Request) {
  const data = await request.json()
  const url = data.url

  if (typeof url !== "string") {
    return NextResponse.json({ message: "Invalid URL" }, { status: 400 })
  }

  const fallbackFaviconUrl = `https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`

  try {
    const response = await fetch(url)
    const html = await response.text()

    const dom = new JSDOM(html)
    const document = dom.window.document

    const title = document.querySelector("head > title")?.textContent || url

    let favicon = ""
    const faviconElement = document.querySelector(
      'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]'
    )
    if (faviconElement) {
      favicon = faviconElement.getAttribute("href") || ""
      if (favicon && !favicon.startsWith("http")) {
        const urlObject = new URL(url as string)
        favicon = new URL(favicon, urlObject.origin).href
      }
    } else {
      favicon = fallbackFaviconUrl
    }

    return NextResponse.json({ title, favicon })
  } catch (error) {
    console.error("Proxy error:", error)

    return NextResponse.json(
      { message: "Error Getting Metadata", error },
      { status: 500 }
    )
  }
}
