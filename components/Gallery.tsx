import Image from "next/image";

const galleryItems = [
  { id: 1, src: "/images/grupo2.png",           alt: "Grupo en cabalgata panorámica" },
  { id: 2, src: "/images/chico-montando-1.png",  alt: "Jinete en las sierras" },
  { id: 3, src: "/images/cabalgata.png",         alt: "Cabalgata en campo abierto" },
  { id: 4, src: "/images/montando.jpeg",         alt: "Guía local a caballo" },
  { id: 5, src: "/images/grupo.jpeg",            alt: "Grupo de jinetes en fila" },
  { id: 6, src: "/images/chico-montando-2.png",  alt: "Jinete en cerro serrano" },
  { id: 7, src: "/images/mas-cabalgata.png",     alt: "Cabalgata en sendero serrano" },
  { id: 8, src: "/images/montando-2.jpeg",       alt: "Jinete en campo verde" },
  { id: 9, src: "/images/grupo-1.jpeg",          alt: "Familias en cabalgata grupal" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-[#111d0d]" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-forest-500" />
            <span className="section-label">Momentos reales</span>
            <div className="w-8 h-px bg-forest-500" />
          </div>
          <h2
            id="gallery-heading"
            className="text-6xl sm:text-7xl text-white leading-none"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
          >
            GALERÍA
          </h2>
        </div>

        {/* Grid 3x3 — perfectamente simétrico, todas las celdas iguales */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`reveal reveal-delay-${Math.min((i % 3) + 1, 5)}
                          group relative overflow-hidden rounded-sm cursor-pointer
                          aspect-[4/3]`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 50vw, 33vw"
                loading="lazy"
              />
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />
              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent
                              translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <p className="text-white/90 text-xs" style={{ fontFamily: "var(--font-body)" }}>{item.alt}</p>
              </div>
              {/* Corner decoration */}
              <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-white/0 group-hover:border-white/50 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="reveal text-center mt-10">
          <p className="text-white/30 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            Seguinos en Instagram →{" "}
            <a
              href="https://instagram.com/onebreakadventure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-400 hover:text-forest-300 transition-colors underline underline-offset-2"
            >
              @onebreakadventure
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
