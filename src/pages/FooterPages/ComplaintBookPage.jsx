// src/pages/ComplaintBookPage.jsx
import { useState } from 'react'
import { CONTACT_EMAIL } from '../../utils/constant'
import InputComponent from '../../components/Form/Input'

export default function ComplaintBookPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    complaint: '',
  })

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Aquí puedes manejar el envío del formulario, por ejemplo, usando un servicio de correo o backend.
    console.log('Reclamación enviada', form)
    // Aquí puedes agregar un mensaje de confirmación o redirigir al usuario
  }

  return (
    <div className='mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8'>
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>
        Libro de Reclamaciones
      </h1>
      <p className='text-lg text-gray-700 mb-6'>
        Si tienes algún inconveniente con nuestro servicio o producto, por
        favor, llena el siguiente formulario. Estamos comprometidos a resolver
        cualquier problema de manera oportuna.
      </p>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <InputComponent
          label='Nombre Completo'
          id='name'
          placeholder='Ingresa tu nombre completo'
          value={form.name}
          onChange={handleChange}
        />
        <InputComponent
          label='Correo Electrónico'
          id='email'
          placeholder='Ingresa tu correo electrónico'
          value={form.email}
          onChange={handleChange}
        />
        <InputComponent
          label='Teléfono'
          id='phone'
          placeholder='Ingresa tu número de teléfono'
          value={form.phone}
          onChange={handleChange}
        />
        <div>
          <label
            htmlFor='complaint'
            className='block text-sm font-medium leading-6 text-gray-900'>
            Detalle de la Reclamación
          </label>
          <div className='mt-2'>
            <textarea
              id='complaint'
              name='complaint'
              value={form.complaint}
              onChange={handleChange}
              placeholder='Describe tu reclamo o sugerencia'
              rows='6'
              required
              className='block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'></textarea>
          </div>
        </div>
        <button
          type='submit'
          className='w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-green-700 transition-colors'>
          Enviar Reclamación
        </button>
      </form>
      <p className='mt-6 text-sm text-gray-500'>
        También puedes enviarnos tus reclamaciones directamente a nuestro correo
        electrónico:{' '}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className='text-green-600 underline'>
          {CONTACT_EMAIL}
        </a>
      </p>
    </div>
  )
}
