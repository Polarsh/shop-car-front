import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { AppProvider } from './context/AppContext'

import PageLayout from './layout/PageLayout'

import FAQPage from './pages/FooterPages/FAQ'
import AboutUsPage from './pages/FooterPages/AboutUs'
import TermsAndConditionsPage from './pages/FooterPages/TermsAndConditionsPage'
import ContactPage from './pages/FooterPages/Contact'
import ComplaintBookPage from './pages/FooterPages/ComplaintBookPage'
import HomePage from './pages/PrincipalPages/Home'
import CatalogPage from './pages/PrincipalPages/Catalog'
import CarDetailPage from './pages/CarDetail'
import BrandPage from './pages/PrincipalPages/Brands'
import DefaultPage from './pages/Default'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <AppProvider>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path='catalogo' element={<CatalogPage />} />
          <Route path='marcas' element={<BrandPage />} />
          <Route path='autos/:carId' element={<CarDetailPage />} />

          {/* Footer */}
          <Route path='nosotros' element={<AboutUsPage />} />
          <Route path='preguntas-frecuentes' element={<FAQPage />} />
          <Route path='contacto' element={<ContactPage />} />
          <Route
            path='libro-de-reclamaciones'
            element={<ComplaintBookPage />}
          />
          <Route
            path='terminos-y-condiciones'
            element={<TermsAndConditionsPage />}
          />

          <Route path='*' element={<DefaultPage />} />
        </Route>
      </Routes>
    </AppProvider>
  )
}
