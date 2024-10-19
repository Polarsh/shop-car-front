export default function TermsAndConditionsPage() {
  return (
    <section aria-labelledby='terms-heading'>
      <div className='mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8'>
        <div className='mx-auto max-w-3xl'>
          <h1
            id='terms-heading'
            className='text-2xl font-bold leading-10 tracking-tight text-gray-900 text-center'>
            Términos y Condiciones
          </h1>
          <p className='mt-4 text-lg leading-7 text-gray-600 text-center'>
            Por favor, lee estos términos y condiciones detenidamente antes de
            utilizar nuestro sitio web y servicios.
          </p>

          <article className='mt-12 space-y-12 text-base leading-7 text-gray-700'>
            <section>
              <h2 className='text-xl font-semibold text-gray-900'>
                1. Condiciones Generales
              </h2>
              <p className='mt-4'>
                Todos los vehículos ofrecidos en nuestro sitio web están sujetos
                a disponibilidad. Nos reservamos el derecho de modificar
                precios, descripciones y condiciones sin previo aviso. Nos
                esforzamos por asegurar que toda la información proporcionada
                sea precisa, pero no garantizamos la exactitud de la misma.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-gray-900'>
                2. Política de Privacidad
              </h2>
              <p className='mt-4'>
                Respetamos tu privacidad y nos comprometemos a proteger tu
                información personal. Consulta nuestra Política de Privacidad
                para obtener más detalles sobre cómo manejamos tus datos.
              </p>
              <a
                href='#'
                className='block mt-2 font-semibold text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                Lee nuestra Política de Privacidad
              </a>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-gray-900'>
                3. Garantías y Devoluciones
              </h2>
              <p className='mt-4'>
                Todos los autos vendidos a través de nuestro sitio vienen con
                una garantía limitada. Consulta los términos específicos de la
                garantía en el contrato de venta. Las devoluciones están sujetas
                a la política de devoluciones que se incluye en el contrato.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-gray-900'>
                4. Modificaciones de los Términos
              </h2>
              <p className='mt-4'>
                Nos reservamos el derecho de actualizar o modificar estos
                términos en cualquier momento sin previo aviso. Es tu
                responsabilidad revisar los términos periódicamente para estar
                al tanto de cualquier cambio.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-gray-900'>
                5. Contacto
              </h2>
              <p className='mt-4'>
                Si tienes alguna pregunta sobre estos términos y condiciones, o
                necesitas más información, por favor, ponte en contacto con
                nosotros.
              </p>
              <a
                href='/contacto'
                className='block mt-2 font-semibold text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                Ponte en contacto
              </a>
            </section>
          </article>
        </div>
      </div>
    </section>
  )
}
