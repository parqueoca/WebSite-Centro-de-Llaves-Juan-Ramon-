import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, AlertCircle, Info, Scale, Clock, CheckCircle2 } from 'lucide-react';

export default function PoliciesPage() {
  const policies = [
    {
      id: 1,
      title: "Comprobante de Compra",
      content: "Para cualquier solicitud de garantía, cambio o reclamación, será indispensable la presentación de la factura o comprobante de compra original.",
      icon: FileText
    },
    {
      id: 2,
      title: "Verificación de Productos y Servicios",
      content: "El cliente deberá verificar, al momento de la entrega, que los productos adquiridos y/o servicios recibidos se encuentren completos y en buen estado. Una vez finalizada la entrega, se considerará aceptada la conformidad del producto o servicio.",
      icon: CheckCircle2
    },
    {
      id: 3,
      title: "Uso Inadecuado",
      content: "La garantía no cubrirá daños ocasionados por uso indebido, negligencia, golpes, exposición a humedad, alteraciones físicas o cualquier condición ajena a defectos de fabricación.",
      icon: AlertCircle
    },
    {
      id: 4,
      title: "Selección de Productos",
      content: "En los casos en que el cliente seleccione directamente un producto sin asesoría técnica, será responsable de su elección. No obstante, el establecimiento podrá, a su discreción, otorgar un cambio o emitir una nota de crédito, siempre que el producto se encuentre en condiciones óptimas.",
      icon: Info
    },
    {
      id: 5,
      title: "Garantía de Productos Electrónicos",
      content: "Los productos electrónicos comercializados cuentan con una garantía limitada de treinta (30) días, exclusivamente por defectos de fabricación o fallas de funcionamiento no atribuibles al uso del cliente.",
      icon: ShieldCheck
    },
    {
      id: 6,
      title: "Procedimiento de Garantía",
      content: "Todo producto será sometido a evaluación técnica. En caso de confirmarse un defecto de fábrica, el tiempo estimado de solución, cambio o ajuste será de hasta veinticuatro (24) horas a partir de la validación técnica.",
      icon: Clock
    },
    {
      id: 7,
      title: "Política de Devoluciones",
      content: "No se realizarán devoluciones de dinero bajo ninguna circunstancia. En caso de reclamaciones aprobadas, se emitirá una nota de crédito por el valor correspondiente, con una vigencia de seis (6) meses.",
      icon: Scale
    },
    {
      id: 8,
      title: "Garantía de Baterías",
      content: "Las baterías cuentan con garantía únicamente al momento de su instalación, verificándose su correcto funcionamiento y nivel de carga. No se asumirá responsabilidad por descargas posteriores, consumo irregular de energía o uso inadecuado.",
      icon: ShieldCheck
    },
    {
      id: 9,
      title: "Condiciones para Aplicación de Garantía",
      content: "Para la validez de la garantía, el producto deberá ser presentado en su empaque original y en las mismas condiciones en que fue entregado. El incumplimiento de esta disposición podrá invalidar cualquier reclamación.",
      icon: Info
    },
    {
      id: 10,
      title: "Pérdida de Garantía",
      content: "La garantía quedará automáticamente anulada en caso de que el producto haya sido: Abierto o manipulado por el cliente, intervenido por terceros no autorizados o modificado o alterado de cualquier forma.",
      icon: AlertCircle
    },
    {
      id: 11,
      title: "Servicios de Reparación",
      content: "Los servicios de reparación y trabajos técnicos cuentan con una garantía de quince (15) días, limitada a la verificación del servicio realizado. No se incluyen daños ocasionados por sobrecargas eléctricas, uso indebido o fallas externas posteriores al servicio.",
      icon: CheckCircle2
    },
    {
      id: 12,
      title: "Servicios de Cerrajería Automotriz y Residencial",
      content: "No nos hacemos responsables por sistemas electrónicos del vehículo que presenten fallas ajenas al servicio. El cliente debe demostrar propiedad del vehículo o inmueble antes de realizar aperturas o programación de llaves.",
      icon: ShieldCheck
    },
    {
      id: 13,
      title: "Responsabilidad en Aperturas",
      content: "El cliente autoriza el servicio de apertura bajo su responsabilidad. Centro de Llaves Juan Ramón no se hace responsable por daños preexistentes o inevitables durante el proceso.",
      icon: AlertCircle
    },
    {
      id: 14,
      title: "Llaves y Controles Programados",
      content: "No hay garantía si el vehículo presenta fallas electrónicas previas o posteriores. No se garantiza compatibilidad en equipos previamente manipulados.",
      icon: ShieldCheck
    },
    {
      id: 15,
      title: "Tiempo de Entrega",
      content: "Los tiempos pueden variar según diagnóstico técnico y disponibilidad de piezas. Las soluciones técnicas se procesan en un estimado de veinticuatro (24) horas luego de la confirmación técnica.",
      icon: Clock
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-dark py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6"
          >
            Políticas y <span className="text-primary">Condiciones</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto font-medium"
          >
            Términos generales de venta y servicio de Centro de Llaves Juan Ramón.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-gray-600 leading-relaxed text-lg">
            Las presentes políticas establecen los términos y condiciones aplicables a todas las ventas de productos y servicios ofrecidos por <strong>Centro de Llaves Juan Ramón</strong>. Al realizar una compra o solicitar un servicio, el cliente acepta íntegramente las disposiciones aquí descritas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-primary transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-primary transition-colors shrink-0">
                  <policy.icon className="w-6 h-6 text-primary group-hover:text-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-dark uppercase tracking-tighter mb-3">
                    {policy.id}. {policy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {policy.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-dark rounded-[3rem] text-center text-white"
        >
          <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Compromiso de Calidad</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            En Centro de Llaves Juan Ramón trabajamos para garantizar su seguridad y satisfacción. Estas políticas nos permiten mantener un estándar de servicio profesional y transparente para todos nuestros clientes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
