import { Button } from '@/components/Button'
import { api } from '@/services/api'
import * as DialogRadix from '@radix-ui/react-dialog'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { Checkbox } from './Checkbox'
import { Dialog } from './Dialog'
import { Heading } from './Heading'
import { Input } from './Input'
import { Slider } from './Slider'

interface ValueProps {
  name: string
  score: number
  isGoalkeeper: boolean
}

export function NewPlayer() {
  const queryClient = useQueryClient()

  const [values, setValues] = useState({} as ValueProps)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValues((prevState) => ({ ...prevState, name: e.target.value }))
  }

  function handleSlide(valueSlider: number) {
    setValues((prevState) => ({ ...prevState, score: valueSlider }))
  }

  function handleCheck() {
    setValues((prevState) => ({
      ...prevState,
      isGoalkeeper: !prevState.isGoalkeeper,
    }))
  }

  const [isLoading, setIsLoading] = useState(false)

  async function handleCreate(e: FormEvent) {
    e.preventDefault()

    setIsLoading(true)

    try {
      const { name, score, isGoalkeeper } = values

      await api.post('/players', {
        name,
        score,
        is_goalkeeper: isGoalkeeper ?? false,
      })

      toast.success('Jogador cadastrado com sucesso.')

      setValues({
        name: '',
        score: 0,
        isGoalkeeper: false,
      })

      await queryClient.refetchQueries(['players'])
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DialogRadix.Root>
      <DialogRadix.Trigger>
        <Button title="Novo jogador" />
      </DialogRadix.Trigger>

      <Dialog>
        <div className="w-96">
          <Heading title="Novo jogador" />

          <form
            autoComplete="off"
            className="flex flex-col gap-5 mt-5"
            onSubmit={handleCreate}
          >
            <Input
              id="name"
              label="Nome"
              name="name"
              placeholder="Digite o nome do jogador"
              value={values.name}
              onChange={handleChange}
              required
            />

            <Slider
              label="Nível do jogador"
              valueSlider={values.score ?? 0}
              onValueChange={(valueSlider) => handleSlide(valueSlider[0])}
            />

            <Checkbox
              id="isGoalkeeper"
              label="Goleiro"
              checked={values.isGoalkeeper}
              onCheckedChange={handleCheck}
            />

            <footer className="flex items-center justify-end gap-5 mt-5">
              <DialogRadix.Close>
                <Button
                  title="Cancelar"
                  variant="secondary"
                  type="button"
                  disabled={isLoading}
                />
              </DialogRadix.Close>
              <Button title="Cadastrar" isLoading={isLoading} />
            </footer>
          </form>
        </div>
      </Dialog>
    </DialogRadix.Root>
  )
}
