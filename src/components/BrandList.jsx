import { Link } from 'react-router-dom'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import useFilter from '../hooks/useFilters'

export default function BrandList() {
  const { brandList, isLoading, error } = useFilter()

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <section
      aria-labelledby='brand-heading'
      className='pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8 '>
      {/* Titulo */}
      <div className='px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0'>
        <h2
          id='brand-heading'
          className='text-2xl font-bold tracking-tight text-gray-900'>
          Buscar por marca
        </h2>
        <Link
          to='/marcas'
          className='hidden text-lg font-semibold text-secondary hover:text-primary sm:block'>
          Explora todas las marcas
          <span aria-hidden='true'> &rarr;</span>
        </Link>
      </div>

      {/* Imágenes */}
      <div className='mt-4 px-4 sm:px-6 lg:px-8'>
        <div className='-my-2 box-content py-2'>
          <div className=''>
            {isLoading || error !== null ? (
              <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 xl:gap-8'>
                {[...Array(6)].map((_, index) => (
                  /* Placeholder for loading state */
                  <div
                    key={index}
                    className='h-40 w-full bg-gray-200 rounded-xl'></div>
                ))}
              </div>
            ) : (
              <div className='slider-container'>
                <Slider {...settings}>
                  {brandList.map((brand, index) => (
                    <div key={index} className='px-8 py-4'>
                      <Link
                        key={brand.id}
                        to={`/catalogo?brand=${brand.name}`}
                        className='group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600'
                        aria-label={`Explorar autos de la marca ${brand.name}`}>
                        <div className='h-20 p-2 lg:h-40 lg:p-4 w-full flex items-center justify-center bg-white group-hover:bg-gray-50 rounded-lg transition-colors'>
                          <img
                            src={brand.image}
                            alt={`Logotipo de la marca ${brand.name}`}
                            className='h-full w-full object-contain'
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='mt-6 px-4 sm:hidden'>
        <Link
          to='/marcas'
          className='block text-sm font-semibold text-secondary hover:text-primary'>
          Explora todas las marcas
          <span aria-hidden='true'> &rarr;</span>
        </Link>
      </div>
    </section>
  )
}
