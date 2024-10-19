import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import useCar from '../hooks/useCar'
import CarCardComponent from './cards/CarCard'

export default function LastPublications() {
  const { carList, isLoading, error, getAllCars } = useCar()

  useEffect(() => {
    getAllCars()
  }, [])

  return (
    <section
      aria-labelledby='last-publications-heading'
      className='pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8'>
      {/* Titulo */}
      <div className='px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0'>
        <h2
          id='brand-heading'
          className='text-2xl font-bold tracking-tight text-gray-900'>
          Últimas publicaciones
        </h2>
        <Link
          to='/catalogo'
          className='hidden text-lg font-semibold text-secondary hover:text-primary sm:block'>
          Explora las últimas publicaciones
          <span aria-hidden='true'> &rarr;</span>
        </Link>
      </div>

      {/* Vehículos */}
      <div className='mt-4 px-4 sm:px-6 lg:px-8'>
        <div className='-my-2 box-content py-2'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8'>
            {isLoading || error !== null
              ? [...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className='h-48 w-full bg-gray-200 rounded-xl'></div>
                ))
              : carList
                  .slice(0, 6)
                  .map((car, index) => (
                    <CarCardComponent
                      key={index}
                      carId={car.id}
                      carImages={car.images}
                      carDetail={car.carDetails}
                    />
                  ))}
          </div>
        </div>
      </div>

      <div className='mt-6 px-4 sm:hidden'>
        <Link
          to='/catalogo'
          className='block text-sm font-semibold text-secondary hover:text-primary'>
          Explora las últimas publicaciones
          <span aria-hidden='true'> &rarr;</span>
        </Link>
      </div>
    </section>
  )
}
