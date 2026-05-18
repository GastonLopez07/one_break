const WHATSAPP_NUMBER = "5493513124567";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20reservar%20mi%20lugar%20en%20One%20Break%20Adventure.`;

export default function CtaFinal() {
  return (
    <section id="contacto" className="relative py-24 lg:py-36 overflow-hidden bg-[#0f1a0c]" aria-labelledby="cta-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-forest-700/10 blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-600/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-600/40 to-transparent" />
      </div>
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-forest-600/30" aria-hidden="true" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-forest-600/30" aria-hidden="true" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-forest-600/30" aria-hidden="true" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-forest-600/30" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-forest-500" />
          <span className="section-label">Reservas abiertas</span>
          <div className="w-8 h-px bg-forest-500" />
        </div>
        <h2 id="cta-heading" className="reveal text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-6"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}>
          ¿LISTO PARA<br />
          <span className="text-gradient">LA AVENTURA?</span>
        </h2>
        <p className="reveal text-white/50 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
          Reservá tu lugar y viví una experiencia que no te vas a olvidar.
        </p>
        <div className="reveal">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-forest-600 hover:bg-forest-500 text-white
                       font-semibold text-lg px-10 py-5 rounded-sm transition-all duration-300
                       hover:shadow-[0_0_50px_rgba(77,115,64,0.5)] hover:-translate-y-1 active:scale-95"
            style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.12em" }}
          >
            <WhatsAppIcon /> RESERVAR POR WHATSAPP
          </a>
        </div>
        <div className="reveal flex flex-wrap items-center justify-center gap-6 mt-10 text-white/30">
          {["Respuesta inmediata", "Sin costo adicional", "Grupos reducidos"].map((b, i) => (
            <span key={i} className="flex items-center gap-2 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <span className="w-1 h-1 rounded-full bg-forest-500" /> {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.829L0 24l6.335-1.485A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.722.872.908-3.627-.235-.373A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}
