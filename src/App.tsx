import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));
const NewsPage = React.lazy(() => import('./pages/NewsPage'));
const NewsDetailPage = React.lazy(() => import('./pages/NewsDetailPage'));

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="relative bg-slate-950 text-slate-900">
      <ScrollToTop />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_55%)]"
      />
      <Navbar />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <Routes location={location}>
              <Route path="/" element={
                <React.Suspense fallback={<LoadingSpinner />}>
                  <HomePage />
                </React.Suspense>
              } />
              <Route path="/haberler" element={
                <React.Suspense fallback={<LoadingSpinner />}>
                  <NewsPage />
                </React.Suspense>
              } />
              <Route path="/haberler/:slug" element={
                <React.Suspense fallback={<LoadingSpinner />}>
                  <NewsDetailPage />
                </React.Suspense>
              } />
              <Route path="/hakkimizda" element={
                <React.Suspense fallback={<LoadingSpinner />}>
                  <AboutPage />
                </React.Suspense>
              } />
              <Route path="/cozumler" element={
                <React.Suspense fallback={<LoadingSpinner />}>
                  <ServicesPage />
                </React.Suspense>
              } />
              <Route path="/cozumler/:serviceSlug" element={
                <React.Suspense fallback={<LoadingSpinner />}>
                  <ServiceDetailPage />
                </React.Suspense>
              } />
              <Route path="/iletisim" element={
                <React.Suspense fallback={<LoadingSpinner />}>
                  <ContactPage />
                </React.Suspense>
              } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
