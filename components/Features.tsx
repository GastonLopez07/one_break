const features = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" /><path d="M8 12s1.5-2 4-2 4 2 4 2" /><path d="M9 9h.01M15 9h.01" /></svg>,
    title: "Cabalgatas",
    desc: "Para todos los niveles",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M3 17l4-8 3 5 3-3 4 6" /><path d="M21 3l-6 6" /></svg>,
    title: "Trekking",
    desc: "Aventura y naturaleza",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" /><path d="M16 3.13a4 4 0 010 7.75" /><path d="M21 21v-2a4 4 0 00-3-3.85" /></svg>,
    title: "Grupos Reducidos",
    desc: "Más conexión, mejor experiencia",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>,
    title: "Guías Locales",
    desc: "Seguridad y conocimiento",
  },
];

export default function Features() {
  return (
    <section className="relative z-10 bg-[#111d0d] border-y border-forest-800/40" aria-label="Características">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-forest-800/40">
          {features.map((f, i) => (
            <div key={i} className="reveal flex flex-col sm:flex-row items-start sm:items-center gap-3 px-6 py-7 group hover:bg-forest-900/30 transition-colors duration-300">
              <div className="text-forest-400 group-hover:text-forest-300 transition-colors duration-300 shrink-0">{f.icon}</div>
              <div>
                <p className="font-semibold text-white text-sm tracking-wide" style={{ fontFamily: "var(--font-condensed)" }}>{f.title}</p>
                <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "var(--font-body)" }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
