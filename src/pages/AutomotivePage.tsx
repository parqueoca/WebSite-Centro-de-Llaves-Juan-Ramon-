import React from 'react';
import { motion } from 'framer-motion';
import { Car, Key, Settings, ShieldCheck, Zap, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Key, title: 'Duplicado de Llaves', desc: 'Copiado de llaves con chip y controles remotos para todas las marcas.' },
  { icon: Settings, title: 'Programación', desc: 'Programación de llaves inteligentes y sistemas inmovilizadores.' },
  { icon: ShieldCheck, title: 'Aperturas', desc: 'Apertura de vehículos sin daños utilizando herramientas especializadas.' },
  { icon: Zap, title: 'Llaves Perdidas', desc: 'Generación de llaves desde cero cuando no tienes ninguna copia.' },
];

export default function AutomotivePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative min-h-[400px] md:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-automotriz.png" 
            alt="Automotive Locksmith" 
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
              Cerrajería <span className="text-primary">Automotriz</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Tecnología de punta para la seguridad de tu vehículo. Especialistas en llaves de alta seguridad y sistemas electrónicos.
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
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop" 
              alt="Car key programming" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Especialistas</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Tecnología de última generación</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              No importa la marca o el modelo de tu vehículo, contamos con los equipos necesarios para programar llaves inteligentes, controles remotos y realizar aperturas sin dañar la pintura o los mecanismos de tu auto.
            </p>
            <ul className="space-y-4 mb-10">
              {['Atención a domicilio', 'Precios competitivos', 'Equipos originales', 'Servicio 24/7'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-bold">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-dark" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/18096966792" className="btn-primary w-fit">
              <MessageSquare className="w-5 h-5" />
              Consulta por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
