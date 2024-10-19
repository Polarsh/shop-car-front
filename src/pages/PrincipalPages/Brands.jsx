import BrandCardComponent from '../../components/cards/BrandCard'
import useFilter from '../../hooks/useFilters'

export default function BrandPage() {
  const { brandList } = useFilter()

  return (
    <div>
      <section
        aria-labelledby='catalog-heading'
        className='pb-24 xl:mx-auto xl:max-w-7xl xl:px-8'>
        <div className='px-4 py-16 text-center sm:px-6 lg:px-8'>
          <h1
            id='catalog-heading'
            className='text-4xl font-bold tracking-tight text-gray-900'>
            Catálogo de Marcas
          </h1>
          <p className='mx-auto mt-4 max-w-xl text-base text-gray-500'>
            Explora nuestra amplia selección de autos de segunda mano, todos
            inspeccionados y listos para encontrar su nuevo hogar.
          </p>
        </div>

        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
            {brandList.map((brand, index) => (
              <BrandCardComponent key={index} brand={brand} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
