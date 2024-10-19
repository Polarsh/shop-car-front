import LabelComponent from './_Label'

export default function InputComponent({
  label,
  id,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <LabelComponent htmlFor={id} label={label} />

      <div className='mt-2'>
        <input
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          type='text'
          placeholder={placeholder}
          className='block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
        />
      </div>
    </div>
  )
}
