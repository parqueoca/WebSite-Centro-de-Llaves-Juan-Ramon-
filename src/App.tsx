import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AutomotivePage from './pages/AutomotivePage';
import ResidentialPage from './pages/ResidentialPage';
import CommercialPage from './pages/CommercialPage';
import AdminPanel from './pages/AdminPanel';
import PoliciesPage from './pages/PoliciesPage';
import SmartQuoter from './components/SmartQuoter';
import ScrollToTop from './components/ScrollToTop';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin route without standard layout */}
        <Route path="/admin" element={<AdminPanel />} />
        
        {/* Public routes with standard layout */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/contacto" element={<Layout><ContactPage /></Layout>} />
        <Route path="/servicios/automotriz" element={<Layout><AutomotivePage /></Layout>} />
        <Route path="/servicios/residencial" element={<Layout><ResidentialPage /></Layout>} />
        <Route path="/servicios/comercial" element={<Layout><CommercialPage /></Layout>} />
        <Route path="/politicas" element={<Layout><PoliciesPage /></Layout>} />
        <Route path="/cotizador" element={
          <Layout>
            <div className="py-24 bg-gray-50 min-h-screen">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-black text-dark uppercase tracking-tighter mb-4">Cotizador Inteligente</h1>
                  <p className="text-gray-500 text-lg">Obtén una cotización precisa en poco tiempo.</p>
                </div>
                <SmartQuoter />
              </div>
            </div>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}
