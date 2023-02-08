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
        src={avatarUrl}
        alt=""
        width={64}
        height={64}
        className="rounded-full w-16 h-16 object-cover"
        quality={100}
      />

      <div>
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
