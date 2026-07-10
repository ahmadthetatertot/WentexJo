import { motion } from "framer-motion";

export function Hero() {
  const imageSrc = `${import.meta.env.BASE_URL}images/hero.jpg`;

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={imageSrc}
            alt="Master tailor workspace"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A] pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-sm md:text-base tracking-[0.2em] uppercase text-primary font-medium">
              Amman, Jordan
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] text-white mb-8"
          >
            A legacy of <br />
            <span className="italic text-white/90">quiet precision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-12 font-light"
          >
            Since 1967, Wentex has defined the standard for premium shirts in the MENA region. 
            Trusted by institutions, designed for distinction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#products"
              className="px-8 py-4 bg-primary text-white text-sm tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors inline-flex"
            >
              Explore Collections
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-white/20 text-white text-sm tracking-[0.15em] uppercase hover:bg-white/5 transition-colors inline-flex"
            >
              Our Heritage
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
