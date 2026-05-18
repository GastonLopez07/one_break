"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "INICIO" },
  { href: "#experiencias", label: "EXPERIENCIAS" },
  { href: "#galeria", label: "GALERÍA" },
  { href: "#opiniones", label: "OPINIONES" },
  { href: "#ubicacion", label: "UBICACIÓN" },
  { href: "#contacto", label: "CONTACTO" },
];

const WHATSAPP_NUMBER = "5493513124567";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20reservar%20una%20experiencia%20con%20One%20Break%20Adventure.`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0f1a0c]/95 backdrop-blur-md border-b border-forest-800/50 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo real */}
            <Link href="#inicio" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/images/logo-icon.jpeg"
                  alt="One Break Adventure"
                  fill
                  className="object-contain rounded-sm"
                  sizes="40px"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white text-base" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.08em" }}>
                  ONE BREAK
                </span>
                <span className="text-[#c8a45a] text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-condensed)" }}>
                  ADVENTURE
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className="text-xs text-white/60 hover:text-white transition-colors duration-200 relative group"
                  style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.15em" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-forest-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-500 text-white text-xs px-4 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,115,64,0.5)] hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.12em" }}
              >
                <WhatsAppIcon /> RESERVAR
              </a>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isMenuOpen}
              >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-[#0f1a0c] border-l border-forest-800/50 transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center gap-3 px-8 pt-8 pb-4 border-b border-forest-800/30">
            <div className="relative w-10 h-10">
              <Image src="/images/logo-icon.jpeg" alt="One Break Adventure" fill className="object-contain rounded-sm" sizes="40px" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white text-sm" style={{ fontFamily: "var(--font-display)" }}>ONE BREAK</span>
              <span className="text-[#c8a45a] text-[9px] tracking-[0.3em]" style={{ fontFamily: "var(--font-condensed)" }}>ADVENTURE</span>
            </div>
          </div>
          <div className="flex flex-col px-8 pt-4 gap-1">
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}
                className="text-3xl text-white/80 hover:text-white py-3 border-b border-forest-800/30 transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)", transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 bg-forest-600 hover:bg-forest-500 text-white px-6 py-4 rounded-sm transition-all duration-300"
              style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.12em" }}
            >
              <WhatsAppIcon /> RESERVAR AHORA
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.829L0 24l6.335-1.485A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.722.872.908-3.627-.235-.373A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}
