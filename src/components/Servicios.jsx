'use client';

import { useState } from 'react';
import servicios from '../data/servicios.json';
import ServiceCard from './ui/ServiceCard';

/**
 * Componente Servicios - Sección principal de servicios
 * 
 * Presenta los servicios en un grid de cards con imágenes.
 * En móvil muestra 3 cards inicialmente con botón "Ver más".
 * En desktop muestra todas las cards.
 * 
 * @returns {JSX.Element} Sección de servicios completa
 */
export default function Servicios() {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const serviciosData = servicios.servicios;

  return (
    <section 
      id="servicios" 
      className="py-20 lg:py-28 bg-crema-2"
      aria-labelledby="servicios-heading"
    >
      <div className="container mx-auto px-6">
        {/* Encabezado de sección */}
        <header className="text-center mb-16">
          <div className="eyebrow justify-center">
            Nuestros Servicios
          </div>
          <h2 
            id="servicios-heading"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-musgo mt-4"
          >
            Llevamos el agua a la escala
            <br />
            <span className="text-dorado">de tu desafío</span>
          </h2>
        </header>
        
        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviciosData.map((servicio, index) => (
            <div 
              key={servicio.id}
              className={index >= 3 && !mostrarTodos ? 'hidden md:block' : ''}
            >
              <ServiceCard servicio={servicio} />
            </div>
          ))}
          
          {/* Card CTA personalizado */}
          <article className="bg-musgo rounded-2xl p-8 flex flex-col justify-center text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-crema mb-4">
              ¿Tu proyecto no entra en ninguna caja?
            </h3>
            <p className="font-body text-crema/70 text-base leading-relaxed mb-6">
              Mejor. Los proyectos a medida son nuestra especialidad. Contanos qué querés regar y lo diseñamos juntos.
            </p>
            <a
              href="https://wa.me/5492615416946?text=¡Hola!%20Tengo%20un%20proyecto%20a%20medida%20y%20quisiera%20consultarlos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-crema text-musgo font-semibold rounded-xl transition-colors mx-auto"
            >
              Contame tu idea
            </a>
          </article>
        </div>
        
        {/* Botones Ver más / Ver menos - Solo visible en móvil */}
        {serviciosData.length > 3 && (
          <div className="mt-10 text-center md:hidden">
            {!mostrarTodos ? (
              <button
                onClick={() => setMostrarTodos(true)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-musgo text-crema font-semibold rounded-xl hover:bg-musgo-2 active:scale-95 transition-all"
              >
                Ver más servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setMostrarTodos(false)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-musgo/10 text-musgo font-semibold rounded-xl hover:bg-musgo/20 active:scale-95 transition-all"
              >
                Ver menos servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
