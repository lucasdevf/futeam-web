import classNames from 'classnames'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  title: string
  variant?: 'primary' | 'success' | 'secondary'
}

export function Button({ icon, title, variant = 'primary', ...rest }: Props) {
  return (
    <button
      {...rest}
      className={classNames(
        'flex items-center gap-1 text-white font-bold p-3 rounded-[4px]',
        {
          'bg-amber-500 hover:bg-amber-600': variant === 'primary',
          'bg-green-600 hover:bg-green-700': variant === 'success',
          'bg-gray-500 hover:bg-gray-600': variant === 'secondary',
        },
      )}
    >
      {icon}
      {title}
    </button>
  )
}
