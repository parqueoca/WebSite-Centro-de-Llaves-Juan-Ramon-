import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Settings, Lock, Users, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Lock, title: 'Sistemas Maestros', desc: 'Diseño e implementación de sistemas de llave maestra para edificios y oficinas.' },
  { icon: Settings, title: 'Control de Acceso', desc: 'Instalación de cerraduras electrónicas, biométricas y lectores de tarjetas.' },
  { icon: ShieldCheck, title: 'Barras Antipánico', desc: 'Instalación y mantenimiento de salidas de emergencia reglamentarias.' },
  { icon: Users, title: 'Mantenimiento', desc: 'Planes de mantenimiento preventivo para cerraduras y puertas comerciales.' },
];

export default function CommercialPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative min-h-[400px] md:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-comercial.png" 
            alt="Commercial Locksmith" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
              Cerrajería <span className="text-primary">Comercial</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Soluciones integrales de seguridad para empresas, locales comerciales y oficinas. Control total de tus accesos.
            </p>
            <Link to="/cotizador" className="btn-primary text-lg px-10 py-5">
              Cotizar Ahora
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-primary transition-all group">
                <div className="bg-white p-4 rounded-2xl w-fit mb-6 shadow-sm group-hover:bg-primary transition-colors">
                  <s.icon className="w-8 h-8 text-primary group-hover:text-dark" />
                </div>
                <h3 className="text-2xl font-black text-dark mb-4 uppercase tracking-tighter">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
              alt="Commercial security systems" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Negocios</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Seguridad corporativa</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Entendemos que la seguridad de tu negocio es fundamental para tu operación. Ofrecemos sistemas de control de acceso avanzados que te permiten gestionar quién entra y sale de tus instalaciones de manera eficiente.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {['Cierrapuertas', 'Barras Antipánico', 'Cerraduras Digitales', 'Llaves Maestras', 'Cajas Fuertes', 'Control Biométrico'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
            <a href="https://wa.me/18096966792" className="btn-primary w-fit">
              <MessageSquare className="w-5 h-5" />
              Asesoría Comercial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
