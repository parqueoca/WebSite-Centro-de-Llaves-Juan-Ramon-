import React from 'react';
import { motion } from 'framer-motion';
import { Home, ShieldCheck, Key, Lock, Bell, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Lock, title: 'Cambio de Cerraduras', desc: 'Instalación y cambio de cerraduras de todas las marcas y niveles de seguridad.' },
  { icon: Key, title: 'Cambio de Guardas', desc: 'Reconfiguración de tus llaves actuales sin cambiar la cerradura completa.' },
  { icon: ShieldCheck, title: 'Alta Seguridad', desc: 'Instalación de cerrojos y sistemas de seguridad reforzados para tu hogar.' },
  { icon: Bell, title: 'Aperturas', desc: 'Servicio de apertura de puertas residenciales por olvido o pérdida de llaves.' },
];

export default function ResidentialPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative min-h-[400px] md:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-residencial.png" 
            alt="Residential Locksmith" 
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
              Cerrajería <span className="text-primary">Residencial</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Tu seguridad y la de tu familia es nuestra prioridad. Ofrecemos las mejores soluciones para proteger tu hogar.
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Seguridad</h2>
            <h3 className="text-4xl md:text-5xl font-black text-dark uppercase tracking-tighter mb-8">Protegemos lo que más quieres</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Desde una simple apertura hasta la instalación de sistemas de seguridad complejos, nuestro equipo está capacitado para manejar cualquier requerimiento residencial con la mayor discreción y profesionalismo.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="bg-primary p-3 rounded-xl h-fit">
                  <ShieldCheck className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-xl mb-1">Instalación Profesional</h4>
                  <p className="text-gray-500">Aseguramos que cada cerradura quede perfectamente instalada y funcional.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary p-3 rounded-xl h-fit">
                  <Bell className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-xl mb-1">Emergencias 24/7</h4>
                  <p className="text-gray-500">¿Te quedaste fuera? Llegamos rápido para ayudarte a entrar a tu casa.</p>
                </div>
              </div>
            </div>
            <a href="https://wa.me/18096966792" className="btn-primary w-fit">
              <MessageSquare className="w-5 h-5" />
              Consulta por WhatsApp
            </a>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=800&auto=format&fit=crop" 
              alt="Residential security" 
              className="rounded-[3rem] shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
