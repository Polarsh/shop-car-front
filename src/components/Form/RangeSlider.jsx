import Slider from '@mui/material/Slider'
import LabelComponent from './_Label'

export default function RangeSliderComponent({
  label,
  value,
  onChange,
  min,
  max,
  step,
  formatValues,
}) {
  return (
    <div>
      <LabelComponent htmlFor={'rangeSlider'} label={label} />

      <Slider
        valueLabelDisplay='auto'
        getAriaLabel={() => `Rango de ${label}`}
        value={value}
        min={min}
        max={max}
        step={step}
        className='w-full text-primary'
        color=''
        onChange={onChange}
        getAriaValueText={() => `${value[0]} - ${value[1]}`}
      />
      <div className='flex justify-between text-xs'>
        <span>{formatValues ? formatValues(value[0]) : value[0]}</span>
        <span>{formatValues ? formatValues(value[1]) : value[1]}</span>
      </div>
    </div>
  )
}
