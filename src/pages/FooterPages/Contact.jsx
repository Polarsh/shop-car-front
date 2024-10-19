// src/pages/ContactPage.jsx
import { useState } from 'react'
import { BsTelephone, BsEnvelope } from 'react-icons/bs'
import { CONTACT_EMAIL, CONTACT_PHONE } from '../../utils/constant'
import WhatsappButton from '../../components/ButtonWhatsApp'
import InputComponent from '../../components/Form/Input'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.name) newErrors.name = 'Es obligatorio'
    if (!form.email) newErrors.email = 'Es obligatorio'
    if (!form.message) newErrors.message = 'Es obligatorio'
    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      console.log('Formulario enviado', form)
      setErrors({})
      // Aquí puedes manejar el envío del formulario, por ejemplo, usando un servicio de correo o backend.
    }
  }

  return (
    <div className='mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8'>
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>Contáctanos</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Información de Contacto */}
        <div aria-labelledby='contact-info-heading'>
          <h2
            id='contact-info-heading'
            className='text-2xl font-semibold text-gray-900 mb-4'>
            Información de Contacto
          </h2>
          <p className='text-lg text-gray-700 mb-4'>
            Estamos aquí para ayudarte. Puedes contactarnos a través de los
            siguientes medios:
          </p>
          <div className='flex items-center mb-4'>
            <BsTelephone className='text-green-600 mr-2' aria-hidden='true' />
            <span
              className='text-lg text-gray-700'
              aria-label='Teléfono de contacto'>
              {CONTACT_PHONE}
            </span>
          </div>
          <div className='flex items-center mb-4'>
            <BsEnvelope className='text-green-600 mr-2' aria-hidden='true' />
            <span
              className='text-lg text-gray-700'
              aria-label='Correo electrónico de contacto'>
              {CONTACT_EMAIL}
            </span>
          </div>
          <div className=' mt-6'>
            <WhatsappButton message='Hola, me gustaría obtener más información sobre sus servicios.' />
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div aria-labelledby='contact-form-heading'>
          <h2
            id='contact-form-heading'
            className='text-2xl font-semibold text-gray-900 mb-4'>
            Envíanos un Mensaje
          </h2>
          <form
            onSubmit={handleSubmit}
            className='space-y-4'
            aria-label='Formulario de contacto'>
            <InputComponent
              label='Nombre'
              id='name'
              placeholder='Ingresa tu nombre'
              value={form.name}
              onChange={handleChange}
              aria-describedby={errors.name ? 'name-error' : null}
            />
            {errors.name && (
              <p id='name-error' className='text-sm text-red-600'>
                {errors.name}
              </p>
            )}
            <InputComponent
              label='Correo Electrónico'
              id='email'
              placeholder='Ingresa tu correo electrónico'
              value={form.email}
              onChange={handleChange}
              aria-describedby={errors.email ? 'email-error' : null}
            />
            {errors.email && (
              <p id='email-error' className='text-sm text-red-600'>
                {errors.email}
              </p>
            )}
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Mensaje
              </label>
              <div className='mt-2'>
                <textarea
                  id='message'
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='Escribe tu mensaje aquí'
                  rows='4'
                  className='block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                  aria-describedby={
                    errors.message ? 'message-error' : null
                  }></textarea>
              </div>
              {errors.message && (
                <p id='message-error' className='text-sm text-red-600'>
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type='submit'
              className='w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700'>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
