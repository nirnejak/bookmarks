import * as React from "react"

import { type Metadata } from "next"

import RegisterForm from "@/components/RegisterForm"
import generateMetadata from "@/utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Login | Bookmarks",
  description: "Signup and get started on Bookmarks",
})

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col">
        <p className="mb-7 font-semibold">Login</p>
        <RegisterForm />
      </div>
    </div>
  )
}

export default LoginPage
