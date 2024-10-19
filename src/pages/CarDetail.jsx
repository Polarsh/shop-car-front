import { Tab, TabGroup } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsFillFuelPumpFill } from 'react-icons/bs'

import useCar from '../hooks/useCar'
import VehicleImageModalComponent from '../components/ImageModal'
import { formatToCurrency, formatToKilometers } from '../utils/formatCarData'
import RelatedCars from '../components/RelatedCars'
import WhatsappButton from '../components/ButtonWhatsApp'
import { HomeIcon } from '@heroicons/react/20/solid'
import { LOGO_URL_IMAGE } from '../utils/constant'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DetailsSection = ({ car }) => (
  <div className='lg:col-span-3'>
    <h3 className='text-2xl font-semibold text-gray-900'>Detalles</h3>
    <div className='border-b-4 border-green-600 w-24 mb-6'></div>
    <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='space-y-4'>
        <DetailItem label='Color' value={car.carDetails.color} />
        <DetailItem
          label='Transmisión'
          value={`${car.carDetails.transmission} (${car.carDetails.transmissionAbbre})`}
        />
        <DetailItem
          label='Desplazamiento'
          value={car.carDetails.displacement}
        />
        <DetailItem
          label='Tracción'
          value={`${car.carDetails.drivetrain} (${car.carDetails.drivetrainAbbre})`}
        />
      </div>
      <div className='space-y-4'>
        <DetailItem
          label='Combustible'
          value={car.carDetails.fuel.join(', ')}
        />
        <DetailItem
          label='Kilometraje'
          value={`${formatToKilometers(car.carDetails.mileage)} km`}
        />
        <DetailItem label='Carrocería' value={car.carDetails.body} />
      </div>
    </div>
  </div>
)

const DetailItem = ({ label, value }) => (
  <p className='text-lg text-gray-700 flex items-center'>
    <BsFillFuelPumpFill className='mr-2 text-green-600' />
    <span className='font-semibold'>{label}: </span>
    {value}
  </p>
)

const PriceSection = ({ price, url }) => (
  <div className='lg:col-span-1'>
    <div className='bg-white p-6 rounded-lg shadow-lg border border-gray-200'>
      <h3 className='text-2xl font-bold text-gray-900'>Precio</h3>
      <div className='border-b-4 border-green-600 w-24 mb-4'></div>
      <p className='text-4xl font-bold text-green-600 my-4'>
        {formatToCurrency(price)}
      </p>

      <WhatsappButton
        message={`Hola, me gustaría obtener más información sobre el auto ${url}`}
      />

      <p className='text-xs text-gray-500 mt-2'>
        Precio en dólares americanos (USD)
      </p>
    </div>
  </div>
)

export default function CarDetailPage() {
  const { carId } = useParams()
  const { car, isLoading, error, getCarById } = useCar()
  const [viewVehicleModal, setViewVehicleModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    getCarById({ id: carId })
  }, [])

  useEffect(() => {
    if (car && car.images.length > 0) {
      setSelectedImage(car.images[0])
    }
  }, [car])

  if (isLoading) return <SkeletonLoader />
  if (error) return <div>Error: {error.message}</div>
  if (!car) return <div>No se encontró el auto</div>

  const handleImageClick = index => {
    if (index === 2) {
      setViewVehicleModal(true)
    } else {
      setSelectedImage(car.images[index])
    }
  }

  return (
    <div className='max-w-4xl lg:max-w-6xl pb-24 mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Regresar al catálogo */}
      <div className=' py-8'>
        <nav aria-label='Breadcrumb' className='flex'>
          <ol role='list' className='flex items-center space-x-4'>
            <li>
              <div>
                <Link to={'/'} className='text-gray-400 hover:text-gray-500'>
                  <HomeIcon
                    aria-hidden='true'
                    className='h-5 w-5 flex-shrink-0'
                  />
                  <span className='sr-only'>Home</span>
                </Link>
              </div>
            </li>
            <li>
              <div className='flex items-center'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                  className='h-5 w-5 flex-shrink-0 text-gray-300'>
                  <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
                </svg>
                <Link
                  to='/catalogo'
                  className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'>
                  Catálogo
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <h2 className='text-3xl font-bold text-gray-900 pb-8'>
        {`${car.carDetails.brand} ${car.carDetails.model} ${car.carDetails.year}`}
      </h2>

      <TabGroup
        as='div'
        className='grid grid-cols-1 md:grid-cols-4 gap-5 h-auto md:h-[36rem]'>
        {/* Imagen principal */}
        <div className='relative w-full h-64 md:h-full md:col-span-3 bg-black flex items-center justify-center rounded-lg overflow-hidden'>
          <img
            src={selectedImage}
            alt={`Preview ${car.carDetails.brand} ${car.carDetails.model} ${car.carDetails.year}`}
            className='object-contain h-full w-full'
            loading='lazy'
          />
          {/* Logo de la empresa como marca de agua en la esquina inferior izquierda */}
          <img
            src={LOGO_URL_IMAGE}
            alt='Car Shop Logo'
            className='absolute -bottom-4 right-2 h-24 w-24 md:bottom-2 md:h-36 md:w-36 object-contain opacity-90'
            style={{ zIndex: 1 }}
          />
        </div>
        {/* Image selector */}
        <div className='grid grid-cols-3 md:grid-cols-1 md:grid-rows-3 gap-2 md:gap-4'>
          {car.images.slice(0, 3).map((image, index) => (
            <Tab
              key={image}
              className={`relative flex h-24 md:h-full cursor-pointer items-center justify-center rounded-md text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4`}
              onClick={() => handleImageClick(index)}>
              <div className='w-full h-full'>
                <span className='sr-only'>{`Imagen ${index + 1}`}</span>
                <span className='absolute inset-0 overflow-hidden rounded-md'>
                  <img
                    src={image}
                    alt={`Imagen ${index + 1}`}
                    className={`h-full w-full object-cover object-center ${index === 2 ? 'bg-black opacity-50' : ''}`}
                    loading='lazy'
                  />
                  {/* Logo de la empresa como marca de agua en la esquina inferior izquierda */}
                  <img
                    src={LOGO_URL_IMAGE}
                    alt='Car Shop Logo'
                    className='absolute -bottom-4 right-0 h-12 w-12 sm:h-24 sm:w-24 object-contain opacity-90'
                    style={{ zIndex: 1 }}
                  />
                </span>
                {index === 2 && (
                  <div className='flex justify-center items-center text-center h-full text-2xl font-bold text-white bg-black bg-opacity-90'>
                    Ver fotos
                  </div>
                )}
                <span
                  className={classNames(
                    selectedImage === image
                      ? 'ring-green-600'
                      : 'ring-transparent',
                    'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                  )}
                  aria-hidden='true'
                />
              </div>
            </Tab>
          ))}
        </div>
      </TabGroup>

      <div className='mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          {/* Detalles */}
          <DetailsSection car={car} />

          {/* Precio */}
          <PriceSection
            price={car.carDetails.price}
            url={'https://www.google.com/'}
          />
        </div>

        {/* Notas */}
        <div className='mt-10'>
          <h3 className='text-2xl font-semibold text-gray-900'>Notas</h3>
          <div className='border-b-4 border-green-600 w-24 mb-4'></div>
          <div className='bg-green-600 bg-opacity-10 p-6 rounded-lg'>
            <ul className='list-disc pl-6 space-y-2'>
              {car.notes.map(note => (
                <li key={note} className='text-lg text-gray-700'>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Accesorios */}
        <div className='mt-10'>
          <h3 className='text-2xl font-semibold text-gray-900'>Accesorios</h3>
          <div className='border-b-4 border-green-600 w-24 mb-4'></div>
          <div className='bg-green-600 bg-opacity-10 p-6 rounded-lg'>
            <ul className='list-disc pl-6 space-y-2'>
              {car.accessories.map(accessory => (
                <li key={accessory.name} className='text-lg text-gray-700'>
                  <span className='font-semibold'>{accessory.name}: </span>
                  {accessory.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Últimas publicaciones */}
      <RelatedCars />

      {viewVehicleModal && (
        <VehicleImageModalComponent
          imageList={car.images}
          handleCloseModal={() => setViewVehicleModal(false)}
        />
      )}
    </div>
  )
}

const SkeletonLoader = () => (
  <div className='animate-pulse max-w-6xl pt-12 pb-24 mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='h-8 bg-gray-300 rounded-md w-1/2 mb-8'></div>
    <div className='grid grid-cols-4 space-x-8'>
      <div className='col-span-3 h-full w-full bg-gray-300 rounded-md mb-8'></div>
      <div className='col-span-1 space-y-4 flex flex-col'>
        <div className='h-36 w-full bg-gray-300 rounded-md'></div>
        <div className='h-36 w-full bg-gray-300 rounded-md'></div>
        <div className='h-36 w-full bg-gray-300 rounded-md'></div>
      </div>
    </div>
    <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6'>
      <div className='lg:col-span-3'>
        <div className='h-8 w-full bg-gray-300 rounded-md mb-4'></div>
        <div className='h-4 w-full bg-gray-300 rounded-md mb-4'></div>
        <div className='h-4 w-full bg-gray-300 rounded-md mb-4'></div>
        <div className='h-4 w-full bg-gray-300 rounded-md mb-4'></div>
      </div>
      <div className='lg:col-span-1'>
        <div className='h-36 bg-gray-300 rounded-md'></div>
      </div>
    </div>
    <div className='mt-10 h-8 bg-gray-300 rounded-md w-1/4 mb-4'></div>
    <div className='mt-2 h-36 bg-gray-300 rounded-md'></div>
  </div>
)
