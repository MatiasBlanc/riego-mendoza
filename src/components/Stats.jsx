import StatItem from './ui/StatItem';

/**
 * Datos de las métricas de confianza.
 * Fuente única: se mapea a 4 instancias de StatItem.
 */
const METRICAS = [
  { value: '40', suffix: '%', label: 'Ahorro de agua' },
  { value: '100', suffix: '%', label: 'Automatizado' },
  { value: '24/7', suffix: '', label: 'Monitoreo' },
];

/**
 * Stats - Franja de métricas de confianza
 *
 * Sección semántica entre el Hero y Servicios.
 * Fondo crema sólido (sin degradés ni patrones) para
 * tipografía legible y transición limpia desde el hero.
 *
 * @returns {JSX.Element}
 */
export default function Stats() {
  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="relative bg-crema"
    >
      <div className="container relative z-10 mx-auto px-6 pt-6 pb-10 md:pt-8 md:pb-14">
        <h2 id="stats-heading" className="sr-only">
          Indicadores de confianza de Riego Mendoza
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 py-4">
          {METRICAS.map((metrica) => (
            <StatItem
              key={metrica.label}
              value={metrica.value}
              suffix={metrica.suffix}
              label={metrica.label}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
