import * as DialogRadix from '@radix-ui/react-dialog'
import Image from 'next/image'

import logoSvg from '@/assets/logo.svg'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { NewPlayer } from '@/components/NewPlayer'
import { PlayerCard } from '@/components/PlayerCard'
import { PlayerLoading } from '@/components/PlayerLoading'
import { RadioButton } from '@/components/RadioButton'
import { Result } from '@/components/Result'
import { api } from '@/services/api'
import { AppError } from '@/utils/AppError'
import Head from 'next/head'
import { DiceSix } from 'phosphor-react'
import { useQuery } from 'react-query'

interface Player {
  id: string
  name: string
  score: number
  is_goalkeeper: boolean
  avatar_url: string
  created_at: string
}

export default function Home() {
  async function fetchPlayers() {
    const response = await api.get('/players')

    return response.data
  }

  const {
    data: players,
    error,
    isLoading,
  } = useQuery<Player[], AppError>('players', fetchPlayers)

  // function handleCheck(name: string) {
  //   setPlayers((prevState) =>
  //     prevState.map((player) => {
  //       if (player.name === name) {
  //         return {
  //           ...player,
  //           isSelected: !player.isSelected,
  //         }
  //       }

  //       return player
  //     }),
  //   )
  // }

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

          {error && <span className="text-red-500">{error.message}</span>}

          <ul className="flex flex-col gap-5 mt-5">
            {players?.map((player) => (
              <PlayerCard
                key={player.name}
                player={{
                  avatarUrl: player.avatar_url,
                  name: player.name,
                  score: player.score,
                  isGoalkeeper: player.is_goalkeeper,
                  isSelected: false,
                }}
                onCheck={() => {}}
              />
            ))}

            {isLoading && (
              <>
                <PlayerLoading />
                <PlayerLoading />
                <PlayerLoading />
                <PlayerLoading />
              </>
            )}
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
