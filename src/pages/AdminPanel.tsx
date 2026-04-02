import React from 'react';
import { getSupabase } from '@/src/lib/supabase';
import { generateQuotePDF } from '@/src/lib/pdf';
import { 
  Users, FileText, CheckCircle, Clock, 
  Download, Filter, Search, MoreVertical,
  LayoutDashboard, LogOut, Settings, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/lib/utils';

export default function AdminPanel() {
  const [requests, setRequests] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState('solicitudes');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [showQuoteModal, setShowQuoteModal] = React.useState(false);
  const [selectedRequest, setSelectedRequest] = React.useState<any>(null);
  
  // Quote form state
  const [quoteForm, setQuoteForm] = React.useState({
    description: '',
    price: 0,
    notes: ''
  });

  React.useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const supabase = getSupabase();
      const { data, error } = await supabase
        .from('solicitudes')
        .select(`
          *,
          clientes (nombre, telefono)
        `)
        .order('fecha', { ascending: false });

      if (error) console.error('Error fetching requests:', error);
      else setRequests(data || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const supabase = getSupabase();
      const { error } = await supabase
        .from('solicitudes')
        .update({ estado: status })
        .eq('id', id);

      if (error) console.error('Error updating status:', error);
      else fetchRequests();
    } catch (err) {
      console.error(err);
    }
  };

  const handleGeneratePDF = (request: any) => {
    setSelectedRequest(request);
    setQuoteForm({
      description: `Servicio de cerrajería ${request.tipo_servicio}`,
      price: 0,
      notes: ''
    });
    setShowQuoteModal(true);
  };

  const submitQuote = async () => {
    if (!selectedRequest) return;

    try {
      const supabase = getSupabase();
      // 1. Save quote to DB
      const { error } = await supabase
        .from('cotizaciones')
        .insert([{
          cliente_id: selectedRequest.cliente_id,
          solicitud_id: selectedRequest.id,
          descripcion: quoteForm.description,
          precio: quoteForm.price
        }]);

      if (error) {
        console.error('Error saving quote:', error);
      } else {
        // 2. Generate PDF
        generateQuotePDF({
          clientName: selectedRequest.clientes.nombre,
          service: selectedRequest.tipo_servicio.toUpperCase(),
          description: quoteForm.description,
          price: quoteForm.price,
          notes: quoteForm.notes
        });
        
        // 3. Update status
        handleUpdateStatus(selectedRequest.id, 'cotizado');
        setShowQuoteModal(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-dark text-white flex flex-col transition-transform duration-300 md:relative md:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Settings className="text-dark w-5 h-5" />
              </div>
              <span className="text-lg font-black uppercase tracking-tighter">Admin<span className="text-primary">Panel</span></span>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'solicitudes', icon: FileText, label: 'Solicitudes' },
              { id: 'clientes', icon: Users, label: 'Clientes' },
              { id: 'config', icon: Settings, label: 'Configuración' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all",
                  activeTab === item.id ? "bg-primary text-dark" : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto p-8">
          <button className="flex items-center gap-3 text-gray-400 hover:text-accent font-bold transition-colors">
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto w-full">
        <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-6 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg md:text-2xl font-black text-dark uppercase tracking-tighter truncate max-w-[200px] sm:max-w-none">
              {activeTab === 'solicitudes' ? 'Gestión de Solicitudes' : 'Base de Datos de Clientes'}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 ring-primary outline-none"
              />
            </div>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-dark">
              AD
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: 'Total Solicitudes', value: requests.length, icon: FileText, color: 'bg-blue-500' },
              { label: 'Nuevas', value: requests.filter(r => r.estado === 'nuevo').length, icon: Clock, color: 'bg-yellow-500' },
              { label: 'Cotizadas', value: requests.filter(r => r.estado === 'cotizado').length, icon: CheckCircle, color: 'bg-green-500' },
              { label: 'Completadas', value: requests.filter(r => r.estado === 'completado').length, icon: CheckCircle, color: 'bg-primary' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className={cn("p-3 rounded-xl text-white", stat.color)}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-dark">{stat.value}</span>
                </div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Cliente</th>
                    <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Servicio</th>
                    <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Estado</th>
                    <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Fecha</th>
                    <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-gray-400 font-bold">Cargando datos...</td>
                    </tr>
                  ) : requests.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-gray-400 font-bold">No hay solicitudes registradas</td>
                    </tr>
                  ) : (
                    requests.map((req) => (
                      <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-bold text-dark">{req.clientes?.nombre}</div>
                          <div className="text-xs text-gray-400">{req.clientes?.telefono}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">
                            {req.tipo_servicio}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                            req.estado === 'nuevo' ? "bg-yellow-100 text-yellow-700" :
                            req.estado === 'cotizado' ? "bg-blue-100 text-blue-700" :
                            "bg-green-100 text-green-700"
                          )}>
                            {req.estado}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(req.fecha).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => handleGeneratePDF(req)}
                              className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors"
                              title="Generar Cotización PDF"
                            >
                              <Download className="w-5 h-5" />
                            </button>
                            <button 
                              onClick={() => handleUpdateStatus(req.id, 'completado')}
                              className="p-2 hover:bg-green-100 text-green-600 rounded-lg transition-colors"
                              title="Marcar como Completado"
                            >
                              <CheckCircle className="w-5 h-5" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 text-gray-400 rounded-lg transition-colors">
                              <MoreVertical className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl"
          >
            <div className="bg-primary p-8 text-dark">
              <h2 className="text-2xl font-black uppercase tracking-tighter">Generar Cotización PDF</h2>
              <p className="font-bold opacity-70">Cliente: {selectedRequest?.clientes?.nombre}</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Descripción del Servicio</label>
                <input 
                  type="text" 
                  value={quoteForm.description}
                  onChange={(e) => setQuoteForm({...quoteForm, description: e.target.value})}
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-primary outline-none font-bold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Precio ($)</label>
                <input 
                  type="number" 
                  value={quoteForm.price}
                  onChange={(e) => setQuoteForm({...quoteForm, price: Number(e.target.value)})}
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-primary outline-none font-bold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Notas Adicionales</label>
                <textarea 
                  value={quoteForm.notes}
                  onChange={(e) => setQuoteForm({...quoteForm, notes: e.target.value})}
                  className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-primary outline-none font-bold h-24"
                  placeholder="Ej: Garantía de 6 meses..."
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => setShowQuoteModal(false)}
                  className="btn-secondary flex-1"
                >
                  Cancelar
                </button>
                <button 
                  onClick={submitQuote}
                  className="btn-primary flex-1"
                >
                  Generar y Descargar
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
