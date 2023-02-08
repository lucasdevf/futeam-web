import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
}

export function Input({ id, label, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-white font-medium" htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        className="flex flex-1 outline-0 bg-zinc-900 p-4 rounded-md text-gray-300 placeholder:text-zinc-700 border border-zinc-900 focus:border-yellow-500 hover:border-gray-500"
        {...rest}
      />
    </div>
  )
}
