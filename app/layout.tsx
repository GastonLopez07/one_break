import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Break Adventure | Cabalgatas y Trekking en Córdoba",
  description:
    "Viví la aventura en las Sierras de Córdoba con One Break Adventure. Cabalgatas, trekking guiado y experiencias únicas en la naturaleza. Reservá tu lugar hoy.",
  keywords: ["cabalgatas córdoba", "trekking sierras córdoba", "turismo aventura córdoba", "one break adventure"],
  authors: [{ name: "One Break Adventure" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://onebreakadventure.com",
    siteName: "One Break Adventure",
    title: "One Break Adventure | Cabalgatas y Trekking en Córdoba",
    description: "Viví la aventura en las Sierras de Córdoba. Cabalgatas, trekking y experiencias únicas.",
    images: [{ url: "/images/grupo2.png" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased grain">{children}</body>
    </html>
  );
}
