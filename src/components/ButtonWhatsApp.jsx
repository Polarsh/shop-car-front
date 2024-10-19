import { BsWhatsapp } from 'react-icons/bs'
import { WHATSAPP_PHONE } from '../utils/constant'

const WhatsappButton = ({
  message = 'Hola, estoy interesado en más información.',
}) => {
  const WHATSAPP_URL = `https://wa.me/${encodeURIComponent(WHATSAPP_PHONE)}?text=${encodeURIComponent(message)}`

  return (
    <button
      onClick={() => window.open(WHATSAPP_URL, '_blank')}
      className='w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-green-700 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700'
      aria-label='Contactar por WhatsApp'>
      <BsWhatsapp className='mr-2' size={24} aria-hidden='true' />
      Contactar
    </button>
  )
}

export default WhatsappButton
