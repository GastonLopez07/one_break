import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#galeria", label: "Galería" },
  { href: "#opiniones", label: "Testimonios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

const experiences = [
  { label: "Cabalgata Corta" },
  { label: "Cabalgata Full Day" },
  { label: "Trekking entre Sierras" },
];

const WHATSAPP_NUMBER = "+5493513853153";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080f06] border-t border-forest-800/30" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#inicio" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/images/logo-icon.jpeg"
                  alt="One Break Adventure"
                  fill
                  className="object-contain rounded-sm"
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white text-sm" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.08em" }}>
                  ONE BREAK
                </span>
                <span className="text-[#c8a45a] text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-condensed)" }}>
                  ADVENTURE
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
              Experiencias de aventura en las Sierras de Córdoba, Argentina. Cabalgatas y trekking para todos los niveles.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Instagram", href: "https://instagram.com/onebreakadventure", icon: <InstagramIcon /> },
                { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61574730130796",  icon: <FacebookIcon /> },
                { label: "WhatsApp",  href: `https://wa.me/${WHATSAPP_NUMBER}`,         icon: <WhatsAppIcon /> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-sm border border-forest-800/50 flex items-center justify-center
                            text-white/40 hover:text-white hover:border-forest-600/60
                            transition-all duration-300 hover:-translate-y-0.5">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white text-xs tracking-widest uppercase mb-5" style={{ fontFamily: "var(--font-condensed)" }}>
              Navegación
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-200" style={{ fontFamily: "var(--font-body)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="text-white text-xs tracking-widest uppercase mb-5" style={{ fontFamily: "var(--font-condensed)" }}>
              Experiencias
            </h3>
            <ul className="flex flex-col gap-3">
              {experiences.map((exp) => (
                <li key={exp.label}>
                  <Link href="#experiencias" className="text-white/40 hover:text-white text-sm transition-colors duration-200" style={{ fontFamily: "var(--font-body)" }}>
                    {exp.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs tracking-widest uppercase mb-5" style={{ fontFamily: "var(--font-condensed)" }}>
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                { icon: <PhoneIcon />, text: "+54 9 3513853153", href: `tel:+${WHATSAPP_NUMBER}` },
                { icon: <MailIcon />,  text: "onebreakturismo@gmail.com", href: "mailto:onebreakturismo@gmail.com"},
                { icon: <PinIcon />,   text: "Sierras de Córdoba, Argentina" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-white/40 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  <span className="shrink-0 mt-0.5">{item.icon}</span>
                  {item.href
                    ? <a href={item.href} className="hover:text-white transition-colors duration-200">{item.text}</a>
                    : <span>{item.text}</span>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-forest-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            © {currentYear} One Break Adventure. Todos los derechos reservados.
          </p>
              <p className="text-[12px]">
          <a
            href="https://www.instagram.com/gastondev/"
            target="_blank"
            rel="noopener"
            className="text-gold no-underline hover:text-gold-light transition-colors"
          >
            Creada por GastonDev.
          </a>
        </p>
          <p className="text-white/15 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            Sierras de Córdoba, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}
function FacebookIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>;
}
function WhatsAppIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.829L0 24l6.335-1.485A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.722.872.908-3.627-.235-.373A9.818 9.818 0 1112 21.818z" /></svg>;
}
function PhoneIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>;
}
function MailIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
}
function PinIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function ClockIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
}
