import { Link } from 'react-router-dom'
import LastPublications from '../../components/LastPublications'
import BrandList from '../../components/BrandList'
import AutoSaleTestimonials from '../../components/SaleTestimonial'
import BodyListComponent from '../../components/BodyList'

export default function HomePage() {
  return (
    <div className='bg-white'>
      {/* Imagen principal */}
      <div className='flex flex-col border-b border-gray-200 lg:border-0'>
        <div className='relative'>
          <div
            aria-hidden='true'
            className='absolute hidden h-full w-1/2 bg-gray-100 lg:block'
          />
          <div className='relative bg-gray-100 lg:bg-transparent'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8'>
              <div className='mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64'>
                <div className='lg:pr-16'>
                  <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl'>
                    Encuentra el vehículo de tus sueños
                  </h1>
                  <p className='mt-4 text-xl text-gray-600'>
                    Descubre todos los vehículos que necesitas para hacer
                    realidad tu próximo viaje, ofreciendo funcionalidad y
                    elegancia en cada kilómetro recorrido.
                  </p>
                  <div className='mt-6'>
                    <Link
                      to='/catalogo'
                      className='inline-block rounded-md border border-transparent bg-primary px-8 py-3 font-medium text-white hover:bg-opacity-70'>
                      Explora nuestro catálogo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2'>
            <img
              src='https://static.retail.autofact.cl/blog/20160615165912.original7202790009111910632.jpg'
              alt=''
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>
      </div>

      {/* Últimas publicaciones */}
      <LastPublications />

      {/* Brand section */}
      <BrandList />

      {/*  */}
      <BodyListComponent />

      {/* Sale and testimonials */}
      <AutoSaleTestimonials />

      <div className='w-full pt-12 sm:pt-16'></div>
    </div>
  )
}
