import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import colors from 'tailwindcss/colors'

interface Props extends CheckboxRadix.CheckboxProps {
  id?: string
  label?: string
}

export function Checkbox({ id, label, ...rest }: Props) {
  return (
    <div className="flex items-center gap-2">
      <CheckboxRadix.Root
        id={id}
        className="bg-zinc-900 w-[24px] h-[24px] rounded-md flex items-center justify-center"
        {...rest}
      >
        <CheckboxRadix.Indicator>
          <Check color={colors.yellow['500']} weight="bold" />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>

      {label && (
        <label htmlFor={id} className="text-white font-medium">
          {label}
        </label>
      )}
    </div>
  )
}
