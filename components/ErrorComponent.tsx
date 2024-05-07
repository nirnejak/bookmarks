import * as React from "react"

interface Props {
  type: number
}

const ErrorComponent: React.FC<Props> = ({ type }) => {
  switch (type) {
    case 404:
      return (
        <div className="h-screen flex justify-center items-center">
          <div className="text-center ">
            <h1 className="mb-3 font-semibold text-slate-700">Not found</h1>
            <p className="text-slate-500">
              Page you're looking for does not exist.
            </p>
          </div>
        </div>
      )
    case 500:
    default:
      return (
        <div className="h-screen flex justify-center items-center">
          <div className="text-center ">
            <h1 className="mb-3 font-semibold text-slate-700">
              Something went wrong
            </h1>
            <p className="text-slate-500">Please try again in some time.</p>
          </div>
        </div>
      )
  }
}

export default ErrorComponent
