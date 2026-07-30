import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

/**
 * Componente Footer - Pie de página simplificado
 * 
 * Diseño limpio con información de contacto y redes sociales.
 * Usa react-icons para consistencia con el resto de la web.
 * 
 * @returns {JSX.Element} Pie de página
 */
export default function Footer() {
  return (
    <footer className="bg-musgo py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-crema/50 text-xs text-center">
          © 2025 Riego Mendoza. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
