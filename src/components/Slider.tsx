import * as SliderRadix from '@radix-ui/react-slider'
import classNames from 'classnames'

interface Props extends SliderRadix.SliderProps {
  label: string
  valueSlider: number
}

export function Slider({ label, valueSlider, ...rest }: Props) {
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
            {...rest}
          >
            <SliderRadix.Track className="bg-zinc-700 relative rounded-full h-[3px] w-full">
              <SliderRadix.Range
                className={classNames('absolute  rounded-full h-full', {
                  'bg-red-500': valueSlider >= 0 && valueSlider <= 3,
                  'bg-yellow-500': valueSlider >= 4 && valueSlider <= 6,
                  'bg-green-500': valueSlider >= 7 && valueSlider <= 10,
                })}
              />
            </SliderRadix.Track>

            <SliderRadix.Thumb
              className={classNames(
                'flex items-center justify-center w-7 h-7 rounded-full',
                {
                  'bg-red-500': valueSlider >= 0 && valueSlider <= 3,
                  'bg-yellow-500': valueSlider >= 4 && valueSlider <= 6,
                  'bg-green-500': valueSlider >= 7 && valueSlider <= 10,
                },
              )}
            >
              <span className="text-sm font-medium text-white">
                {valueSlider !== 0 && valueSlider !== 10 ? valueSlider : ''}
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
