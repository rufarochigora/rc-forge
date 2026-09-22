import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import TermsOfService from './TermsOfService.jsx'
import OrderTracker from './OrderTracker.jsx'
import AppDownload from './AppDownload.jsx'
import SiteLayout from './components/nav/SiteLayout.jsx'
import SolarElectricalTubing from './SolarElectricalTubing.jsx'
import PowerInfrastructure from './PowerInfrastructure.jsx'
import PowerCategoryPage from './PowerCategoryPage.jsx'
import NotFound from './NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/track" element={<OrderTracker />} />
          <Route path="/app" element={<AppDownload />} />
          {/* Power & Infrastructure. The tubing page keeps its original address. */}
          <Route path="/solar-elecrical-tubing" element={<SolarElectricalTubing />} />
          <Route path="/solar-electrical-tubing" element={<Navigate to="/solar-elecrical-tubing" replace />} />
          <Route path="/power-infrastructure" element={<PowerInfrastructure />} />
          <Route path="/power-infrastructure/:slug" element={<PowerCategoryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  </StrictMode>,
)