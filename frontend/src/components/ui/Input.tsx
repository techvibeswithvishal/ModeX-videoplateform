import { InputHTMLAttributes } from 'react'

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
    />
  )
}
