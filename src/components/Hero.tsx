import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Cerrajería Automotriz",
    subtitle: "Especialistas en llaves con chip, programación y aperturas sin daño.",
    image: "/hero-automotriz.png",
    link: "/servicios/automotriz"
  },
  {
    id: 2,
    title: "Cerrajería Residencial",
    subtitle: "Protege lo que más quieres con sistemas de alta seguridad.",
    image: "/hero-residencial.png",
    link: "/servicios/residencial"
  },
  {
    id: 3,
    title: "Cerrajería Comercial",
    subtitle: "Control de acceso y seguridad perimetral para tu negocio.",
    image: "/hero-comercial.png",
    link: "/servicios/comercial"
  },
  {
    id: 4,
    title: "Servicio de Emergencias",
    subtitle: "Estamos disponibles 24/7 para ayudarte en cualquier situación.",
    image: "/hero-emergencia.png",
    link: "/cotizador"
  }
];

export default function Hero() {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[600px] md:h-[85vh] overflow-hidden bg-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-start py-20">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="inline-block bg-primary text-dark px-4 py-1 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-6">
                Cerrajería Especializada
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
                {slides[current].title.split(' ')[0]} <br />
                <span className="text-primary">{slides[current].title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed font-medium">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cotizador" className="btn-primary text-lg px-8 py-4">
                  Cotizar Ahora
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to={slides[current].link} className="btn-secondary text-lg px-8 py-4">
                  Ver Detalles
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20">
        <button onClick={prev} className="p-3 bg-white/10 hover:bg-primary hover:text-dark text-white rounded-full transition-all backdrop-blur-md">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={next} className="p-3 bg-white/10 hover:bg-primary hover:text-dark text-white rounded-full transition-all backdrop-blur-md">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-10 left-10 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div 
            key={i}
            className={`h-1 transition-all duration-500 ${i === current ? 'w-12 bg-primary' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
}
