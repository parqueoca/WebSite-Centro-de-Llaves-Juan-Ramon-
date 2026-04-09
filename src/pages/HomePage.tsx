import React from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Building2, ShieldCheck, Zap, Truck, Award, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import Hero from '@/src/components/Hero';
import SmartQuoter from '@/src/components/SmartQuoter';
import Testimonials from '@/src/components/Testimonials';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Quick Actions */}
      <div className="bg-dark py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6">
          <Link to="/cotizador" className="btn-primary px-10 py-5 text-xl">
            Cotizar Ahora
          </Link>
          <a href="https://wa.me/18096966792" className="btn-emergency px-10 py-5 text-xl">
            Emergencia WhatsApp
          </a>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Nuestros Servicios</h2>
            <h3 className="text-4xl md:text-6xl font-black text-dark uppercase tracking-tighter">Soluciones Profesionales</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                icon: Car, 
                title: 'Automotriz', 
                desc: 'Aperturas, llaves con chip, controles y programación.',
                link: '/servicios/automotriz',
                img: '/servicio-automotriz.jpg'
              },
              { 
                icon: Home, 
                title: 'Residencial', 
                desc: 'Cambio de guardas, cerraduras de alta seguridad y aperturas.',
                link: '/servicios/residencial',
                img: '/servicio-residencial.jpg'
              },
              { 
                icon: Building2, 
                title: 'Comercial', 
                desc: 'Cierrapuertas, barras antipánico y control de acceso.',
                link: '/servicios/comercial',
                img: '/servicio-comercial.jpg'
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-gray-50 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="h-64 overflow-hidden relative bg-gray-200">
                  <motion.img 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-full object-contain p-4 transition-transform duration-700" 
                    whileHover={{ scale: 1.1 }}
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent pointer-events-none" />
                  <s.icon className="absolute bottom-6 left-8 w-12 h-12 text-primary drop-shadow-lg" />
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-black text-dark mb-4 uppercase tracking-tighter">{s.title}</h4>
                  <p className="text-gray-600 mb-8 leading-relaxed">{s.desc}</p>
                  <Link to={s.link} className="flex items-center gap-2 font-bold text-dark hover:text-primary transition-colors">
                    Saber más <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Quoter Section */}
      <section id="cotizador" className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Cotizador Inteligente</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">Obtén tu precio al instante</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Completa nuestro asistente inteligente y recibe una cotización precisa vía WhatsApp de inmediato.
            </p>
          </div>
          <SmartQuoter />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Cerrajería Especializada</h2>
              <h3 className="text-4xl md:text-5xl font-black text-dark uppercase tracking-tighter mb-8">Excelencia en cada servicio</h3>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Contamos con años de experiencia brindando soluciones de seguridad. 
                Nuestros técnicos están certificados y equipados con la última tecnología.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: ShieldCheck, title: 'Garantía Total', desc: 'Trabajos 100% garantizados.' },
                  { icon: Zap, title: 'Respuesta Rápida', desc: 'Llegamos lo antes posible.' },
                  { icon: Truck, title: 'A Domicilio', desc: 'Vamos a donde nos necesites.' },
                  { icon: Award, title: 'Certificados', desc: 'Técnicos altamente capacitados.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-2xl h-fit">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop" 
                alt="Locksmith working" 
                className="rounded-[3rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-primary p-10 rounded-3xl shadow-xl z-20 hidden md:block">
                <span className="block text-5xl font-black text-dark mb-2">24/7</span>
                <span className="block text-sm font-bold uppercase tracking-widest text-dark/70">Servicio de Emergencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Proceso</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">¿Cómo funciona?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            
            {[
              { step: '01', title: 'Completa el Formulario', desc: 'Dinos qué necesitas a través de nuestro cotizador inteligente.' },
              { step: '02', title: 'Recibe Cotización', desc: 'Te enviamos un precio estimado y detalles vía WhatsApp.' },
              { step: '03', title: 'Servicio Realizado', desc: 'Un técnico llega a tu ubicación y soluciona tu problema.' },
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-dark border-4 border-primary rounded-full flex items-center justify-center text-3xl font-black text-primary mb-8 group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                  {item.step}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-dark uppercase tracking-tighter mb-8">¿Tienes una emergencia?</h2>
          <p className="text-dark/70 text-xl mb-12 max-w-2xl mx-auto font-medium">
            No esperes más. Estamos listos para ayudarte ahora mismo. 
            Servicio profesional garantizado las 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+18095328933" className="btn-secondary px-12 py-5 text-xl">
              <Phone className="w-6 h-6" />
              Llamar Ahora
            </a>
            <a href="https://wa.me/18096966792" className="bg-white hover:bg-gray-100 text-dark font-black px-12 py-5 rounded-xl text-xl shadow-xl transition-all flex items-center justify-center gap-2">
              <MessageSquare className="w-6 h-6" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
