import { useEffect, useState, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const LANGUAGES = [
  { code: "EN", label: "English", dir: "ltr" },
  { code: "AR", label: "العربية", dir: "rtl" },
  { code: "FR", label: "Français", dir: "ltr" },
  { code: "TR", label: "Türkçe", dir: "ltr" },
  { code: "HE", label: "עברית", dir: "rtl" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState(LANGUAGES[0]);
  const langRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selectLang = (lang: typeof LANGUAGES[0]) => {
    setActiveLang(lang);
    setLangOpen(false);
    document.documentElement.dir = lang.dir;
    document.documentElement.lang = lang.code.toLowerCase();
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Monaco", href: "#monaco" },
  ];

  const logoSrc = `${import.meta.env.BASE_URL}wentex-logo.png`;

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        id="scroll-progress"
        style={{ width: progressWidth }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-[#0E1928]/8 py-3 shadow-sm"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={logoSrc}
              alt="Wentex Logo"
              className={`h-10 md:h-14 object-contain transition-all duration-300 ${
                isScrolled ? "opacity-90 group-hover:opacity-100" : "invert opacity-90 group-hover:opacity-100"
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm tracking-wider uppercase transition-colors group ${
                  isScrolled
                    ? "text-[#0E1928]/60 hover:text-[#0E1928]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right side: Language + CTA */}
          <div className="hidden md:flex items-center gap-6">
            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 text-xs tracking-widest uppercase transition-colors ${
                  isScrolled ? "text-[#0E1928]/60 hover:text-[#0E1928]" : "text-white/60 hover:text-white"
                }`}
              >
                {activeLang.code}
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-3 w-40 bg-white border border-[#E3DDD4] shadow-lg overflow-hidden"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => selectLang(lang)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                          activeLang.code === lang.code
                            ? "bg-primary/5 text-primary"
                            : "text-[#0E1928]/70 hover:bg-[#FAF8F4] hover:text-[#0E1928]"
                        }`}
                      >
                        <span className="font-medium tracking-wide">{lang.code}</span>
                        <span className="text-xs opacity-70">{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="relative px-6 py-2.5 bg-primary text-white text-sm font-medium tracking-wide uppercase overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-[#0E1928]" : "text-white"}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#FAF8F4] flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-16">
              <img src={logoSrc} alt="Wentex" className="h-9 opacity-90" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#0E1928] p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="text-3xl font-serif text-[#0E1928] hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="text-3xl font-serif text-primary"
              >
                Contact
              </motion.a>
            </nav>

            <div className="mt-auto pb-8">
              {/* Language picker in mobile */}
              <div className="flex flex-wrap gap-3 mb-10">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => selectLang(lang)}
                    className={`px-3 py-1.5 text-xs tracking-widest uppercase border transition-colors ${
                      activeLang.code === lang.code
                        ? "bg-primary text-white border-primary"
                        : "border-[#0E1928]/20 text-[#0E1928]/60 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
              <a href="tel:+962788004400" className="flex items-center gap-3 text-[#0E1928]/60">
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
