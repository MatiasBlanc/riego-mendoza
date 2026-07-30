import { useEffect, useState } from 'react';

const FOTOS_HERO = [
  {
    src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80',
    alt: 'Sistema de riego por goteo en cultivo verde'
  },
  {
    src: 'https://images.unsplash.com/photo-1464297162577-f5295c892194?auto=format&fit=crop&w=1400&q=80',
    alt: 'Aspersores funcionando en jardín con vegetación'
  },
  {
    src: 'https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=1400&q=80',
    alt: 'Ingeniería de riego en finca agrícola'
  }
];

const INTERVALO_MS = 4200;

export default function HeroImageCarousel() {
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setIndiceActual((indicePrevio) => (indicePrevio + 1) % FOTOS_HERO.length);
    }, INTERVALO_MS);

    return () => window.clearInterval(intervalo);
  }, []);

  return (
    <aside className="relative w-full max-w-[580px]">
      <figure className="relative overflow-hidden rounded-3xl border border-crema/15 shadow-elevated aspect-[4/3] bg-musgo-2/50">
        {FOTOS_HERO.map((foto, indice) => (
          <img
            key={foto.src}
            src={foto.src}
            alt={foto.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              indice === indiceActual ? 'opacity-100' : 'opacity-0'
            }`}
            loading={indice === 0 ? 'eager' : 'lazy'}
          />
        ))}
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-musgo/85 via-musgo/45 to-transparent px-5 pb-4 pt-10">
          <p className="font-body text-sm font-medium tracking-wide text-crema/90">
            Proyectos reales de automatización y uso eficiente del agua.
          </p>
        </figcaption>
      </figure>

      <div
        className="absolute left-1/2 top-full z-10 mt-4 flex -translate-x-1/2 items-center gap-2 rounded-full border border-crema/15 bg-musgo/60 px-3 py-2 backdrop-blur-sm"
        aria-label="Indicador de imágenes del carrusel"
      >
        {FOTOS_HERO.map((foto, indice) => (
          <span
            key={foto.alt}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              indice === indiceActual ? 'w-6 bg-dorado' : 'w-2.5 bg-crema/45'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </aside>
  );
}
