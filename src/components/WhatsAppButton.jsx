import { FaWhatsapp } from 'react-icons/fa';

/**
 * Componente WhatsAppButton - Botón flotante de WhatsApp
 * 
 * Botón siempre visible en la esquina inferior derecha
 * que permite contacto rápido por WhatsApp.
 * 
 * @returns {JSX.Element} Botón flotante de WhatsApp
 */
export default function WhatsAppButton() {
  /**
   * Genera el enlace de WhatsApp con mensaje predeterminado
   * @returns {string} URL de WhatsApp con mensaje codificado
   */
  const generarEnlaceWhatsApp = () => {
    const mensaje = "¡Hola! Vi su página y quiero información sobre sus servicios de riego automatizado.";
    return `https://wa.me/5492615416946?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <a
      href={generarEnlaceWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-musgo text-crema text-xs font-medium px-4 py-2 rounded-xl whitespace-nowrap shadow-card">
          ¡Escribinos!
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-musgo rotate-45" />
        </div>
      </div>
      
      {/* Botón */}
      <div className="relative">
        {/* Anillo pulsante */}
        <div className="absolute inset-0 bg-musgo-2 rounded-full animate-ping opacity-25" />
        
        {/* Botón principal */}
        <div className="relative w-14 h-14 bg-gradient-to-br from-musgo-2 to-musgo border border-dorado/20 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <FaWhatsapp size={28} className="text-white" />
        </div>
      </div>
    </a>
  );
}
