import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
import SobreMi from "./components/SobreMi";
import WhatsAppButton from "./components/WhatsAppButton";
import "./index.css";

/**
 * Componente principal de la aplicación
 *
 * Ensambla todos los componentes de la landing page
 * con navegación elegante y estructura semántica.
 *
 * @returns {JSX.Element} Landing page completa de Riego Mendoza
 */
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Contenido principal */}
      <main className="pt-14">
        <Hero />
        <Servicios />
        <SobreMi />
      </main>

      {/* Pie de página */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
