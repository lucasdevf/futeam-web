import classNames from 'classnames'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ScaleLoader } from 'react-spinners'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  title: string
  variant?: 'primary' | 'success' | 'secondary'
  isLoading?: boolean
}

export function Button({
  icon,
  title,
  variant = 'primary',
  isLoading,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      disabled={isLoading || rest.disabled}
      className={classNames(
        'flex items-center gap-1 text-white font-bold p-3 rounded-[4px] disabled:opacity-70 disabled:cursor-not-allowed',
        {
          'bg-amber-500 hover:not-disabled:bg-amber-600': variant === 'primary',
          'bg-green-600 hover:not-disabled:bg-green-700': variant === 'success',
          'bg-gray-500 hover:not-disabled:bg-gray-600': variant === 'secondary',
        },
      )}
    >
      {isLoading ? (
        <ScaleLoader color="white" height={20} />
      ) : (
        <>
          {icon}
          {title}
        </>
      )}
    </button>
  )
}
