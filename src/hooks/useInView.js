import { useEffect, useRef, useState } from 'react';

/**
 * Hook useInView - Detecta cuando un elemento entra en el viewport
 * 
 * @param {Object} options - Opciones del Intersection Observer
 * @param {number} options.threshold - Porcentaje de visibilidad para activar (0-1)
 * @param {boolean} options.once - Si solo se activa una vez
 * @returns {Array} [ref, isInView]
 */
export default function useInView({ threshold = 0.1, once = true } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, isInView];
}
