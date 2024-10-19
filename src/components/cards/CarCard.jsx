import { Link } from 'react-router-dom'
import { formatToCurrency, formatToKilometers } from '../../utils/formatCarData'
import { LOGO_URL_IMAGE } from '../../utils/constant'

export default function CarCardComponent({ carId, carImages, carDetail }) {
  return (
    <Link
      to={`/autos/${carId}`}
      className='bg-gray-50 rounded-lg overflow-hidden shadow-lg focus:cursor-default flex flex-col transform transition duration-300 hover:scale-105'>
      {/* Contenedor de la imagen */}
      <div className='relative h-60 sm:h-48 md:h-60 bg-black flex items-center justify-center'>
        <img
          src={carImages[0]}
          alt={`Preview ${carDetail.brand} ${carDetail.model} ${carDetail.year}`}
          className='h-full w-full object-scale-down'
        />
        {/* Logo de la empresa como marca de agua en la esquina inferior izquierda */}
        <img
          src={LOGO_URL_IMAGE}
          alt='Car Shop Logo'
          className='absolute -bottom-4 left-0 h-24 w-24 object-contain opacity-90'
          style={{ zIndex: 1 }}
        />
      </div>
      {/* Información */}
      <div className='flex-grow flex flex-col p-4 space-y-2'>
        <div className='space-y-0 leading-none'>
          <p className='font-semibold text-gray-900 text-lg md:text-xl'>
            {`${carDetail.brand} ${carDetail.model} ${carDetail.year}`}
          </p>
          <p className='text-gray-400 text-sm'>
            {`${carDetail.displacement} | ${formatToKilometers(carDetail.mileage)} km`}
          </p>
          <p className='text-gray-400 text-sm'>
            {`${carDetail.fuel.join(' & ')}`}
          </p>
        </div>

        <div className='flex justify-between'>
          <p className='text-sm text-secondary font-bold mt-3'>
            Ver este auto <span aria-hidden='true'> &rarr;</span>
          </p>
          <p className='font-bold text-xl md:text-2xl flex justify-end text-primary'>
            {formatToCurrency(carDetail.price)}
          </p>
        </div>
      </div>
    </Link>
  )
}
