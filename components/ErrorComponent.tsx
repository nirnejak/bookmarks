import * as React from "react"

interface Props {
  type: number
}

interface IContent {
  title: string
  description: string
}

const ErrorComponent: React.FC<Props> = ({ type }) => {
  const content = React.useMemo<IContent>(() => {
    switch (type) {
      case 404:
        return {
          title: "Not found",
          description: "Page you're looking for does not exist.",
        }
      case 500:
      default:
        return {
          title: "Something went wrong",
          description: "Please try again in some time.",
        }
    }
  }, [type])

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center ">
        <h1 className="mb-1 font-semibold text-slate-700">{content.title}</h1>
        <p className="text-slate-500 text-xs">{content.description}</p>
      </div>
    </div>
  )
}

export default ErrorComponent
