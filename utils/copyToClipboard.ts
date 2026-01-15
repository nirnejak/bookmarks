import { toast } from "sonner"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const copyToClipboard = (link: any): void => {
  navigator.clipboard
    .writeText(link)
    // eslint-disable-next-line promise/always-return
    .then(() => {
      toast("Copied to clipboard")
    })
    .catch((error) => {
      toast.error("Unable to copy")
      console.log(error)
    })
}

export default copyToClipboard
