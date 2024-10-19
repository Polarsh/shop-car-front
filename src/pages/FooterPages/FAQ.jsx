import { CONTACT_EMAIL } from '../../utils/constant'

const faqs = [
  {
    question: '¿Qué tipos de pago aceptan?',
    answer:
      'Aceptamos transferencias bancarias, pagos con tarjeta de crédito o débito, y pagos en efectivo.',
  },
  {
    question: '¿Ofrecen algún tipo de garantía en los autos?',
    answer:
      'Sí, todos nuestros autos vienen con una garantía limitada de 6 meses que cubre ciertos componentes del vehículo.',
  },
  {
    question: '¿Puedo ver y probar el auto antes de comprarlo?',
    answer:
      'Por supuesto, te invitamos a agendar una cita para ver y probar el auto de tu interés.',
  },
  {
    question: '¿Ofrecen financiamiento?',
    answer:
      'Actualmente no ofrecemos opciones de financiamiento. Todos nuestros vehículos deben ser pagados en su totalidad al momento de la compra.',
  },
  {
    question: '¿Aceptan autos a cambio como parte del pago?',
    answer:
      'No aceptamos autos a cambio como parte del pago. Sin embargo, estaremos encantados de ayudarte a encontrar el vehículo adecuado para ti.',
  },
  {
    question: '¿Los precios son negociables?',
    answer:
      'Nuestros precios son competitivos y se establecen para ofrecerte el mejor valor posible. No obstante, estamos abiertos a discutir ofertas razonables.',
  },
  {
    question: '¿Cómo puedo reservar un auto?',
    answer:
      'Para reservar un auto, ponte en contacto con nosotros y te indicaremos los pasos a seguir. La reserva se mantiene por un periodo de 72 horas.',
  },
  {
    question: '¿Cuáles son los pasos para concretar una compra?',
    answer:
      'Una vez que elijas el auto que deseas, procederemos con la verificación de documentos y el pago. Posteriormente, se realizará la entrega del vehículo.',
  },
  {
    question: '¿Qué documentos necesito para comprar un auto?',
    answer:
      'Necesitarás tu documento de identidad, comprobante de domicilio, y los documentos relacionados con el método de pago.',
  },
  {
    question: '¿Pueden entregar el auto en mi domicilio?',
    answer:
      'Sí, ofrecemos el servicio de entrega a domicilio dentro de ciertas áreas. Consulta con nosotros para más detalles.',
  },
]

export default function FAQPage() {
  return (
    <section aria-labelledby='faq-heading'>
      <div className='mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h1
            id='faq-heading'
            className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
            Preguntas Frecuentes
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            ¿Tienes una pregunta diferente y no puedes encontrar la respuesta
            que estás buscando? Ponte en contacto con nuestro equipo de soporte
            enviándonos un{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className='font-semibold text-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
              correo electrónico
            </a>{' '}
            y te responderemos lo antes posible.
          </p>
        </div>
        <div className='mt-20'>
          <dl className='space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10'>
            {faqs.map((faq, index) => (
              <div key={`Pregunta Frecuente ${index}`}>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  {faq.question}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
