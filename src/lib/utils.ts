import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatWhatsAppMessage = (data: any) => {
  let message = `*Nueva Solicitud de Cerrajería*\n\n`;
  message += `*Cliente:* ${data.nombre}\n`;
  message += `*Teléfono:* ${data.telefono}\n`;
  message += `*Servicio:* ${data.tipo_servicio.toUpperCase()}\n\n`;
  
  message += `*Detalles:*\n`;
  Object.entries(data.detalles).forEach(([key, value]) => {
    if (value) {
      message += `- ${key.replace(/_/g, ' ')}: ${value}\n`;
    }
  });

  return encodeURIComponent(message);
};

export const getWhatsAppUrl = (phone: string, message: string) => {
  return `https://wa.me/${phone}?text=${message}`;
};
