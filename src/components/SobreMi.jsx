import { FaEnvelope } from 'react-icons/fa';

/**
 * Componente SobreMi - Sección sobre Luis Blanc
 * 
 * Sección personal que presenta al fundador de Riego Mendoza.
 * Diseño limpio y profesional centrado en la persona.
 * 
 * @returns {JSX.Element} Sección sobre mí
 */
export default function SobreMi() {
  return (
    <section id="sobre-mi" className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-crema">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <div className="eyebrow justify-center">
              Sobre mí
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-musgo mt-4">
              Luis Matías Blanc
            </h2>
            <p className="font-body text-tinta-suave text-lg mt-3">
              Ingeniero Agrónomo — UNCuyo
            </p>
          </div>

          {/* Contenido principal */}
          <div className="grid md:grid-cols-5 gap-10 items-start">
            {/* Foto */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] bg-musgo rounded-2xl overflow-hidden flex items-center justify-center">
                <img 
                  src="/logo-circular.png" 
                  alt="Riego Mendoza - Luis Matías Blanc"
                  className="w-40 h-40 object-contain opacity-90"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="md:col-span-3 space-y-6">
              <p className="font-body text-tinta text-base leading-relaxed">
                Soy ingeniero agrónomo recibido en la UNCuyo y desde hace años me dedico a algo que me apasiona: 
                que el agua llegue donde tiene que llegar, de la forma más eficiente posible.
              </p>
              <p className="font-body text-tinta text-base leading-relaxed">
                Empecé Riego Mendoza porque vi que muchas personas necesitaban sistemas de riego inteligentes 
                pero no sabían a dónde recurrir. No se trata solo de instalar caños y goteros; se trata de 
                entender cada espacio, cada planta, cada necesidad particular.
              </p>
              <p className="font-body text-tinta text-base leading-relaxed">
                Trabajo con todo: desde fincas y chacras hasta balcones y terrazas. Lo que importa no es 
                el tamaño del proyecto, sino que funcione bien y que el agua se use con criterio.
              </p>

              {/* Datos rápidos */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-crema-2">
                <div>
                  <p className="font-heading text-2xl font-bold text-musgo">+50</p>
                  <p className="text-sm text-tinta-suave">Proyectos realizados</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-musgo">UNCuyo</p>
                  <p className="text-sm text-tinta-suave">Formación académica</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-musgo">Mendoza</p>
                  <p className="text-sm text-tinta-suave">Base de operaciones</p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/5492615416946?text=¡Hola%20Luis!%20Vi%20tu%20página%20y%20quiero%20consultarte%20sobre%20un%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-musgo text-crema font-bold rounded-xl hover:bg-musgo-2 transition-colors"
                >
                  Hablemos de tu proyecto
                </a>
                <a
                  href="mailto:ingenieriariegomendoza@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-body text-base font-semibold text-musgo/70 transition-colors hover:text-musgo"
                >
                  <FaEnvelope size={14} />
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
