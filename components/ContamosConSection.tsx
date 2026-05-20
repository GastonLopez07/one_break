const items = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    numero: "01",
    titulo: "Cobertura Médica",
    descripcion: "Acompañamiento y asistencia durante toda la experiencia para mayor tranquilidad.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    numero: "02",
    titulo: "Transporte Exclusivo",
    descripcion: "Traslado desde Córdoba Capital hasta nuestro punto de encuentro en Carlos Paz.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M18 3l2 2-6 6" />
      </svg>
    ),
    numero: "03",
    titulo: "Guía Experta",
    descripcion: "Experiencias guiadas por personas con conocimiento real de la montaña y la zona.",
  },
];

export default function ContamosConSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#111d0d]" aria-labelledby="contamos-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-forest-500" />
            <span className="section-label">Lo que incluye</span>
            <div className="w-8 h-px bg-forest-500" />
          </div>
          <h2
            id="contamos-heading"
            className="reveal text-5xl sm:text-6xl lg:text-7xl text-white leading-none"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
          >
            CONTAMOS CON
          </h2>
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-3 gap-px bg-forest-800/20">
          {items.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}
                          group relative flex flex-col p-8 lg:p-12 bg-[#111d0d]
                          hover:bg-[#0f1a0c] transition-colors duration-500`}
            >
              {/* Number */}
              <span
                className="absolute top-6 right-6 lg:top-8 lg:right-8 text-forest-800/40 text-5xl font-bold leading-none select-none
                          group-hover:text-forest-700/40 transition-colors duration-500"
                style={{ fontFamily: "var(--font-display)" }}
                aria-hidden="true"
              >
                {item.numero}
              </span>

              {/* Icon */}
              <div className="text-forest-400 group-hover:text-forest-300 transition-colors duration-300 mb-8">
                {item.icon}
              </div>

              {/* Divider */}
              <div className="w-8 h-px bg-forest-700 group-hover:bg-forest-500 transition-colors duration-300 mb-6" />

              {/* Text */}
              <h3
                className="text-xl text-white mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
              >
                {item.titulo}
              </h3>
              <p
                className="text-white/50 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
