import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Monaco", href: "#monaco" },
  ];

  const logoSrc = `${import.meta.env.BASE_URL}wentex-logo.png`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-white/5 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={logoSrc} 
              alt="Wentex Logo" 
              className="h-8 md:h-10 object-contain invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-wider uppercase text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <span className="text-xs tracking-widest text-muted-foreground uppercase cursor-pointer hover:text-white">
              EN / AR
            </span>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-12">
              <img src={logoSrc} alt="Wentex" className="h-8 invert opacity-90" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-primary"
              >
                Contact
              </a>
            </nav>
            
            <div className="mt-auto pb-8">
              <div className="flex gap-4 mb-8">
                <span className="text-sm font-medium tracking-widest text-white border-b border-primary">EN</span>
                <span className="text-sm font-medium tracking-widest text-muted-foreground">AR</span>
              </div>
              <a href="tel:+962788004400" className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <span>+962 78 800 4400</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
