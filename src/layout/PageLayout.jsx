import { Outlet } from 'react-router-dom'

import NavBarComponent from './NavBar'
import FooterComponent from './Footer'

export default function PageLayout() {
  return (
    <div>
      <NavBarComponent />

      {/* Outlet */}
      <main>
        <Outlet />
      </main>

      <FooterComponent />
    </div>
  )
}
