import classNames from 'classnames'
import { Button } from './Button'
import { Dialog } from './Dialog'
import { Heading } from './Heading'
import { Player } from './Player'

export function Result() {
  const teams = [
    {
      name: 'A',
      players: [
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
          name: 'Gabriel Jalles',
          score: 5,
          isGoalkeeper: true,
          isSelected: true,
        },
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1610736342165-4eeb4aef66ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Lucas Ferreira',
          score: 2,
          isGoalkeeper: false,
          isSelected: false,
        },
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1610736342326-b59eb016ba95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Adriano Brito',
          score: 10,
          isGoalkeeper: false,
          isSelected: false,
        },
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1610736342326-b59eb016ba95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Adriano Brito',
          score: 10,
          isGoalkeeper: false,
          isSelected: false,
        },
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1610736342326-b59eb016ba95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Adriano Brito',
          score: 10,
          isGoalkeeper: false,
          isSelected: false,
        },
      ],
    },
    {
      name: 'B',
      players: [
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
          name: 'Gabriel Jalles',
          score: 5,
          isGoalkeeper: true,
          isSelected: true,
        },
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1610736342165-4eeb4aef66ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Lucas Ferreira',
          score: 2,
          isGoalkeeper: false,
          isSelected: false,
        },
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1610736342326-b59eb016ba95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Adriano Brito',
          score: 10,
          isGoalkeeper: false,
          isSelected: false,
        },
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1610736342326-b59eb016ba95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Adriano Brito',
          score: 10,
          isGoalkeeper: false,
          isSelected: false,
        },
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1610736342326-b59eb016ba95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Adriano Brito',
          score: 10,
          isGoalkeeper: false,
          isSelected: false,
        },
      ],
    },
    {
      name: 'C',
      players: [
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
          name: 'Gabriel Jalles',
          score: 5,
          isGoalkeeper: true,
          isSelected: true,
        },
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1610736342165-4eeb4aef66ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Lucas Ferreira',
          score: 2,
          isGoalkeeper: false,
          isSelected: false,
        },
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1610736342326-b59eb016ba95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Adriano Brito',
          score: 10,
          isGoalkeeper: false,
          isSelected: false,
        },
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1610736342326-b59eb016ba95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Adriano Brito',
          score: 10,
          isGoalkeeper: false,
          isSelected: false,
        },
        {
          avatarUrl:
            'https://images.unsplash.com/photo-1610736342326-b59eb016ba95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          name: 'Adriano Brito',
          score: 10,
          isGoalkeeper: false,
          isSelected: false,
        },
      ],
    },
  ]

  return (
    <Dialog>
      <div className="flex flex-col gap-10">
        <Heading
          title="Resultado do sorteio"
          description="Fique à vontade para movimentar os jogadores entre os times"
        />

        <main className="grid grid-cols-3 gap-20">
          {teams.map((team, index) => (
            <div className="flex flex-col gap-5" key={team.name}>
              <span
                className={classNames(
                  'flex items-center justify-center p-3 font-medium text-white rounded-full',
                  {
                    'bg-indigo-500': index === 0,
                    'bg-green-500': index === 1,
                    'bg-amber-500': index === 2,
                  },
                )}
              >
                TIME {team.name}
              </span>

              <div className="flex flex-col gap-5">
                {team.players.map((player) => (
                  <Player
                    key={player.name}
                    avatarUrl={player.avatarUrl}
                    name={player.name}
                    score={player.score}
                    isGoalkeeper={player.isGoalkeeper}
                  />
                ))}
              </div>
            </div>
          ))}
        </main>

        <footer className="flex justify-between">
          <Button title="Sortear novamente" variant="success" />

          <Button title="Finalizar" />
        </footer>
      </div>
    </Dialog>
  )
}
