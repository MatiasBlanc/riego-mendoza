/**
 * StatItem - Métrica individual reutilizable
 *
 * Estructura semántica con valor destacado y etiqueta legible.
 * Pensado para grillas de 2 o 4 columnas.
 *
 * @param {Object} props
 * @param {string} props.value - Valor numérico o métrica (ej. "40", "+50")
 * @param {string} props.label - Descripción corta de la métrica
 * @param {string} [props.suffix] - Sufijo opcional (ej. "%") con acento dorado
 * @param {string} [props.className] - Clases extra (bordes de grilla, etc.)
 * @returns {JSX.Element}
 */
export default function StatItem({ value, label, suffix = '', className = '' }) {
  const valorCompleto = `${value}${suffix}`;

  return (
    <li
      className={`flex list-none flex-col items-center justify-center px-5 py-8 text-center sm:px-6 md:py-10 ${className}`.trim()}
    >
      <p className="font-heading text-[2.5rem] font-bold leading-none tracking-tight text-musgo md:text-5xl lg:text-[3.25rem]">
        <data value={valorCompleto} className="tabular-nums">
          {value}
          {suffix ? <span className="text-dorado">{suffix}</span> : null}
        </data>
      </p>

      <p className="max-w-[11rem] font-body text-sm font-semibold leading-relaxed tracking-[0.02em] text-tinta-suave md:text-base">
        {label}
      </p>
    </li>
  );
}
