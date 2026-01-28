"use client"
import * as React from "react"

import { Info } from "akar-icons"
import Link from "next/link"
import { toast } from "sonner"

interface IFormState {
  name: string
  email: string
  password: string
}

const defaultFormState: IFormState = { name: "", email: "", password: "" }

const RegisterForm: React.FC = () => {
  const [formState, setFormState] = React.useState<IFormState>(defaultFormState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    // TODO: signup user with better auth
    const error = { message: "Registration failed " } // TODO: replace with actual error from signup operation
    const user = { id: 1, ...formState } // TODO: replace with actual user from signup operation

    if (error !== null) {
      console.log(error)
      toast.error(error.message as string)
    } else {
      console.log(user)
      toast("Successfully registered")
      setFormState(defaultFormState)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-3.5 flex min-w-62.5 flex-col gap-2.5"
    >
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formState.name}
        onChange={handleChange}
        className="
          w-full rounded-md bg-slate-100 px-3.5 py-2 text-sm
          focus:outline-0
        "
      />
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={formState.email}
        onChange={handleChange}
        className="
          w-full rounded-md bg-slate-100 px-3.5 py-2 text-sm
          focus:outline-0
        "
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formState.password}
        onChange={handleChange}
        className="
          w-full rounded-md bg-slate-100 px-3.5 py-2 text-sm
          focus:outline-0
        "
      />
      <button
        type="submit"
        className="
          w-full rounded-md bg-slate-700 px-3.5 py-2 text-sm text-slate-100
          focus:outline-0
        "
      >
        Register
      </button>
      <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
        <Info size={14} />
        By proceeding with registration, you are agreeing to our{" "}
        <Link
          href={"/terms-and-conditions/"}
          className="
            underline
            hover:text-slate-800
          "
        >
          terms and conditions
        </Link>
        .
      </p>
    </form>
  )
}

export default RegisterForm
