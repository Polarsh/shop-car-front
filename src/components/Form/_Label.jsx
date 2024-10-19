export default function LabelComponent({ label, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className='block text-sm font-bold leading-6 text-gray-900'>
      {label}
    </label>
  )
}
