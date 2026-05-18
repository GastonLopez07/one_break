# One Break Adventure — Landing Page

Landing page profesional para empresa de turismo de aventura en las Sierras de Córdoba, Argentina.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS

---

## 🚀 Instalación y uso

### 1. Clonar / descomprimir el proyecto

```bash
cd one-break-adventure
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Correr en desarrollo

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

### 4. Build para producción

```bash
npm run build
npm start
```

### 5. Deploy en Vercel

```bash
# Opción A — Vercel CLI
npm i -g vercel
vercel

# Opción B — Importar desde GitHub en vercel.com
# No requiere configuración adicional
```

---

## 📁 Estructura de archivos

```
one-break-adventure/
├── app/
│   ├── globals.css          # Estilos globales, fuentes, animaciones
│   ├── layout.tsx           # Root layout + SEO metadata
│   └── page.tsx             # Página principal (ensambla secciones)
├── components/
│   ├── Navbar.tsx           # Navbar sticky con menú hamburguesa
│   ├── Hero.tsx             # Hero con video background
│   ├── Features.tsx         # Strip de características (4 items)
│   ├── Experiences.tsx      # 3 cards de experiencias
│   ├── VideoSection.tsx     # Sección de video con play button
│   ├── Gallery.tsx          # Galería responsive (grid)
│   ├── Testimonials.tsx     # 3 testimonios
│   ├── Location.tsx         # Mapa y datos de ubicación
│   ├── CtaFinal.tsx         # CTA final de reserva
│   ├── Footer.tsx           # Footer completo
│   └── ScrollReveal.tsx     # Observer para animaciones al scroll
├── public/                  # Archivos estáticos (imágenes, favicon, etc.)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ✏️ Personalización — Checklist

### 🔢 Datos de contacto
Buscá `5493513124567` en todos los archivos y reemplazá con el número real de WhatsApp (sin + ni espacios).

### 📹 Video Hero
En `components/Hero.tsx`:
```tsx
<source src="/videos/hero.mp4" type="video/mp4" />
```
Copiá tu video en `public/videos/hero.mp4`.

### 🖼️ Imágenes de experiencias
En `components/Experiences.tsx`, reemplazá el `<div>` placeholder por:
```tsx
import Image from "next/image";
// ...
<Image
  src="/images/cabalgata-corta.jpg"
  alt="Cabalgata corta en las sierras"
  width={600}
  height={400}
  className="w-full h-56 object-cover"
  loading="lazy"
/>
```
Copiá las imágenes en `public/images/`.

### 🗺️ Google Maps
En `components/Location.tsx`, reemplazá el `<div>` placeholder por el `<iframe>` de Google Maps con tus coordenadas reales.

### 📸 Galería
En `components/Gallery.tsx`, reemplazá los divs placeholder con `<Image>` de Next.js.

### 📧 Email y redes sociales
Editá los links en `components/Footer.tsx`.

### 💰 Precios
Editá el array `experiences` en `components/Experiences.tsx`.

---

## 🎨 Sistema de diseño

| Token | Valor |
|-------|-------|
| Forest 600 (primary) | `#3a5a30` |
| Forest 700 | `#2d4625` |
| Gold accent | `#c8a45a` |
| Background dark | `#0f1a0c` |
| Background card | `#111d0d` |
| Font display | Playfair Display |
| Font body | DM Sans |

---

## 📱 Responsive breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## ✨ Features incluidos

- [x] Navbar transparente → sólida al hacer scroll
- [x] Menú hamburguesa mobile
- [x] Hero con estructura lista para video background
- [x] Strip de características
- [x] 3 cards de experiencias con precios y CTA
- [x] Sección video con play button interactivo
- [x] Galería responsive (masonry desktop / 2-col mobile)
- [x] 3 testimonios con estrellas y avatar
- [x] Mapa placeholder (listo para Google Maps embed)
- [x] CTA final con WhatsApp
- [x] Footer completo con links y redes
- [x] Animaciones reveal al scroll (IntersectionObserver)
- [x] SEO: metadata, Open Graph, semántica HTML
- [x] Lazy loading listo para imágenes reales
- [x] 100% Mobile-first
- [x] Listo para deploy en Vercel

---

© 2024 One Break Adventure
