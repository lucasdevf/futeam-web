import * as SliderRadix from '@radix-ui/react-slider'
import classNames from 'classnames'
import { useState } from 'react'

interface Props {
  label: string
}

export function Slider({ label }: Props) {
  const [value, setValue] = useState(0)

  return (
    <div className="flex flex-col gap-3">
      <label className="text-white font-medium">{label}</label>
      <div>
        <div>
          <SliderRadix.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            min={0}
            max={10}
            step={1}
            onValueChange={(valueSlider) => setValue(valueSlider[0])}
          >
            <SliderRadix.Track className="bg-zinc-700 relative rounded-full h-[3px] w-full">
              <SliderRadix.Range
                className={classNames('absolute  rounded-full h-full', {
                  'bg-red-500': value >= 0 && value <= 3,
                  'bg-yellow-500': value >= 4 && value <= 6,
                  'bg-green-500': value >= 7 && value <= 10,
                })}
              />
            </SliderRadix.Track>

            <SliderRadix.Thumb
              className={classNames(
                'flex items-center justify-center w-7 h-7 rounded-full',
                {
                  'bg-red-500': value >= 0 && value <= 3,
                  'bg-yellow-500': value >= 4 && value <= 6,
                  'bg-green-500': value >= 7 && value <= 10,
                },
              )}
            >
              <span className="text-sm font-medium text-white">
                {value !== 0 && value !== 10 ? value : ''}
              </span>
            </SliderRadix.Thumb>
          </SliderRadix.Root>
        </div>

        <footer className="flex items-center justify-between mt-1">
          <span className="text-white font-medium ml-2">0</span>
          <span className="text-white font-medium mr-2">10</span>
        </footer>
      </div>
    </div>
  )
}
