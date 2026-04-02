/// <reference types="vite/client" />
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseInstance: SupabaseClient | null = null;

export const getSupabase = (): SupabaseClient => {
  if (supabaseInstance) return supabaseInstance;

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Configuración de Supabase faltante. Por favor, asegúrate de configurar VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en el panel de Secrets.'
    );
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
};

export const saveRequest = async (clientData: { nombre: string, telefono: string }, requestData: { tipo_servicio: string, detalles: any }) => {
  try {
    const supabase = getSupabase();
    
    // 1. Upsert client
    const { data: client, error: clientError } = await supabase
      .from('clientes')
      .insert([clientData])
      .select()
      .single();

    if (clientError) throw clientError;

    // 2. Save request
    const { data: request, error: requestError } = await supabase
      .from('solicitudes')
      .insert([{
        cliente_id: client.id,
        tipo_servicio: requestData.tipo_servicio,
        detalles: requestData.detalles,
        estado: 'nuevo'
      }])
      .select()
      .single();

    if (requestError) throw requestError;

    return { client, request };
  } catch (error) {
    console.error('Error saving to Supabase:', error);
    return null;
  }
};
