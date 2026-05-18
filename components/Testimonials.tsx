const testimonials = [
  {
    id: 1,
    name: "Fiama T.",
    location: "Córdoba Capital",
    rating: 5,
    text: "Una experiencia increíble, los guías son lo más y los paisajes te dejan sin palabras. ¡Volveremos seguro!",
    experience: "Cabalgata Full Day",
    initials: "FT",
    color: "bg-forest-700",
  },
  {
    id: 2,
    name: "Juan C.",
    location: "Buenos Aires",
    rating: 5,
    text: "Hicimos la cabalgata full day y fue espectacular. Muy buena organización y atención. 100% recomendable.",
    experience: "Cabalgata Full Day",
    initials: "JC",
    color: "bg-[#5a7340]",
  },
  {
    id: 3,
    name: "Sofía R.",
    location: "Rosario",
    rating: 5,
    text: "El trekking entre sierras fue desafiante y hermoso. Conectás con la naturaleza de verdad. Guías excelentes.",
    experience: "Trekking entre Sierras",
    initials: "SR",
    color: "bg-forest-600",
  },
];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "#c8a45a" : "none"}
      stroke={filled ? "#c8a45a" : "#4d7340"}
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="opiniones"
      className="py-24 lg:py-32 bg-[#0f1a0c]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-forest-500" />
            <span className="section-label">Lo que dicen nuestros aventureros</span>
            <div className="w-8 h-px bg-forest-500" />
          </div>
          <h2
            id="testimonials-heading"
            className="reveal font-display text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Experiencias Reales
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.id}
              className={`reveal reveal-delay-${i + 1} 
                          relative flex flex-col p-7 rounded-sm
                          bg-[#111d0d] border border-forest-800/40
                          hover:border-forest-600/50 hover:-translate-y-1
                          transition-all duration-400 group`}
            >
              {/* Quote mark */}
              <div
                className="absolute top-5 right-6 text-forest-800/60 group-hover:text-forest-700/60 transition-colors duration-300"
                aria-hidden="true"
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                  <path d="M14 22c0-5.5 4-10 10-11l1.5 2.5C22 15 20 17.5 20 20h4v10h-10V22zm18 0c0-5.5 4-10 10-11l1.5 2.5C40 15 38 17.5 38 20h4v10H32V22z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4" role="img" aria-label={`${t.rating} de 5 estrellas`}>
                {[...Array(5)].map((_, s) => (
                  <StarIcon key={s} filled={s < t.rating} />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/70 font-body text-base leading-relaxed mb-6 flex-1 italic">
                "{t.text}"
              </p>

              {/* Experience tag */}
              <div className="inline-flex self-start mb-5">
                <span className="text-forest-400 text-xs font-body font-medium tracking-wide border border-forest-700/50 px-3 py-1 rounded-sm">
                  {t.experience}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-forest-800/30">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shrink-0`}
                  aria-hidden="true"
                >
                  <span className="text-white text-sm font-body font-semibold">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white font-body font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 font-body text-xs">{t.location}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="reveal mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          {[
            { num: "+50", label: "aventureros" },
            { num: "5★", label: "calificación" },
            { num: "7", label: "experiencias" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span
                className="font-display text-2xl sm:text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.num}
              </span>
              <span className="text-white/40 font-body text-xs tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
