import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Centro de Llaves Juan Ramón" className="h-32 w-auto" referrerPolicy="no-referrer" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluciones profesionales de cerrajería para tu vehículo, hogar y negocio. 
              Servicio rápido, confiable y garantizado las 24 horas.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/centrodellavesjuanramonrd" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/centrodellavesjuanramonrd" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/centrodellavesjuanramon" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-dark transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-primary">Servicios</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/servicios/automotriz" className="hover:text-white transition-colors">Cerrajería Automotriz</Link></li>
              <li><Link to="/servicios/residencial" className="hover:text-white transition-colors">Cerrajería Residencial</Link></li>
              <li><Link to="/servicios/comercial" className="hover:text-white transition-colors">Cerrajería Comercial</Link></li>
              <li><Link to="/cotizador" className="hover:text-white transition-colors">Cotizador Online</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-primary">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Av. Correa y Cidrón No. 10, Distrito Nacional</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(809) 532-8933 / (809) 696-6792</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@centrodellavesjuanramon.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-primary">Horarios</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span className="text-white">24 Horas</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span className="text-white">24 Horas</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-white">Emergencias</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Centro de Llaves Juan Ramón. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
