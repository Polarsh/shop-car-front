import RangeSliderComponent from './Form/RangeSlider'
import { formatToKilometers } from '../utils/formatCarData'

import SelectComponent from './Form/Select'
import InputPriceComponent from './Form/InputPrice'
import CheckBoxComponent from './Form/CheckBox'
import LabelComponent from './Form/_Label'

export default function FiltersComponent({
  filters,
  handleFilterChange,
  resetFilters,
  brandList,
  fuelList,
  transmissionList,
  bodyList,
}) {
  const handleSliderChange = field => (event, newValue) => {
    handleFilterChange(field, newValue)
  }

  return (
    <div className='space-y-6 border bg-white p-4'>
      <SelectComponent
        label={'Marca'}
        value={filters.brand}
        options={brandList}
        onSelect={newValue => handleFilterChange('brand', newValue)}
      />

      <InputPriceComponent
        label={'Precio mínimo'}
        id={'priceMin'}
        value={filters.priceMin}
        onChange={e => handleFilterChange('priceMin', e.target.value)}
      />
      <InputPriceComponent
        label={'Precio máximo'}
        id={'priceMax'}
        value={filters.priceMax}
        onChange={e => handleFilterChange('priceMax', e.target.value)}
      />

      <RangeSliderComponent
        label='Año'
        value={filters.yearRange}
        onChange={handleSliderChange('yearRange')}
        min={2000}
        max={2025}
        step={1}
      />

      <RangeSliderComponent
        label='Kilómetros'
        value={filters.mileageRange}
        onChange={handleSliderChange('mileageRange')}
        min={0}
        max={filters.mileageRange[1] + 30000}
        step={1000}
        formatValues={formatToKilometers}
      />

      {/* Transmisión */}
      <div>
        <LabelComponent htmlFor={'transmissions'} label={'Transmisión'} />
        <div className='space-y-2 mt-2'>
          {transmissionList.map(transmission => (
            <CheckBoxComponent
              key={transmission}
              id={transmission}
              name='transmissions'
              value={transmission}
              checked={filters.transmissions.includes(transmission)}
              onChange={e => {
                const value = e.target.value
                const isChecked = e.target.checked
                handleFilterChange(
                  'transmissions',
                  isChecked
                    ? [...filters.transmissions, value]
                    : filters.transmissions.filter(t => t !== value)
                )
              }}
              label={transmission}
            />
          ))}
        </div>
      </div>

      {/* Combustible */}
      <div>
        <LabelComponent htmlFor={'fuels'} label={'Combustible'} />
        <div className='space-y-2 mt-2'>
          {fuelList.map(fuel => (
            <CheckBoxComponent
              key={fuel}
              id={fuel}
              name='fuels'
              value={fuel}
              checked={filters.fuels.includes(fuel)}
              onChange={e => {
                const value = e.target.value
                const isChecked = e.target.checked
                handleFilterChange(
                  'fuels',
                  isChecked
                    ? [...filters.fuels, value]
                    : filters.fuels.filter(f => f !== value)
                )
              }}
              label={fuel}
            />
          ))}
        </div>
      </div>

      {/* Carrocería */}
      <div>
        <LabelComponent htmlFor={'bodies'} label={'Carrocerías'} />
        <div className='space-y-2 mt-2'>
          {bodyList.map(body => (
            <CheckBoxComponent
              key={body}
              id={body}
              name='bodies'
              value={body}
              checked={filters.bodies.includes(body)}
              onChange={e => {
                const value = e.target.value
                const isChecked = e.target.checked
                handleFilterChange(
                  'bodies',
                  isChecked
                    ? [...filters.bodies, value]
                    : filters.bodies.filter(b => b !== value)
                )
              }}
              label={body}
            />
          ))}
        </div>
      </div>

      <button
        type='button'
        onClick={resetFilters}
        className='bg-red-500 text-white p-2 rounded'>
        Limpiar filtros
      </button>
    </div>
  )
}
