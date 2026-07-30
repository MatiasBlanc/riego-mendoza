import { ArrowRight } from 'lucide-react';

/**
 * Componente ServiceCard - Card de servicio con imagen
 * 
 * Renderiza un servicio con imagen, nombre, descripción
 * y CTA de WhatsApp.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.servicio - Datos del servicio desde el JSON
 * @returns {JSX.Element} Card de servicio
 */
export default function ServiceCard({ servicio }) {
  /**
   * Genera enlace de WhatsApp específico para el servicio
   * @returns {string} URL de WhatsApp con mensaje personalizado
   */
  const generarEnlace = () => {
    const mensaje = `¡Hola! Vi su página y me interesa información sobre ${servicio.nombre}.`;
    return `https://wa.me/5492615416946?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <article className="bg-crema rounded-2xl border border-crema-2 overflow-hidden group hover:border-dorado/30 hover:shadow-lg transition-all duration-300">
      {/* Imagen */}
      <div className="aspect-[4/3] bg-musgo/10 overflow-hidden">
        <img 
          src={servicio.imagen} 
          alt={servicio.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      {/* Contenido */}
      <div className="p-6">
        {/* Título */}
        <h3 className="font-heading text-2xl font-bold text-musgo mb-3">
          {servicio.nombre}
        </h3>
        
        {/* Descripción */}
        <p className="font-body text-tinta-suave text-base leading-relaxed mb-5">
          {servicio.descripcion}
        </p>
        
        {/* CTA */}
        <a
          href={generarEnlace()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-sm text-musgo hover:text-dorado transition-colors group/link"
          aria-label={`Consultar servicio de ${servicio.nombre} por WhatsApp`}
        >
          <span>Consultar este servicio</span>
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
