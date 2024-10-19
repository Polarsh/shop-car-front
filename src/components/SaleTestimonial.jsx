import { Link } from 'react-router-dom'

const BACKGROUND_IMAGE_URL = './car_background.webp'

const testimonials = [
  {
    id: 1,
    quote:
      'El proceso de compra fue increíblemente fácil y rápido. Desde la selección hasta la entrega, todo fue perfecto y sin complicaciones. El auto está en excelente condición.',
    attribution: 'Carlos Méndez',
  },
  {
    id: 2,
    quote:
      'No podría estar más satisfecho con mi compra. Todo el proceso fue sencillo, y el equipo me ayudó en cada paso. Mi nuevo auto está en perfectas condiciones.',
    attribution: 'María Fernández',
  },
  {
    id: 3,
    quote:
      'La experiencia de compra fue excelente. Todo fue fluido, y no tuve ningún problema. Mi auto llegó en las mejores condiciones, tal como lo esperaba.',
    attribution: 'Luis García',
  },
]

export default function AutoSaleTestimonials() {
  return (
    <div className='relative overflow-hidden mt-20'>
      {/* Decorative background image and gradient */}
      <div aria-hidden='true' className='absolute inset-0'>
        <div className='absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8'>
          <img
            alt='Auto en un entorno elegante'
            src={BACKGROUND_IMAGE_URL}
            className='h-full w-full object-cover object-bottom'
          />
        </div>
        <div className='absolute inset-0 bg-white bg-opacity-75' />
        <div className='absolute inset-0 bg-gradient-to-t from-white via-white' />
      </div>

      {/* Sale */}
      <section
        aria-labelledby='sale-heading'
        className='relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <h2
            id='sale-heading'
            className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
            Encuentra tu auto ideal sin complicaciones
          </h2>
          <p className='mx-auto mt-4 max-w-xl text-xl text-gray-600'>
            Disponemos de una amplia selección de vehículos en excelente estado,
            listos para ti. ¡Compra de forma rápida y segura!
          </p>
          <Link
            to='/catalogo'
            className='mt-6 inline-block w-full rounded-md border border-transparent bg-primary px-8 py-3 font-medium text-white hover:bg-secondary sm:w-auto'>
            Explora nuestro catálogo
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby='testimonial-heading'
        className='relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <h2
            id='testimonial-heading'
            className='text-2xl font-bold tracking-tight text-gray-900'>
            ¿Qué opinan nuestros clientes?
          </h2>

          <div className='mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0'>
            {testimonials.map(testimonial => (
              <blockquote key={testimonial.id} className='sm:flex lg:block'>
                <svg
                  width={24}
                  height={18}
                  viewBox='0 0 24 18'
                  aria-hidden='true'
                  className='flex-shrink-0 text-gray-300'>
                  <path
                    d='M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z'
                    fill='currentColor'
                  />
                </svg>
                <div className='mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10'>
                  <p className='text-lg text-gray-600'>{testimonial.quote}</p>
                  <cite className='mt-4 block font-semibold not-italic text-gray-900'>
                    {testimonial.attribution}
                  </cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
