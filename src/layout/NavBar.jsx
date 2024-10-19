import { useLocation, Link } from 'react-router-dom'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoComponent from '../components/Logo'

const routes = [
  { path: '/', label: 'Inicio' },
  { path: '/catalogo', label: 'Catálogo' },
  { path: '/marcas', label: 'Marcas' },
]

export default function NavBarComponent() {
  const location = useLocation()
  const path = location.pathname

  return (
    <header>
      <Disclosure as='nav' className='bg-white shadow'>
        {/* Menú vista tablet y desktop */}
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 justify-between items-center'>
            <div className='flex items-center'>
              {/* Logo a la izquierda */}
              <div className='flex flex-shrink-0 items-center'>
                <LogoComponent size='h-8' clickable={true} />
              </div>
            </div>

            {/* Menú centrado horizontalmente */}
            <div className='hidden sm:flex sm:flex-grow sm:justify-center'>
              <div className='flex space-x-8'>
                {routes.map(route => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`inline-flex items-center border-b-2 px-1 pt-1 text-base font-medium ${
                      path === route.path
                        ? 'border-primary text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-border hover:text-gray-700'
                    }`}>
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Botón del menú móvil a la derecha */}
            <div className='-mr-2 flex items-center sm:hidden'>
              <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'>
                <span className='sr-only'>Abrir menú principal</span>
                <Bars3Icon
                  aria-hidden='true'
                  className='block h-6 w-6 group-data-[open]:hidden'
                />
                <XMarkIcon
                  aria-hidden='true'
                  className='hidden h-6 w-6 group-data-[open]:block'
                />
              </DisclosureButton>
            </div>
          </div>
        </div>

        {/* Menú movil */}
        <DisclosurePanel className='sm:hidden'>
          <div className='space-y-1 pb-3 pt-2'>
            {routes.map(route => (
              <DisclosureButton
                key={route.path}
                as={Link}
                to={route.path}
                className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                  path === route.path
                    ? 'border-border bg-green-50 text-primary'
                    : 'border-transparent text-gray-500 hover:border-secondary hover:bg-background hover:text-gray-700'
                }`}>
                {route.label}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  )
}
