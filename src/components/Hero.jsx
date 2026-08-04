import { FaWhatsapp, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import HeroImageCarousel from './HeroImageCarousel';

/**
 * Hero minimalista y elegante en Dark Mode.
 *
 * @returns {JSX.Element}
 */
export default function Hero() {
  const generarEnlaceWhatsApp = () => {
    const mensaje =
      '¡Hola! Vi su página y quiero información sobre un proyecto de riego automatizado.';
    return `https://wa.me/5492615416946?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <section
      className="relative flex min-h-screen items-center bg-musgo overflow-hidden"
      aria-labelledby="hero-heading"
    >

      {/* ── Capa 2: degradado radial (profundidad suave clara) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(46,89,64,0.15) 0%, rgba(31,61,43,0.4) 100%)',
        }}
      />



      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <header>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-dorado md:text-sm">
              Ingeniería Hídrica y Agronomía
            </p>

            <h1
              id="hero-heading"
              className="mt-4 font-heading text-4xl font-bold leading-[1.1] text-crema-2 sm:text-5xl lg:text-6xl"
            >
              Cada gota de agua,<br />
              <span className="text-dorado">controlada</span> con precisión.
            </h1>

            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-crema-2/70 md:text-lg">
              Diseñamos y automatizamos sistemas de riego inteligente en Mendoza. Protegé tus cultivos y optimizá tu jardín frente a la escasez hídrica con respaldo técnico profesional de la UNCuyo.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={generarEnlaceWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 font-body text-base font-semibold text-crema border-2 border-crema hover:bg-crema hover:text-musgo shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
                aria-label="Cotizar proyecto por WhatsApp"
              >
                <FaWhatsapp size={22} aria-hidden="true" />
                Cotizá tu proyecto
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-body text-base font-semibold text-crema-2/70 transition-colors hover:text-crema-2"
              >
                Ver servicios
                <FaArrowRight size={14} aria-hidden="true" />
              </a>
            </div>

            {/* Métricas integradas */}
            <ul className="mt-12 pt-8 border-t border-crema-2/10 grid grid-cols-3 gap-4">
              <li>
                <p className="font-heading text-2xl lg:text-3xl font-bold text-crema-2">
                  40<span className="text-dorado">%</span>
                </p>
                <p className="font-body text-xs font-semibold text-crema-2/70 mt-1">
                  Ahorro de agua
                </p>
              </li>
              <li>
                <p className="font-heading text-2xl lg:text-3xl font-bold text-crema-2">
                  100<span className="text-dorado">%</span>
                </p>
                <p className="font-body text-xs font-semibold text-crema-2/70 mt-1">
                  Automatizado
                </p>
              </li>
              <li>
                <p className="font-heading text-2xl lg:text-3xl font-bold text-crema-2">
                  24/7
                </p>
                <p className="font-body text-xs font-semibold text-crema-2/70 mt-1">
                  Monitoreo
                </p>
              </li>
            </ul>
          </header>

          <div className="hidden lg:block">
            <HeroImageCarousel />
          </div>
        </div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-crema-2/30 transition-colors hover:text-crema-2/60"
        aria-label="Ver indicadores de confianza"
      >
        <FaChevronDown size={20} aria-hidden="true" />
      </a>
    </section>
  );
}
