import { motion } from "framer-motion";

export function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}wentex-logo.png`;

  return (
    <footer className="bg-[#0E1928] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={logoSrc} alt="Wentex" className="h-10 invert opacity-80 mb-6" />
            <p className="text-white/40 text-sm max-w-xs font-light leading-relaxed">
              Premium shirt manufacturing, serving the MENA region with excellence since 1967.
            </p>
            <div className="mt-6">
              <div className="w-8 h-[1px] bg-primary mb-1" />
              <div className="w-5 h-[1px] bg-primary/50" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-12"
          >
            <div>
              <h5 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Navigation</h5>
              <div className="flex flex-col gap-3 text-sm text-white/40">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Collections", href: "#products" },
                  { label: "Our Heritage", href: "#about" },
                  { label: "Monaco Label", href: "#monaco" },
                  { label: "Contact", href: "#contact" },
                ].map(({ label, href }) => (
                  <a key={label} href={href} className="hover:text-primary transition-colors">{label}</a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Contact</h5>
              <div className="flex flex-col gap-3 text-sm text-white/40 font-light">
                <span>Amman, Jordan</span>
                <a href="tel:+962788004400" className="hover:text-primary transition-colors">+962 78 800 4400</a>
                <a href="mailto:info@wentex-jo.com" className="hover:text-primary transition-colors">info@wentex-jo.com</a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25 tracking-wide">
          <p>&copy; {new Date().getFullYear()} Wentex. All rights reserved.</p>
          <p>Amman, Jordan · Est. 1967</p>
        </div>
      </div>
    </footer>
  );
}
