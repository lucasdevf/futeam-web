import * as DialogRadix from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Dialog({ children }: Props) {
  return (
    <DialogRadix.Portal>
      <DialogRadix.Overlay className="fixed inset-0 bg-neutral-900 opacity-60 z-100" />

      <DialogRadix.Content className="bg-neutral-800 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-7 rounded-md max-h-[80vh]">
        {children}
      </DialogRadix.Content>
    </DialogRadix.Portal>
  )
}
