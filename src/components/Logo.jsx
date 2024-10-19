import { Link } from 'react-router-dom'

export default function LogoComponent({ size = 'h-8', clickable = false }) {
  const logoElement = (
    <div>
      <span className='sr-only'>Car Shop</span>
      <img
        className={`mx-auto w-auto ${size}`}
        src='./logo.webp'
        alt='Car Shop Logo'
      />
    </div>
  )

  return clickable ? <Link to='/'>{logoElement}</Link> : logoElement
}
