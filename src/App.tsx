import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from '@/context/LanguageContext'
import { AdminAuthProvider } from '@/context/AdminAuthContext'
import { SiteSettingsProvider } from '@/context/SiteSettingsContext'
import { CmsProvider } from '@/context/CmsContext'
import { Layout } from '@/components/layout/Layout'
import { AdminLayout } from '@/components/admin/AdminLayout'
import { RequireAdmin } from '@/components/admin/RequireAdmin'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { ServiceDetailPage } from '@/pages/ServiceDetailPage'
import { ServiceLocationPage } from '@/pages/ServiceLocationPage'
import { CityPage } from '@/pages/CityPage'
import { LocationsPage } from '@/pages/LocationsPage'
import { AdvertisePage } from '@/pages/AdvertisePage'
import { RentAPage } from '@/pages/RentAPage'
import { AssetDetailPage } from '@/pages/AssetDetailPage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogArticlePage } from '@/pages/BlogArticlePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { AdminLoginPage } from '@/pages/admin/AdminLoginPage'
import { AdminDashboardPage } from '@/pages/admin/AdminDashboardPage'
import { AdminServicesPage } from '@/pages/admin/AdminServicesPage'
import { AdminServiceEditPage } from '@/pages/admin/AdminServiceEditPage'
import { AdminBlogPage } from '@/pages/admin/AdminBlogPage'
import { AdminBlogEditPage } from '@/pages/admin/AdminBlogEditPage'
import { AdminMediaPage } from '@/pages/admin/AdminMediaPage'

export default function App() {
  return (
    <LanguageProvider>
      <SiteSettingsProvider>
        <CmsProvider>
          <AdminAuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route
                  path="/admin"
                  element={
                    <RequireAdmin>
                      <AdminLayout />
                    </RequireAdmin>
                  }
                >
                  <Route index element={<AdminDashboardPage />} />
                  <Route path="services" element={<AdminServicesPage />} />
                  <Route path="settings" element={<Navigate to="/admin" replace />} />
                  <Route path="services/:serviceId" element={<AdminServiceEditPage />} />
                  <Route path="blog" element={<AdminBlogPage />} />
                  <Route path="blog/:articleId" element={<AdminBlogEditPage />} />
                  <Route path="media" element={<AdminMediaPage />} />
                </Route>

                <Route element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="services" element={<ServicesPage />} />
                  <Route path="services/:serviceSlug" element={<ServiceDetailPage />} />
                  <Route
                    path="sa/:regionSlug/:citySlug/:serviceSlug"
                    element={<ServiceLocationPage />}
                  />
                  <Route path="locations" element={<LocationsPage />} />
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
          </AdminAuthProvider>
        </CmsProvider>
      </SiteSettingsProvider>
    </LanguageProvider>
  )
}
