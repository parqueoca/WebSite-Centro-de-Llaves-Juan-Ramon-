import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Hairo Caraballo",
    text: "Muy buen servicio, muy atentos aquí resuelves llegue con un problema de la puerta del conductor por llave y me fui hasta con un control, sinceramente son la solución 👏🏽",
    rating: 5,
    source: "Google Reviews",
    image: "https://picsum.photos/seed/hairo/100/100"
  },
  {
    name: "Eddy Montero",
    text: "Excelente trabajo y muy económico, sin lugar a dudas fui atendido por un profesional. He usado ya en varias ocasiones...",
    rating: 5,
    source: "Google Reviews",
    image: "https://picsum.photos/seed/eddy/100/100"
  },
  {
    name: "Miguelina Jimenez",
    text: "Juan Ramón el mejor!! Lo llamé ppr que me quede encerrada en mi apartamento me dijo 35 minutos y llego en menos !! Y eso...",
    rating: 5,
    source: "Google Reviews",
    image: "https://picsum.photos/seed/miguelina/100/100"
  },
  {
    name: "Margarita Gerdo",
    text: "Son personas honradas en los cuales se puede confiar, dedicados a su trabajo desde hace años.",
    rating: 5,
    source: "Google Reviews",
    image: "https://picsum.photos/seed/margarita/100/100"
  },
  {
    name: "Jazmín De Jesús",
    text: "Atenciones de primera, muy satisfecha con el servicio prestado. Recomendado 100%",
    rating: 5,
    source: "Google Reviews",
    image: "https://picsum.photos/seed/jazmin/100/100"
  },
  {
    name: "Bersoly Carrasco",
    text: "SIEMPRE CON LA SOLUCIÓN DE TUS LLAVES. MUY RARO QUE NO TE SOLUCIONEN EL PROBLEMA CON EL QUE VAYAS EN RELACIÓN A LLAVES.",
    rating: 5,
    source: "Google Reviews",
    image: "https://picsum.photos/seed/bersoly/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Testimonios Reales</h2>
          <h3 className="text-4xl md:text-5xl font-black text-dark uppercase tracking-tighter">Opiniones de nuestros clientes</h3>
          <p className="mt-4 text-gray-500 font-medium">Extraído directamente de nuestro perfil de Google Business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative group hover:border-primary transition-all flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-2xl object-cover shadow-md border-2 border-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-dark">{t.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{t.source}</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="text-[10px] text-primary font-black uppercase tracking-tighter">Cliente Verificado</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/search?q=Centro+de+Llaves+Juan+Ramón+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-dark transition-all shadow-lg hover:shadow-primary/20"
          >
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
