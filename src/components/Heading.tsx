import classNames from 'classnames'

interface Props {
  title: string
  description?: string
  size?: 'lg' | 'sm'
}

export function Heading({ title, description, size = 'lg' }: Props) {
  return (
    <div
      className={classNames('flex flex-col', {
        'gap-2': size === 'lg',
        'gap-1': size === 'sm',
      })}
    >
      <h1
        className={classNames('text-white font-black', {
          'text-4xl': size === 'lg',
          'text-lg': size === 'sm',
        })}
      >
        {title}
      </h1>

      <span
        className={classNames('text-zinc-400', {
          'text-lg': size === 'lg',
          'text-sm': size === 'sm',
        })}
      >
        {description}
      </span>
    </div>
  )
}
