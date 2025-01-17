import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <>
      <main className='grid min-h-full place-items-center bg-white'>
        <div className='text-center'>
          <p className='text-base font-semibold text-secondary'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Página no encontrada
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            Lo siento, no pudimos encontrar la página que estás buscando.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              to='/'
              className='rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary'>
              Ir al inicio
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
