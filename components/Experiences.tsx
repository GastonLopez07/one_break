"use client";

import Image from "next/image";
import { useState } from "react";

const WHATSAPP_NUMBER = "+5493513853153";


const experiences = [
  {
    id: "cabalgatas",
    eyebrow: "01 — CABALGATAS",
    title: ["MONTÁ", "LAS SIERRAS"],
    subtitle: "Dos experiencias, un mismo paisaje sin igual",
    description:
      "Recorridos a caballo por senderos escondidos entre las sierras cordobesas. Guías locales que conocen cada piedra, cada vista, cada silencio del monte.",
    variants: [
      { label: "CORTA", detail: "2 hs · Todos los niveles", msg: "Hola! Quiero consultar sobre la Cabalgata Corta.", highlight: false },
      { label: "FULL DAY", detail: "8 hs · Almuerzo criollo incluido", msg: "Hola! Quiero consultar sobre la Cabalgata Full Day.", highlight: true },
    ],
    images: [
      { src: "/images/cabalgata-hero.png", alt: "Cabalgata al atardecer en las sierras de Córdoba" },
    ],
    accent: "#4d7340",
    side: "left" as const,
  },
  {
    id: "trekking",
    eyebrow: "02 — TREKKING",
    title: ["CAMINÁ", "LO SALVAJE"],
    subtitle: "6 horas · Nivel medio",
    description:
      "Senderos que no aparecen en los mapas. Cumbres desde donde el mundo se ve diferente. Una experiencia guiada por los paisajes más increíbles de Córdoba.",
    variants: [
      { label: "ENTRE SIERRAS", detail: "6 hs · Nivel medio", msg: "Hola! Quiero consultar sobre el Trekking entre Sierras.", highlight: false },
    ],
    images: [
      { src: "/images/trekking.png", alt: "Trekking al atardecer en las sierras de Córdoba" },
    ],
    accent: "#c8a45a",
    side: "right" as const,
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Experiences() {
  return (
    <section id="experiencias" className="bg-[#0a1208]" aria-labelledby="experiences-heading">

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="reveal flex items-center gap-4 mb-5">
          <div className="w-10 h-px bg-forest-600" />
          <span className="section-label">Nuestras Experiencias</span>
        </div>
        <h2
          id="experiences-heading"
          className="reveal text-6xl sm:text-7xl lg:text-9xl text-white leading-none"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.01em" }}
        >
          ELEGÍ TU<br />
          <span className="text-gradient">AVENTURA</span>
        </h2>
      </div>

      {/* ── Experience blocks ── */}
      <div className="flex flex-col">
        {experiences.map((exp) => (
          <ExperienceBlock key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
}

// ─── EXPERIENCE BLOCK ─────────────────────────────────────────────────────────
function ExperienceBlock({ exp }: { exp: typeof experiences[0] }) {
  const [activeImg, setActiveImg] = useState(0);
  const isLeft = exp.side === "left";

  return (
    <div className="relative min-h-screen lg:min-h-[90vh] flex flex-col lg:flex-row overflow-hidden group">

      <div className={`relative w-full lg:w-3/5 h-[55vw] sm:h-[45vw] lg:h-auto min-h-[340px] overflow-hidden ${isLeft ? "lg:order-1" : "lg:order-2"}`}>

        {/* Images with crossfade */}
        {exp.images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: activeImg === i ? 1 : 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-[8s] ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Cinematic overlays */}
        <div className={`absolute inset-0 bg-gradient-to-${isLeft ? "r" : "l"} from-transparent via-transparent to-[#0a1208] hidden lg:block`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1208] via-transparent to-transparent lg:hidden" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Eyebrow on image */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
          <span
            className="text-white/50 text-xs tracking-[0.3em]"
            style={{ fontFamily: "var(--font-condensed)" }}
          >
            {exp.eyebrow}
          </span>
        </div>

        {/* Thumbnail switcher — only if multiple images */}
        {exp.images.length > 1 && (
          <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 flex gap-2">
            {exp.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                aria-label={`Ver imagen ${i + 1}`}
                className={`transition-all duration-300 rounded-sm overflow-hidden border
                  ${activeImg === i
                    ? "w-14 h-9 border-white/60 opacity-100"
                    : "w-9 h-9 border-white/20 opacity-50 hover:opacity-80"
                  }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={exp.images[i].src}
                    alt={`Miniatura ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Vertical text decoration — desktop only */}
        <div className={`absolute top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2 ${isLeft ? "right-8" : "left-8"}`}>
          <div className="w-px h-16 bg-white/20" />
        </div>
      </div>

      {/* ── CONTENT PANEL ── */}
      <div className={`relative w-full lg:w-2/5 flex items-center bg-[#0a1208] ${isLeft ? "lg:order-2" : "lg:order-1"}`}>
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-10 lg:py-16">

          {/* Big title */}
          <div className="mb-6 lg:mb-8">
            {exp.title.map((line, i) => (
              <div
                key={i}
                className="reveal overflow-hidden"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <h3
                  className={`text-5xl sm:text-6xl xl:text-7xl leading-none ${i === 1 ? "text-gradient" : "text-white"}`}
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
                >
                  {line}
                </h3>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <p
            className="reveal text-white/40 text-xs tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: "var(--font-condensed)" }}
          >
            {exp.subtitle}
          </p>

          {/* Divider */}
          <div className="reveal w-12 h-px mb-6" style={{ background: exp.accent }} />

          {/* Description */}
          <p
            className="reveal text-white/60 text-base sm:text-lg leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            {exp.description}
          </p>

          {/* Variants / CTAs */}
          <div className="reveal flex flex-col gap-4">
            {exp.variants.map((v) => (
              <a
                key={v.label}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(v.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn relative flex items-center justify-between gap-4 px-6 py-4 border
                            overflow-hidden transition-all duration-400 hover:-translate-y-0.5
                            ${v.highlight
                              ? "border-[#c8a45a]/50 hover:border-[#c8a45a] hover:shadow-[0_0_30px_rgba(200,164,90,0.2)]"
                              : "border-forest-700/50 hover:border-forest-500 hover:shadow-[0_0_30px_rgba(77,115,64,0.15)]"
                            }`}
                aria-label={`Consultar sobre ${v.label}`}
              >
                {/* Hover fill */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-400
                    ${v.highlight ? "bg-[#c8a45a]/8" : "bg-forest-900/40"}`}
                />

                {/* Left */}
                <div className="relative flex flex-col gap-0.5">
                  <span
                    className={`text-base font-semibold tracking-widest ${v.highlight ? "text-[#c8a45a]" : "text-white"}`}
                    style={{ fontFamily: "var(--font-condensed)" }}
                  >
                    {v.label}
                  </span>
                  <span
                    className="text-white/40 text-xs tracking-wide"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {v.detail}
                  </span>
                </div>

                {/* Right — arrow + WA */}
                <div className="relative flex items-center gap-3 shrink-0">
                  <span
                    className="text-white/30 text-xs tracking-widest hidden sm:block"
                    style={{ fontFamily: "var(--font-condensed)" }}
                  >
                    CONSULTAR
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300
                      ${v.highlight
                        ? "border-[#c8a45a]/40 group-hover/btn:border-[#c8a45a] group-hover/btn:bg-[#c8a45a]/10"
                        : "border-forest-700 group-hover/btn:border-forest-400 group-hover/btn:bg-forest-900"
                      }`}
                  >
                    <ArrowIcon color={v.highlight ? "#c8a45a" : "white"} />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom tag */}
          <div className="reveal mt-10 flex items-center gap-3">
            <div className="w-6 h-px bg-white/20" />
            <span
              className="text-white/20 text-xs tracking-[0.25em]"
              style={{ fontFamily: "var(--font-condensed)" }}
            >
              SIERRAS DE CÓRDOBA · ARGENTINA
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-800/40 to-transparent" />
    </div>
  );
}

function ArrowIcon({ color = "white" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
