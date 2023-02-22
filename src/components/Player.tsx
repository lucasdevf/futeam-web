import gloveSvg from '@/assets/glove.svg'
import classNames from 'classnames'
import Image from 'next/image'

export interface PlayerProps {
  avatarUrl: string
  name: string
  score: number
  isGoalkeeper?: boolean
}

export function Player({
  avatarUrl,
  name,
  score,
  isGoalkeeper = false,
}: PlayerProps) {
  return (
    <div className="flex items-center gap-5">
      <Image
        src={
          avatarUrl ??
          'https://images.unsplash.com/photo-1610736342165-4eeb4aef66ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        }
        alt=""
        width={64}
        height={64}
        className="rounded-full w-16 h-16 object-cover"
        quality={100}
      />

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <span className="text-white font-medium">{name}</span>

          {isGoalkeeper && <Image src={gloveSvg} alt="" />}
        </div>
        <span
          className={classNames('text-sm font-medium', {
            'text-red-500': score >= 1 && score <= 3,
            'text-yellow-500': score >= 4 && score <= 6,
            'text-green-500': score >= 7 && score <= 10,
          })}
        >
          Nível {score}
        </span>
      </div>
    </div>
  )
}
