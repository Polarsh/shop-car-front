export default function AboutUsPage() {
  return (
    <div className='mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8'>
      <div className='max-w-3xl mx-auto text-center'>
        <h1 id='about-us-heading' className='text-3xl font-bold text-gray-900'>
          Sobre Nosotros
        </h1>
        <p className='mt-4 text-lg leading-7 text-gray-600'>
          Somos una empresa dedicada a ofrecer autos de segunda mano de la mejor
          calidad, con un enfoque en la satisfacción del cliente y la
          transparencia en cada transacción.
        </p>
      </div>

      <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Nuestra Misión */}
        <div>
          <h2 className='text-2xl font-semibold text-gray-900'>
            Nuestra Misión
          </h2>
          <p className='mt-4 text-base leading-7 text-gray-600'>
            Nuestra misión es proporcionar vehículos de alta calidad a precios
            competitivos, asegurando que cada cliente encuentre el auto que se
            ajuste perfectamente a sus necesidades. Nos esforzamos por ofrecer
            un servicio excepcional y construir relaciones duraderas con
            nuestros clientes.
          </p>
        </div>

        {/* Nuestra Visión */}
        <div>
          <h2 className='text-2xl font-semibold text-gray-900'>
            Nuestra Visión
          </h2>
          <p className='mt-4 text-base leading-7 text-gray-600'>
            Aspiramos a ser líderes en el mercado de autos de segunda mano,
            reconocidos por nuestra integridad, servicio al cliente y la calidad
            de los vehículos que ofrecemos. Queremos ser la primera opción para
            aquellos que buscan un auto confiable y asequible.
          </p>
        </div>

        {/* Nuestros Valores */}
        <div>
          <h2 className='text-2xl font-semibold text-gray-900'>
            Nuestros Valores
          </h2>
          <p className='mt-4 text-base leading-7 text-gray-600'>
            Creemos en la honestidad, la transparencia y el compromiso con la
            excelencia. Estos valores guían cada aspecto de nuestro negocio y
            aseguran que cada cliente reciba un trato justo y una experiencia
            satisfactoria.
          </p>
        </div>

        {/* Nuestra Historia */}
        <div>
          <h2 className='text-2xl font-semibold text-gray-900'>
            Nuestra Historia
          </h2>
          <p className='mt-4 text-base leading-7 text-gray-600'>
            Con más de una década en el mercado, hemos crecido de ser una
            pequeña tienda local a una empresa reconocida en la industria
            automotriz. Nuestra dedicación a la calidad y el servicio nos ha
            permitido expandirnos y servir a una base de clientes cada vez
            mayor.
          </p>
        </div>
      </div>

      <div className='mt-16 text-center'>
        <h2 className='text-2xl font-semibold text-gray-900'>Contáctanos</h2>
        <p className='mt-4 text-base leading-7 text-gray-600'>
          Si tienes alguna pregunta o simplemente quieres saber más sobre
          nosotros, no dudes en ponerte en contacto. Estamos aquí para ayudarte.
        </p>
        <a
          href='/contacto'
          className='mt-6 inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700'>
          Contacto
        </a>
      </div>
    </div>
  )
}
