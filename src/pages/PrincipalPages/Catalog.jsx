import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { XMarkIcon, PlusIcon } from '@heroicons/react/20/solid'

import carList from '../../../db/cars.json'
import CarCardComponent from '../../components/cards/CarCard'
import FiltersComponent from '../../components/Filters'
import useFilter from '../../hooks/useFilters'

const initialFilters = {
  brand: 'Todas',
  priceMin: null,
  priceMax: null,
  yearRange: [2000, 2024],
  mileageRange: [0, 200000],
  transmissions: [],
  fuels: [],
  bodies: [],
}

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function CatalogPage() {
  const { brandList, fuelList, transmissionList, bodyList } = useFilter()
  const [filters, setFilters] = useState(initialFilters)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const navigate = useNavigate()
  const query = useQuery()

  useEffect(() => {
    const brand = query.get('brand') || 'Todas'
    const priceMin =
      query.get('priceMin') !== null ? parseInt(query.get('priceMin')) : null
    const priceMax =
      query.get('priceMax') !== null ? parseInt(query.get('priceMax')) : null
    const yearRange = [
      parseInt(query.get('yearMin')) || initialFilters.yearRange[0],
      parseInt(query.get('yearMax')) || initialFilters.yearRange[1],
    ]
    const mileageRange = [
      parseInt(query.get('mileageMin')) || initialFilters.mileageRange[0],
      parseInt(query.get('mileageMax')) || initialFilters.mileageRange[1],
    ]
    const transmissions = query.getAll('transmissions')
    const fuels = query.getAll('fuels')
    const bodies = query.getAll('bodies')

    setFilters({
      brand,
      priceMin,
      priceMax,
      yearRange,
      mileageRange,
      transmissions,
      fuels,
      bodies,
    })
  }, [])

  const updateURLParams = newFilters => {
    const urlParams = new URLSearchParams()

    if (newFilters.brand && newFilters.brand !== 'Todas') {
      urlParams.set('brand', newFilters.brand)
    }
    if (newFilters.priceMin !== null) {
      urlParams.set('priceMin', newFilters.priceMin)
    }
    if (newFilters.priceMax !== null) {
      urlParams.set('priceMax', newFilters.priceMax)
    }
    if (newFilters.yearRange[0] !== initialFilters.yearRange[0]) {
      urlParams.set('yearMin', newFilters.yearRange[0])
    }
    if (newFilters.yearRange[1] !== initialFilters.yearRange[1]) {
      urlParams.set('yearMax', newFilters.yearRange[1])
    }
    if (newFilters.mileageRange[0] !== initialFilters.mileageRange[0]) {
      urlParams.set('mileageMin', newFilters.mileageRange[0])
    }
    if (newFilters.mileageRange[1] !== initialFilters.mileageRange[1]) {
      urlParams.set('mileageMax', newFilters.mileageRange[1])
    }
    newFilters.transmissions.forEach(transmission =>
      urlParams.append('transmissions', transmission)
    )
    newFilters.fuels.forEach(fuel => urlParams.append('fuels', fuel))
    newFilters.bodies.forEach(body => urlParams.append('bodies', body))

    navigate({ search: urlParams.toString() })
  }

  const handleFilterChange = (field, value) => {
    const updatedFilters = { ...filters, [field]: value }
    setFilters(updatedFilters)
    updateURLParams(updatedFilters)
  }

  const resetFilters = () => {
    setFilters(initialFilters)
    updateURLParams(initialFilters)
  }

  const filteredList = carList.filter(car => {
    const {
      brand,
      priceMin,
      priceMax,
      yearRange,
      mileageRange,
      transmissions,
      fuels,
      bodies,
    } = filters

    const carYear = parseInt(car.carDetails.year)
    const carPrice = parseInt(car.carDetails.price)
    const carMileage = car.carDetails.mileage
    const carBrand = car.carDetails.brand
    const carTransmission = car.carDetails.transmission
    const carFuels = car.carDetails.fuel
    const carBody = car.carDetails.body

    const isBrandMatch = brand === 'Todas' ? true : carBrand === brand
    const isPriceMatch =
      (priceMin === null || carPrice >= priceMin) &&
      (priceMax === null || carPrice <= priceMax)

    const isYearMatch = carYear >= yearRange[0] && carYear <= yearRange[1]
    const isMileageMatch =
      carMileage >= mileageRange[0] && carMileage <= mileageRange[1]
    const isTransmissionMatch = transmissions.length
      ? transmissions.includes(carTransmission)
      : true
    const isFuelMatch = fuels.length
      ? carFuels.some(fuel => fuels.includes(fuel))
      : true

    const isBodyMatch = bodies.length ? bodies.includes(carBody) : true

    return (
      isBrandMatch &&
      isPriceMatch &&
      isYearMatch &&
      isMileageMatch &&
      isTransmissionMatch &&
      isFuelMatch &&
      isBodyMatch
    )
  })

  return (
    <div className=''>
      {/* Mobile filter dialog */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className='relative z-40 lg:hidden'>
        <div className='fixed inset-0 bg-black bg-opacity-25 transition-opacity' />
        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            <div className='flex items-center justify-between px-4'>
              <h2 className='text-lg font-medium text-gray-900'>Filtros</h2>

              <button
                type='button'
                onClick={() => setMobileFiltersOpen(false)}
                className='-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>Cerrar menú</span>
                <XMarkIcon aria-hidden='true' className='h-6 w-6' />
              </button>
            </div>
            <FiltersComponent
              filters={filters}
              handleFilterChange={handleFilterChange}
              resetFilters={resetFilters}
              brandList={brandList}
              fuelList={fuelList}
              transmissionList={transmissionList}
              bodyList={bodyList}
            />
          </Dialog.Panel>
        </div>
      </Dialog>

      <main className='mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8'>
        <div className='border-b border-gray-200 pb-10'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
            Catálogo
          </h1>
          <p className='mt-4 text-base text-gray-500'>
            Explora nuestra amplia selección de autos de segunda mano, todos
            inspeccionados y listos para encontrar su nuevo hogar.
          </p>
        </div>

        <div className='pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4'>
          <aside>
            <h2 className='sr-only'>Filtros</h2>
            <div className='flex justify-between'>
              <button
                type='button'
                onClick={() => setMobileFiltersOpen(true)}
                className='inline-flex items-center lg:hidden'>
                <span className='text-sm font-medium text-gray-700'>
                  Filtros
                </span>
                <PlusIcon
                  aria-hidden='true'
                  className='ml-1 h-5 w-5 flex-shrink-0 text-gray-400'
                />
              </button>

              <div className='inline-flex lg:hidden'>
                <button
                  type='button'
                  onClick={resetFilters}
                  className='text-gray-900 text-sm font-bold'>
                  Limpiar filtros
                </button>
              </div>
            </div>

            <div className='hidden lg:block'>
              <FiltersComponent
                filters={filters}
                handleFilterChange={handleFilterChange}
                resetFilters={resetFilters}
                brandList={brandList}
                fuelList={fuelList}
                transmissionList={transmissionList}
                bodyList={bodyList}
              />
            </div>
          </aside>

          {/* Product grid */}
          <div className='mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredList.length > 0 ? (
                filteredList.map((car, index) => (
                  <CarCardComponent
                    key={index}
                    carId={car.id}
                    carImages={car.images}
                    carDetail={car.carDetails}
                  />
                ))
              ) : (
                <div className='col-span-2 md:col-span-3 flex items-center justify-center h-64'>
                  <p className='text-lg font-medium text-gray-500'>
                    No hay resultados que coincidan con tus filtros. Intenta
                    ajustar los filtros para ver más opciones.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
