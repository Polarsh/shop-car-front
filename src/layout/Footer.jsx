import { Link } from 'react-router-dom'

import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

import LogoComponent from '../components/Logo'

import { CONTACT_EMAIL, CONTACT_PHONE } from '../utils/constant'

const navigation = {
  contact: [
    { name: 'WhatsApp:', info: CONTACT_PHONE, icon: FaWhatsapp },
    {
      name: 'Correo:',
      info: CONTACT_EMAIL,
      icon: MdOutlineEmail,
    },
  ],
  company: [
    { name: 'Nosotros', to: '/nosotros' },
    { name: 'Contacto', to: '/contacto' },
    /* { name: 'Libro de Reclamaciones', to: '/libro-de-reclamaciones' }, */
  ],
  legal: [
    { name: 'Preguntas Frecuentes', to: '/preguntas-frecuentes' },
    { name: 'Términos y condiciones', to: '/terminos-y-condiciones' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FaFacebook,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: FaYoutube,
    },
    {
      name: 'WhatsApp',
      href: '#',
      icon: FaWhatsapp,
    },
  ],
}

export default function FooterComponent() {
  return (
    <footer className='bg-gray-100' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 py-8 lg:px-8'>
        <div className='space-y-8 lg:flex lg:justify-between gap-8'>
          {/* Información empresa */}
          <div className='w-full lg:w-96 space-y-8'>
            <div className='w-24 -mb-4'>
              <LogoComponent size={'h-8'} clickable />
            </div>
            <p className='text-sm leading-6 text-gray-600'>
              En Car Shop, descubre una nueva experiencia de compra de
              automóviles con nosotros: excelencia en cada detalle, confianza en
              cada transacción.
            </p>
            <div className='flex space-x-6'>
              {navigation.social.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>
          {/* Links */}
          <div className='w-full flex-1 grid grid-cols-2 md:grid-cols-3 gap-8'>
            <div className='mt-8 lg:mt-0 col-span-2 sm:col-span-1 w-full'>
              <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                Contacto
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.contact.map(item => (
                  <li key={item.name} className='flex  space-x-2'>
                    {/* <p className='text-sm leading-6 text-gray-900 hover:text-gray-900'>
                      {item.name}
                    </p> */}
                    <item.icon className='h-6 w-6' aria-hidden='true' />
                    <p className='text-sm leading-6 font-semibold text-black'>
                      {item.info}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-8 lg:mt-0'>
              <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                Car Shop
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.company.map(item => (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-8 lg:mt-0'>
              <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                Legal
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.legal.map(item => (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-900/10'>
          <p className='text-xs leading-5 text-gray-500'>
            &copy; 2024 Car Shop, S.A. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
