import classNames from 'classnames'
import { Checkbox } from './Checkbox'
import { Player, PlayerProps } from './Player'

interface PlayerCardProps extends PlayerProps {
  isSelected: boolean
}

interface Props {
  player: PlayerCardProps
  onCheck: () => void
}

export function PlayerCard({ player, onCheck }: Props) {
  return (
    <div
      className={classNames(
        'group flex items-center justify-between w-full bg-neutral-800 p-4 rounded-sm border',
        {
          'border-yellow-500': player.isSelected,
          'border-neutral-800': !player.isSelected,
        },
      )}
    >
      <div className="flex flex-1">
        <Player
          avatarUrl={player.avatarUrl}
          name={player.name}
          isGoalkeeper={player.isGoalkeeper}
          score={player.score}
        />
      </div>

      <span className="opacity-0 mr-5 text-stone-600 group-hover:opacity-100">
        Clique no checkbox para {player.isSelected ? 'desmarcar' : 'selecionar'}
      </span>

      <Checkbox checked={player.isSelected} onCheckedChange={onCheck} />
    </div>
  )
}
