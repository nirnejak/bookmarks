import * as React from "react"
import { type Metadata } from "next"

import generateMetadata from "utils/seo"

import RegisterForm from "components/RegisterForm"

interface Props {}

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Register | Bookmarks",
  description: "Signup and get started on Bookmarks",
})

const RegisterPage: React.FC<Props> = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <p className="font-semibold mb-7">Register</p>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
