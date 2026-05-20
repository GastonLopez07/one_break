"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import type { Salida } from "@/types";

const WHATSAPP_NUMBER = "+5493513853153";

// Salidas de ejemplo mientras no hay datos en Supabase
const FALLBACK_SALIDAS: Salida[] = [
  {
    id: "1",
    titulo: "Cabalgata al Atardecer",
    descripcion: "Recorrido por senderos exclusivos con vista panorámica a las sierras mientras el sol se pone.",
    fecha: "2025-07-12",
    ubicacion: "Villa Icho Cruz, Córdoba",
    cupos_total: 8,
    cupos_disponibles: 3,
    imagen_url: "/images/cabalgata-hero.png",
    activa: true,
    created_at: "",
  },
  {
    id: "2",
    titulo: "Trekking Cerro Grande",
    descripcion: "Caminata guiada por el cerro más emblemático de la zona con vistas 360° de las sierras.",
    fecha: "2025-07-19",
    ubicacion: "Cosquín, Córdoba",
    cupos_total: 10,
    cupos_disponibles: 7,
    imagen_url: "/images/trekking.png",
    activa: true,
    created_at: "",
  },
  {
    id: "3",
    titulo: "Full Day Aventura",
    descripcion: "Día completo combinando cabalgata matutina, almuerzo criollo y trekking vespertino.",
    fecha: "2025-07-26",
    ubicacion: "Sierras de Córdoba",
    cupos_total: 6,
    cupos_disponibles: 2,
    imagen_url: "/images/grupo2.png",
    activa: true,
    created_at: "",
  },
];

function formatFecha(fechaStr: string) {
  const fecha = new Date(fechaStr + "T00:00:00");
  return {
    dia: fecha.toLocaleDateString("es-AR", { day: "2-digit" }),
    mes: fecha.toLocaleDateString("es-AR", { month: "short" }).toUpperCase(),
    año: fecha.toLocaleDateString("es-AR", { year: "numeric" }),
    completa: fecha.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" }),
  };
}

export default function ProximasSalidas() {
  const [salidas, setSalidas] = useState<Salida[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSalidas() {
      try {
        const { data, error } = await supabase
          .from("salidas")
          .select("*")
          .eq("activa", true)
          .gte("fecha", new Date().toISOString().split("T")[0])
          .order("fecha", { ascending: true })
          .limit(6);

        if (error || !data || data.length === 0) {
          setSalidas(FALLBACK_SALIDAS);
        } else {
          setSalidas(data);
        }
      } catch {
        setSalidas(FALLBACK_SALIDAS);
      } finally {
        setLoading(false);
      }
    }
    fetchSalidas();
  }, []);

  return (
    <section id="proximas-salidas" className="py-24 lg:py-32 bg-[#0a1208]" aria-labelledby="salidas-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <div className="reveal flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-forest-600" />
            <span className="section-label">Agenda</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2
              id="salidas-heading"
              className="reveal text-6xl sm:text-7xl lg:text-8xl text-white leading-none"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.01em" }}
            >
              PRÓXIMAS<br />
              <span className="text-gradient">SALIDAS</span>
            </h2>
            <p className="reveal text-white/40 max-w-xs text-sm leading-relaxed pb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              Plazas limitadas. Reservá con anticipación para asegurar tu lugar.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 rounded-sm bg-forest-900/30 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {salidas.map((salida, i) => (
              <SalidaCard key={salida.id} salida={salida} index={i} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="reveal mt-14 text-center">
          <p className="text-white/30 text-sm mb-4" style={{ fontFamily: "var(--font-body)" }}>
            ¿No encontrás tu fecha? Escribinos y armamos una salida privada.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20consultar%20sobre%20pr%C3%B3ximas%20salidas.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-forest-700/50 hover:border-forest-500
                        text-white/60 hover:text-white text-sm px-6 py-3 rounded-sm transition-all duration-300
                        hover:bg-forest-900/30 hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.1em" }}
          >
            CONSULTAR SALIDA PRIVADA →
          </a>
        </div>
      </div>
    </section>
  );
}

function SalidaCard({ salida, index }: { salida: Salida; index: number }) {
  const fecha = formatFecha(salida.fecha);
  const cuposBajos = salida.cupos_disponibles <= 3;
  const agotado = salida.cupos_disponibles === 0;
  const msg = `Hola! Quiero reservar para: ${salida.titulo} el ${fecha.completa}.`;

  return (
    <article
      className={`reveal reveal-delay-${Math.min(index + 1, 5)}
                  group relative flex flex-col overflow-hidden rounded-sm
                  border border-forest-800/40 bg-[#0f1a0c]
                  hover:border-forest-600/50 hover:-translate-y-2
                  transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        {salida.imagen_url ? (
          <Image
            src={salida.imagen_url}
            alt={salida.titulo}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-forest-900 to-[#0a1208]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a0c] via-black/20 to-transparent" />

        {/* Fecha badge */}
        <div className="absolute top-4 left-4 flex flex-col items-center bg-black/60 backdrop-blur-sm
                        border border-white/10 px-3 py-2 rounded-sm min-w-[52px] text-center">
          <span className="text-[#c8a45a] text-xl font-bold leading-none"
                style={{ fontFamily: "var(--font-display)" }}>{fecha.dia}</span>
          <span className="text-white/70 text-[10px] tracking-widest mt-0.5"
                style={{ fontFamily: "var(--font-condensed)" }}>{fecha.mes}</span>
        </div>

        {/* Cupos badge */}
        {cuposBajos && !agotado && (
          <div className="absolute top-4 right-4 bg-orange-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-sm"
              style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em" }}>
            ¡ÚLTIMOS {salida.cupos_disponibles} CUPOS!
          </div>
        )}
        {agotado && (
          <div className="absolute top-4 right-4 bg-red-900/80 backdrop-blur-sm text-white/70 text-xs px-2 py-1 rounded-sm"
              style={{ fontFamily: "var(--font-condensed)" }}>
            AGOTADO
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-forest-400 text-xs mb-3"
            style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.1em" }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          {salida.ubicacion.toUpperCase()}
        </div>

        <h3 className="text-xl text-white leading-tight mb-3"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>
          {salida.titulo}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
          {salida.descripcion}
        </p>

        {/* Cupos indicator */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-white/30 text-xs" style={{ fontFamily: "var(--font-body)" }}>
              Cupos disponibles
            </span>
            <span className={`text-xs font-semibold ${cuposBajos ? "text-orange-400" : "text-forest-400"}`}
                  style={{ fontFamily: "var(--font-condensed)" }}>
              {salida.cupos_disponibles}/{salida.cupos_total}
            </span>
          </div>
          <div className="w-full h-1 bg-forest-900 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${cuposBajos ? "bg-orange-500" : "bg-forest-500"}`}
              style={{ width: `${(salida.cupos_disponibles / salida.cupos_total) * 100}%` }}
            />
          </div>
        </div>

        {/* CTA */}
        <a
          href={agotado ? "#" : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`}
          target={agotado ? undefined : "_blank"}
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-sm text-sm font-semibold
                      transition-all duration-300 tracking-widest
                      ${agotado
                        ? "bg-forest-900/50 text-white/20 cursor-not-allowed border border-forest-800/30"
                        : "bg-forest-600 hover:bg-forest-500 text-white hover:shadow-[0_0_20px_rgba(77,115,64,0.4)] hover:-translate-y-0.5"
                      }`}
          style={{ fontFamily: "var(--font-condensed)" }}
          aria-disabled={agotado}
        >
          {agotado ? "SIN CUPOS" : "RESERVAR LUGAR"}
        </a>
      </div>
    </article>
  );
}
