import { useEffect } from 'react'
import useCar from '../hooks/useCar'
import CarCardComponent from './cards/CarCard'

export default function RelatedCars({ currentCarId, relatedCategory }) {
  const { carList, isLoading, error, getAllCars } = useCar()

  useEffect(() => {
    getAllCars()
  }, [])

  // Filtrar los autos relacionados, excluyendo el auto actual
  const relatedCars = carList
    .filter(
      car =>
        car.id !== currentCarId &&
        (car.carDetails.category === relatedCategory ||
          car.carDetails.brand === relatedCategory)
    )
    .slice(0, 3)

  return (
    <section
      aria-labelledby='related-cars-heading'
      className='pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl '>
      {/* Título */}
      <div className='px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0'>
        <h2
          id='related-cars-heading'
          className='text-2xl font-bold tracking-tight text-gray-900'>
          Autos relacionados
        </h2>
      </div>

      {/* Vehículos */}
      <div className=' box-content py-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8'>
          {isLoading || error !== null ? (
            [...Array(3)].map((_, index) => (
              <div
                key={index}
                className='h-48 w-full bg-gray-200 rounded-xl'></div>
            ))
          ) : relatedCars.length > 0 ? (
            relatedCars.map((car, index) => (
              <CarCardComponent
                key={index}
                carId={car.id}
                carImages={car.images}
                carDetail={car.carDetails}
              />
            ))
          ) : (
            <p className='text-lg text-gray-500'>
              No se encontraron autos relacionados.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
