import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Rodríguez",
    text: "Excelente servicio. Perdí las llaves de mi auto y en menos de 40 minutos ya tenía un duplicado programado. Muy profesionales.",
    rating: 5,
    source: "Google Reviews"
  },
  {
    name: "Ana Martínez",
    text: "Cambiaron todas las cerraduras de mi nueva casa. Me explicaron las opciones de seguridad y el trabajo quedó impecable.",
    rating: 5,
    source: "Google Reviews"
  },
  {
    name: "Roberto Sánchez",
    text: "Tuvimos una emergencia en el local comercial a las 2 AM y respondieron de inmediato. Totalmente recomendados.",
    rating: 5,
    source: "Google Reviews"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Testimonios</h2>
          <h3 className="text-4xl md:text-5xl font-black text-dark uppercase tracking-tighter">Lo que dicen nuestros clientes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-dark">{t.name}</h4>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{t.source}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
