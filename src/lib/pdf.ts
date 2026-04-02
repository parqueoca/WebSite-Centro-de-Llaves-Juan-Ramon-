import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export const generateQuotePDF = (quote: {
  clientName: string;
  service: string;
  description: string;
  price: number;
  notes?: string;
}) => {
  const doc = new jsPDF();
  const date = new Date().toLocaleDateString();

  // Header
  doc.setFillColor(245, 196, 0); // Primary color #f5c400
  doc.rect(0, 0, 210, 40, 'F');
  
  // Add Logo if possible
  try {
    doc.addImage('/logo.png', 'PNG', 10, 5, 30, 30);
  } catch (e) {
    console.error('Could not load logo for PDF', e);
  }

  doc.setTextColor(26, 26, 26);
  doc.setFontSize(22);
  doc.text('COTIZACIÓN DE CERRAJERÍA', 115, 25, { align: 'center' });

  // Info
  doc.setFontSize(12);
  doc.text(`Fecha: ${date}`, 150, 50);
  doc.text(`Cliente: ${quote.clientName}`, 20, 50);
  doc.text(`Servicio: ${quote.service}`, 20, 60);

  // Table
  (doc as any).autoTable({
    startY: 70,
    head: [['Descripción', 'Precio']],
    body: [[quote.description, `$${quote.price.toFixed(2)}`]],
    headStyles: { fillColor: [26, 26, 26] },
    theme: 'grid',
  });

  // Notes
  if (quote.notes) {
    const finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.text('Notas:', 20, finalY);
    doc.setFontSize(10);
    doc.text(quote.notes, 20, finalY + 7);
  }

  // Footer
  doc.setFontSize(10);
  doc.text('Gracias por su preferencia.', 105, 280, { align: 'center' });
  doc.text('Contacto: (809) 532-8933 | info@centrodellavesjuanramon.com', 105, 285, { align: 'center' });

  doc.save(`Cotizacion_${quote.clientName.replace(/\s/g, '_')}.pdf`);
};
