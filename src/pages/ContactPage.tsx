import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Facebook, Instagram, Youtube } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-dark py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">Contacto</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por cualquier medio y te responderemos de inmediato.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Información</h2>
              <h3 className="text-4xl font-black text-dark uppercase tracking-tighter mb-8">Estamos a tu disposición</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Phone, title: 'Teléfono Tienda', detail: '(809) 532-8933', sub: 'Atención Comercial' },
                { icon: MessageSquare, title: 'WhatsApp / Emergencia', detail: '(809) 696-6792', sub: 'Respuesta inmediata' },
                { icon: Mail, title: 'Email', detail: 'info@centrodellavesjuanramon.com', sub: 'Consultas generales' },
                { icon: Clock, title: 'Horario', detail: 'Lunes - Domingo', sub: 'Abierto 24 horas' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-primary transition-colors group">
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest mb-2">{item.title}</h4>
                  <p className="text-xl font-black text-dark mb-1">{item.detail}</p>
                  <p className="text-sm text-gray-500">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="bg-dark p-10 rounded-[2.5rem] text-white">
              <div className="flex items-start gap-4 mb-8">
                <MapPin className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Nuestra Ubicación</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Av. Correa y Cidrón No. 10,<br />
                    Distrito Nacional, República Dominicana
                  </p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-xl font-bold mb-6">Síguenos en Redes</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/centrodellavesjuanramonrd" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-2xl hover:bg-primary hover:text-dark transition-all">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/centrodellavesjuanramonrd" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-2xl hover:bg-primary hover:text-dark transition-all">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.youtube.com/centrodellavesjuanramon" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-2xl hover:bg-primary hover:text-dark transition-all">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-black text-dark uppercase tracking-tighter mb-8">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-gray-500">Nombre</label>
                  <input type="text" className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-primary outline-none" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-gray-500">Teléfono</label>
                  <input type="tel" className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-primary outline-none" placeholder="+123..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-gray-500">Servicio</label>
                <select className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-primary outline-none bg-white">
                  <option>Automotriz</option>
                  <option>Residencial</option>
                  <option>Comercial</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-gray-500">Mensaje</label>
                <textarea className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-primary outline-none h-32" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-5 text-xl">
                Enviar Mensaje
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="h-[500px] bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <p className="text-gray-500 font-bold uppercase tracking-widest">Mapa Interactivo Aquí</p>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1920&auto=format&fit=crop" 
          alt="Map background" 
          className="w-full h-full object-cover opacity-30 grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
