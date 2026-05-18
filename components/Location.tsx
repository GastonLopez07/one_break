const WHATSAPP_NUMBER = "5493513853153";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quisiera%20saber%20c%C3%B3mo%20llegar%20al%20punto%20de%20encuentro.`;

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 lg:py-32 bg-[#111d0d]" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-forest-500" />
            <span className="section-label">Cómo llegar</span>
            <div className="w-8 h-px bg-forest-500" />
          </div>
          <h2 id="location-heading" className="reveal text-5xl sm:text-6xl text-white leading-none"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}>
            ¿DÓNDE ESTAMOS?
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Google Maps */}
          <div className="reveal reveal-left w-full h-72 sm:h-96 rounded-sm overflow-hidden border border-forest-800/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5031126395756!2d-64.56519142532471!3d-31.48285209946593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d682ffbf2e3e9%3A0x86057915d5a86479!2sAvenida%20Argentina%20N%C2%BA%20230%2C%20X5153%20Villa%20Icho%20Cruz%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1779069791186!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación One Break Adventure - Villa Icho Cruz, Córdoba"
            />
          </div>
          {/* Info */}
          <div className="reveal reveal-right flex flex-col gap-4">
            <div className="p-6 rounded-sm bg-[#0f1a0c] border border-forest-800/40">
              <h3 className="text-2xl text-white mb-3" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}>
                EN EL CORAZÓN DE LAS SIERRAS
              </h3>
              <p className="text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                Estamos ubicados en las Sierras de Córdoba, rodeados de naturaleza. 
                El punto de encuentro se coordina por WhatsApp al confirmar la reserva.
              </p>
            </div>
            {[
              { icon: "pin",   label: "Ubicación", value: "Sierras de Córdoba, Argentina" },
              { icon: "clock", label: "Horarios",  value: "Lunes a Domingo · 8:00 a 18:00 hs" },
              { icon: "phone", label: "Teléfono",  value: "+54 9 351 312 4567" },
              { icon: "mail",  label: "Email",     value: "info@onebreakadventure.com" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-sm border border-forest-800/30 hover:border-forest-700/50 transition-colors duration-300">
                <div className="text-forest-400 mt-0.5 shrink-0">
                  {item.icon === "pin"   && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>}
                  {item.icon === "clock" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>}
                  {item.icon === "phone" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>}
                  {item.icon === "mail"  && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>}
                </div>
                <div>
                  <p className="text-white/30 text-xs tracking-wide uppercase mb-0.5" style={{ fontFamily: "var(--font-condensed)" }}>{item.label}</p>
                  <p className="text-white/80 text-sm" style={{ fontFamily: "var(--font-body)" }}>{item.value}</p>
                </div>
              </div>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary self-start">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              CÓMO LLEGAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
