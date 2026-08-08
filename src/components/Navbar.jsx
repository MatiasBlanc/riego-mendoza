import { useState } from "react";
import { FaBars, FaInstagram, FaTimes } from "react-icons/fa";

const navElements = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#servicios" },
  { name: "Sobre mí", href: "#sobre-mi" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed top-0 left-0 right-0 z-40 bg-crema backdrop-blur-md border-b border-musgo/5"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Nombre */}
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <img
            src="/logo-circular.png"
            alt="Logo Riego Mendoza"
            className="w-14 h-14 object-contain"
          />
          <div>
            <span className="font-heading text-xl font-bold text-musgo block leading-tight">
              Riego Mendoza
            </span>
          </div>
        </a>

        {/* Enlaces de navegación - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navElements.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="font-body text-base font-medium text-tinta-suave hover:text-musgo transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-dorado group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-tinta-suave hover:text-musgo transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-tinta-suave hover:text-musgo focus:outline-none active:scale-95 transition-transform"
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden border-t border-musgo/5">
          <ul className="flex flex-col px-6 py-6 space-y-6">
            {navElements.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block font-body text-lg font-medium text-tinta-suave hover:text-musgo active:bg-musgo/5 active:text-musgo px-4 py-3 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-musgo/10">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-tinta-suave hover:text-musgo active:bg-musgo/5 rounded-xl transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
