"use client";

import Link from "next/link";

const WHATSAPP_NUMBER = "5493513853153";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20reservar%20una%20experiencia%20con%20One%20Break%20Adventure.`;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      aria-label="Sección principal"
    >
      {/* ── VIDEO BACKGROUND ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.85) saturate(1.3) contrast(1.05)" }}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster="/images/grupo2.png"
      >
          <source src="/videos/drone.mp4" type="video/mp4" />
      </video>

      {/* Overlays — más livianos para que se vea el video */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a0c] via-transparent to-transparent" aria-hidden="true" />


      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-5 animate-fade-in">
            <div className="w-8 h-px bg-forest-400" />
            <span className="section-label text-forest-300">Sierras de Córdoba, Argentina</span>
          </div>

          {/* Headline — Bebas Neue */}
          <h1 className="leading-none mb-6">
            <span
              className="block text-white/70 text-3xl sm:text-4xl animate-fade-up"
              style={{ fontFamily: "var(--font-condensed)", fontWeight: 400, letterSpacing: "0.1em", animationDelay: "0.1s", animationFillMode: "both" }}
            >
              VIVÍ LA AVENTURA
            </span>
            <span
              className="block text-6xl sm:text-8xl lg:text-[9rem] text-white animate-fade-up leading-none"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em", animationDelay: "0.2s", animationFillMode: "both" }}
            >
              EN CÓRDOBA
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/60 text-lg sm:text-xl leading-relaxed mb-2 animate-fade-up"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300, animationDelay: "0.35s", animationFillMode: "both" }}
          >
            Cabalgatas y trekking en las sierras.
          </p>
          <p
            className="text-white/40 text-base sm:text-lg leading-relaxed mb-10 animate-fade-up"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300, animationDelay: "0.45s", animationFillMode: "both" }}
          >
            Experiencias reales, lugares únicos.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.55s", animationFillMode: "both" }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Reservar ahora por WhatsApp">
              <WhatsAppIcon />
              RESERVAR AHORA
            </a>
            <Link href="#experiencias" className="btn-outline" aria-label="Ver experiencias">
              VER EXPERIENCIAS
              <ArrowDownIcon />
            </Link>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mt-10 text-white/40 text-sm animate-fade-up" style={{ animationDelay: "0.65s", animationFillMode: "both" }}>
            <PinIcon />
            <span style={{ fontFamily: "var(--font-body)" }}>Sierras de Córdoba, Argentina</span>
          </div>
        </div>
      </div>


    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.829L0 24l6.335-1.485A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.722.872.908-3.627-.235-.373A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}
function ArrowDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
