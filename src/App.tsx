import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from '@/context/LanguageContext'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { ServiceDetailPage } from '@/pages/ServiceDetailPage'
import { ServiceLocationPage } from '@/pages/ServiceLocationPage'
import { CityPage } from '@/pages/CityPage'
import { AdvertisePage } from '@/pages/AdvertisePage'
import { RentAPage } from '@/pages/RentAPage'
import { AssetDetailPage } from '@/pages/AssetDetailPage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogArticlePage } from '@/pages/BlogArticlePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:serviceSlug" element={<ServiceDetailPage />} />
            <Route
              path="sa/:regionSlug/:citySlug/:serviceSlug"
              element={<ServiceLocationPage />}
            />
            <Route path="locations/:citySlug" element={<CityPage />} />
            <Route path="advertise-with-us" element={<AdvertisePage />} />
            <Route path="rent-a-page" element={<RentAPage />} />
            <Route path="rent-a-page/:assetId" element={<AssetDetailPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:articleSlug" element={<BlogArticlePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
