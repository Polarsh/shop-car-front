import LabelComponent from './_Label'

export default function InputPriceComponent({ label, id, value, onChange }) {
  return (
    <div>
      <LabelComponent htmlFor={id} label={label} />

      <div className='relative mt-2 rounded-md shadow-sm'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className='text-gray-500 sm:text-sm'>$</span>
        </div>
        <input
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          type='text'
          placeholder='0.00'
          aria-describedby='price-currency'
          className='block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
        />
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
          <span id='price-currency' className='text-gray-500 sm:text-sm'>
            USD
          </span>
        </div>
      </div>
    </div>
  )
}
