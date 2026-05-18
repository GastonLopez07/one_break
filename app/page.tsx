import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative bg-[#0f1a0c]">
      <Navbar />
      <Hero />
      <Features />
      <Experiences />
      <Gallery />
      <Testimonials />
      <Location />
      <CtaFinal />
      <Footer />
      <ScrollReveal />
    </main>
  );
}
