import { useState, useEffect, useMemo } from 'react'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import LabelComponent from './_Label'

export default function SelectComponent({ label, value, options, onSelect }) {
  const [selected, setSelected] = useState({ id: 'all', name: 'Todas' })

  // Memorizar las opciones para evitar recrearlas en cada renderizado
  const newOptions = useMemo(
    () => [{ id: 'all', name: 'Todas' }, ...options],
    [options]
  )

  // Sincronizar el estado seleccionado con el prop `value`
  useEffect(() => {
    const selectedOption = newOptions.find(option => option.name === value) || {
      id: 'all',
      name: 'Todas',
    }
    setSelected(selectedOption)
  }, [value, newOptions])

  const handleChange = selectedOption => {
    setSelected(selectedOption)
    onSelect(selectedOption.name)
  }

  return (
    <div>
      <Listbox value={selected} onChange={handleChange}>
        <LabelComponent htmlFor={'brand'} label={label} />
        <div className='relative mt-2'>
          <ListboxButton className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6'>
            <span className='block truncate'>{selected.name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                aria-hidden='true'
                className='h-5 w-5 text-gray-400'
              />
            </span>
          </ListboxButton>

          <ListboxOptions
            transition
            className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm'>
            {newOptions.map(option => (
              <ListboxOption
                key={option.id}
                value={option}
                className='group relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900 data-[focus]:bg-primary data-[focus]:text-white'>
                <span className='block truncate font-normal group-data-[selected]:font-semibold'>
                  {option.name}
                </span>

                <span className='absolute inset-y-0 left-0 flex items-center pl-1.5 text-primary group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
                  <CheckIcon aria-hidden='true' className='h-5 w-5' />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  )
}
