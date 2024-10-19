import { Link } from 'react-router-dom'

export default function BrandCardComponent({ brand }) {
  return (
    <Link
      key={brand.id}
      to={`/catalogo?brand=${brand.name}`}
      className='group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600'
      aria-label={`Explorar autos de la marca ${brand.name}`}>
      <div className='h-20 p-2 lg:h-40 lg:p-4 w-full flex items-center justify-center bg-gray-50 group-hover:bg-gray-200 transition-colors'>
        <img
          src={brand.image}
          alt={`Logotipo de la marca ${brand.name}`}
          className='h-full w-full object-contain'
        />
      </div>
    </Link>
  )
}
