"use client"
import * as React from "react"
import Link from "next/link"

import { Info } from "akar-icons"
import { toast } from "sonner"

import { createClient } from "utils/supabase/client"

interface IFormState {
  name: string
  email: string
  password: string
}

const defaultFormState: IFormState = {
  name: "",
  email: "",
  password: "",
}

interface Props {}

const RegisterForm: React.FC<Props> = () => {
  let supabase
  React.useEffect(() => {
    supabase = createClient()
    return () => {
      supabase = null
    }
  })

  const [formState, setFormState] = React.useState<IFormState>(defaultFormState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { user, error } = await supabase.auth.signUp(formState)

    if (error) {
      console.log(error)
      toast.error(error.message)
    } else {
      console.log(user)
      toast("Successfully registered")
      setFormState(defaultFormState)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2.5 min-w-[250px] mb-3.5"
    >
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formState.name}
        onChange={handleChange}
        className="px-3.5 py-2 bg-slate-100 rounded-md text-sm w-full focus:outline-0"
      />
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={formState.email}
        onChange={handleChange}
        className="px-3.5 py-2 bg-slate-100 rounded-md text-sm w-full focus:outline-0"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formState.password}
        onChange={handleChange}
        className="px-3.5 py-2 bg-slate-100 rounded-md text-sm w-full focus:outline-0"
      />
      <button
        type="submit"
        className="px-3.5 py-2 bg-slate-700 text-slate-100 rounded-md text-sm w-full focus:outline-0"
      >
        Register
      </button>
      <p className="text-sm mt-2 text-slate-500 flex gap-1 items-center">
        <Info size={14} />
        By proceeding with registration, you are agreeing to our{" "}
        <Link
          href={"/terms-and-conditions/"}
          className="underline hover:text-slate-800"
        >
          terms and conditions
        </Link>
        .
      </p>
    </form>
  )
}

export default RegisterForm
