import * as React from "react"

import { type Metadata } from "next"

import RegisterForm from "@/components/RegisterForm"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Register | Bookmarks",
  description: "Signup and get started on Bookmarks",
})

const RegisterPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col">
        <p className="mb-7 font-semibold">Register</p>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
