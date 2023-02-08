import { Button } from '@/components/Button'
import * as DialogRadix from '@radix-ui/react-dialog'
import { Checkbox } from './Checkbox'
import { Dialog } from './Dialog'
import { Heading } from './Heading'
import { Input } from './Input'
import { Slider } from './Slider'

export function NewPlayer() {
  return (
    <DialogRadix.Root>
      <DialogRadix.Trigger>
        <Button title="Novo jogador" />
      </DialogRadix.Trigger>

      <Dialog>
        <div className="w-96">
          <Heading title="Novo jogador" />

          <form autoComplete="off" className="flex flex-col gap-5 mt-5">
            <Input
              id="name"
              label="Nome"
              placeholder="Digite o nome do jogador"
            />

            <Slider label="Nível do jogador" />

            <Checkbox id="isGoalkeeper" label="Goleiro" />

            <footer className="flex items-center justify-end gap-5 mt-5">
              <Button title="Cancelar" variant="secondary" type="button" />
              <Button title="Cadastrar" type="button" />
            </footer>
          </form>
        </div>
      </Dialog>
    </DialogRadix.Root>
  )
}
