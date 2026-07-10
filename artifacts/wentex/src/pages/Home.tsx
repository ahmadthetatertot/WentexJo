import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HeritageStrip } from "@/components/sections/Heritage";
import { Products } from "@/components/sections/Products";
import { About } from "@/components/sections/About";
import { Monaco } from "@/components/sections/Monaco";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <HeritageStrip />
        <Products />
        <About />
        <Monaco />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
