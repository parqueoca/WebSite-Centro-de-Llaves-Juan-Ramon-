import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, Home, Building2, ChevronRight, ChevronLeft, 
  CheckCircle2, Send, Phone, User, MapPin, 
  AlertCircle, Key, Settings, ShieldCheck
} from 'lucide-react';
import { cn, formatWhatsAppMessage, getWhatsAppUrl } from '@/src/lib/utils';
import { saveRequest } from '@/src/lib/supabase';

type ServiceType = 'automotriz' | 'residencial' | 'comercial' | null;

export default function SmartQuoter() {
  const [step, setStep] = React.useState(1);
  const [serviceType, setServiceType] = React.useState<ServiceType>(null);
  const [formData, setFormData] = React.useState<any>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const updateFormData = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const fullData = {
      nombre: formData.nombre,
      telefono: formData.telefono,
      tipo_servicio: serviceType,
      detalles: { ...formData }
    };

    // Save to Supabase
    await saveRequest(
      { nombre: formData.nombre, telefono: formData.telefono },
      { tipo_servicio: serviceType!, detalles: formData }
    );

    // Open WhatsApp
    const message = formatWhatsAppMessage(fullData);
    const whatsappUrl = getWhatsAppUrl('18096966792', message); // Primary WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setStep(100); // Success step
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-dark uppercase tracking-tighter text-center">¿Qué necesitas hoy?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: 'automotriz', icon: Car, label: 'Automotriz', desc: 'Llaves, programación, aperturas' },
                { id: 'residencial', icon: Home, label: 'Residencial', desc: 'Cerraduras, puertas, seguridad' },
                { id: 'comercial', icon: Building2, label: 'Comercial', desc: 'Control de acceso, sistemas' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setServiceType(item.id as ServiceType);
                    nextStep();
                  }}
                  className="flex flex-col items-center p-8 border-2 border-gray-100 rounded-2xl hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <item.icon className="w-12 h-12 text-gray-400 group-hover:text-primary mb-4" />
                  <span className="text-xl font-bold text-dark mb-2">{item.label}</span>
                  <span className="text-sm text-gray-500 text-center">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        if (serviceType === 'automotriz') {
          return (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-dark">Información del Vehículo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-gray-500">Marca</label>
                  <input 
                    type="text" 
                    placeholder="Ej: Toyota, Ford..." 
                    className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-primary outline-none"
                    onChange={(e) => updateFormData('marca', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-gray-500">Modelo</label>
                  <input 
                    type="text" 
                    placeholder="Ej: Corolla, F-150..." 
                    className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-primary outline-none"
                    onChange={(e) => updateFormData('modelo', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-gray-500">Año</label>
                  <input 
                    type="number" 
                    placeholder="2020" 
                    className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-primary outline-none"
                    onChange={(e) => updateFormData('anio', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-gray-500">Tipo de Servicio</label>
                  <select 
                    className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-primary outline-none bg-white"
                    onChange={(e) => updateFormData('servicio', e.target.value)}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="duplicado">Duplicado de llave</option>
                    <option value="llave_perdida">Llave perdida (Total Loss)</option>
                    <option value="programacion">Programación de control</option>
                    <option value="apertura">Apertura de puerta</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button onClick={prevStep} className="btn-secondary flex-1">Atrás</button>
                <button onClick={nextStep} className="btn-primary flex-1">Siguiente</button>
              </div>
            </div>
          );
        }
        // Simplified for other types
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark">Detalles del Servicio</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-gray-500">¿Qué necesitas?</label>
                <textarea 
                  placeholder="Describe brevemente tu problema..." 
                  className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-primary outline-none h-32"
                  onChange={(e) => updateFormData('descripcion', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-gray-500">Urgencia</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Normal', 'Urgente (Ahora)'].map(u => (
                    <button
                      key={u}
                      onClick={() => updateFormData('urgencia', u)}
                      className={cn(
                        "p-4 border-2 rounded-xl font-bold transition-all",
                        formData.urgencia === u ? "border-primary bg-primary/10 text-dark" : "border-gray-100 text-gray-500"
                      )}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button onClick={prevStep} className="btn-secondary flex-1">Atrás</button>
              <button onClick={nextStep} className="btn-primary flex-1">Siguiente</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark">Información de Contacto</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-gray-500">Tu Nombre</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Juan Pérez" 
                    className="w-full p-4 pl-12 border-2 border-gray-100 rounded-xl focus:border-primary outline-none"
                    onChange={(e) => updateFormData('nombre', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-gray-500">Tu Teléfono</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="tel" 
                    placeholder="+123 456 7890" 
                    className="w-full p-4 pl-12 border-2 border-gray-100 rounded-xl focus:border-primary outline-none"
                    onChange={(e) => updateFormData('telefono', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-gray-500">Ubicación</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Calle, Ciudad..." 
                    className="w-full p-4 pl-12 border-2 border-gray-100 rounded-xl focus:border-primary outline-none"
                    onChange={(e) => updateFormData('ubicacion', e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button onClick={prevStep} className="btn-secondary flex-1">Atrás</button>
              <button 
                onClick={handleSubmit} 
                disabled={isSubmitting || !formData.nombre || !formData.telefono}
                className="btn-primary flex-1 disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Obtener Cotización'}
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        );

      case 100:
        return (
          <div className="text-center space-y-6 py-8">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-black text-dark uppercase tracking-tighter">¡Solicitud Enviada!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Hemos recibido tu información y te hemos redirigido a WhatsApp. Un técnico se pondrá en contacto contigo en breve.
            </p>
            <button 
              onClick={() => {
                setStep(1);
                setFormData({});
                setServiceType(null);
              }}
              className="btn-secondary mx-auto"
            >
              Nueva Cotización
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      {/* Progress Bar */}
      {step < 100 && (
        <div className="h-2 bg-gray-100 w-full">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: '0%' }}
            animate={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      )}

      <div className="p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
