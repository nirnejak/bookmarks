import * as React from "react"

import RegisterForm from "@/components/RegisterForm"

interface Props {}

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
