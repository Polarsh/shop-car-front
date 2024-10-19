import { Link } from 'react-router-dom'
import useFilter from '../hooks/useFilters'

import bodySvgList from '../../db/bodyCars.json'

export default function BodyListComponent() {
  const { bodyList } = useFilter()

  const filteredBodySVGList = bodySvgList.filter(body =>
    bodyList.includes(body.displayName)
  )

  return (
    <section
      aria-labelledby='brand-heading'
      className='pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8 '>
      {/* Título */}
      <div className='px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0'>
        <h2
          id='brand-heading'
          className='text-2xl font-bold tracking-tight text-gray-900'>
          Buscar por carrocería
        </h2>
      </div>

      {/* Imágenes */}
      <div className='mt-4 px-4 sm:px-6 lg:px-8'>
        <div className='-my-2 box-content py-2'>
          {!bodyList ? (
            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 xl:gap-8'>
              {[...Array(6)].map((_, index) => (
                /* Placeholder for loading state */
                <div
                  key={index}
                  className='h-48 w-full bg-gray-200 rounded-xl'></div>
              ))}
            </div>
          ) : (
            <div className='mx-auto grid max-w-lg grid-cols-3 items-center gap-x-4 gap-y-6 sm:max-w-xl sm:grid-cols-4 sm:gap-x-5 sm:gap-y-7 lg:mx-0 lg:max-w-none lg:grid-cols-6'>
              {filteredBodySVGList.map((body, index) => (
                <Link
                  key={index}
                  to={`/catalogo?bodies=${body.displayName}`}
                  className='flex flex-col items-center text-center space-y-2'>
                  <img
                    alt={body.displayName}
                    src={body.path}
                    width={36}
                    height={36}
                    className='max-h-12 w-full object-contain'
                  />
                  <span className='text-sm text-gray-700'>
                    {body.displayName}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
