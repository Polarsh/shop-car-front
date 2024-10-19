export default function CheckBoxComponent({
  id,
  name,
  value,
  checked,
  onChange,
  label,
}) {
  return (
    <div className='flex items-center '>
      <input
        id={id}
        name={name}
        type='checkbox'
        value={value}
        checked={checked}
        onChange={onChange}
        className='h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary'
      />
      <label htmlFor={id} className='ml-3 text-sm text-gray-600'>
        {label}
      </label>
    </div>
  )
}
