import * as RadioGroupRadix from '@radix-ui/react-radio-group'
interface Props {
  options: string[]
}

export function RadioButton({ options }: Props) {
  return (
    <RadioGroupRadix.Root className="flex items-center gap-10">
      {options.map((option) => (
        <div key={option} className="flex items-center gap-2">
          <RadioGroupRadix.Item
            id={option}
            value={option}
            className="bg-zinc-800 w-6 h-6 rounded-full"
          >
            <RadioGroupRadix.Indicator className="relative w-full h-full flex items-center justify-center after:w-[11px] after:h-[11px] after:bg-amber-500 after:content-[''] after:rounded-full" />
          </RadioGroupRadix.Item>

          <label className="text-white font-medium" htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
    </RadioGroupRadix.Root>
  )
}
