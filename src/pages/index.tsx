import * as DialogRadix from '@radix-ui/react-dialog'
import Image from 'next/image'

import logoSvg from '@/assets/logo.svg'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { NewPlayer } from '@/components/NewPlayer'
import { PlayerCard } from '@/components/PlayerCard'
import { RadioButton } from '@/components/RadioButton'
import { Result } from '@/components/Result'
import Head from 'next/head'
import { DiceSix } from 'phosphor-react'
import { useState } from 'react'

export default function Home() {
  const [players, setPlayers] = useState([
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
      isGoalkeeper: true,
      isSelected: false,
    },
  ])

  function handleCheck(name: string) {
    setPlayers((prevState) =>
      prevState.map((player) => {
        if (player.name === name) {
          return {
            ...player,
            isSelected: !player.isSelected,
          }
        }

        return player
      }),
    )
  }

  return (
    <div className="flex flex-col max-w-[1366px] mx-auto pb-10">
      <Head>
        <title>Futeam | Novo sorteio</title>
      </Head>

      <header className="flex items-center justify-center p-14">
        <Image src={logoSvg} alt="" />
      </header>

      <main>
        <Heading
          title="Novo sorteio"
          description="Realize o sorteio para escolher os times do próximo racha"
        />

        <section className="mt-16">
          <Heading
            title="Como o sorteio deverá ser realizado?"
            description="Se escolher equilibrado, o sistema irá manter os times equilibrados pela pontuação dos jogadores selecionados"
            size="sm"
          />

          <div className="flex items-center gap-5 mt-3">
            <RadioButton options={['Aleatoriamente', 'Equilibrado']} />
          </div>
        </section>

        <section className="mt-16">
          <header className="flex items-center justify-between">
            <Heading
              title="Escolha os jogadores participantes do sorteio"
              description="Você deverá selecionar no mínimo 10 jogadores para realizar o sorteio"
              size="sm"
            />

            <NewPlayer />
          </header>

          <ul className="flex flex-col gap-5 mt-5">
            {players.map((player) => (
              <PlayerCard
                key={player.name}
                player={{
                  avatarUrl: player.avatarUrl,
                  name: player.name,
                  score: player.score,
                  isGoalkeeper: player.isGoalkeeper,
                  isSelected: player.isSelected,
                }}
                onCheck={() => handleCheck(player.name)}
              />
            ))}
          </ul>
        </section>

        <footer className="mt-5">
          <DialogRadix.Root>
            <DialogRadix.Trigger asChild>
              <Button
                icon={<DiceSix size={24} weight="fill" />}
                title="Sortear"
                variant="success"
              />
            </DialogRadix.Trigger>

            <Result />
          </DialogRadix.Root>
        </footer>
      </main>
    </div>
  )
}
