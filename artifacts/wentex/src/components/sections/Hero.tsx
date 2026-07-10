import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words1 = ["A", "legacy", "of"];
const words2 = ["quiet", "precision."];

function WordReveal({ words, delay = 0, italic = false }: { words: string[]; delay?: number; italic?: boolean }) {
  return (
    <span className={italic ? "italic text-white/90" : ""}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 40, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "top center" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageSrc = `${import.meta.env.BASE_URL}images/hero.jpg`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="w-full h-[120%] -top-[10%] absolute"
        >
          <img
            src={imageSrc}
            alt="Master tailor workspace"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1928]/70 via-[#0E1928]/50 to-[#0E1928] pointer-events-none" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="container relative z-10 px-6 md:px-12 pt-32 pb-20"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div
              className="h-[1px] bg-primary"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
            <span className="text-sm md:text-base tracking-[0.2em] uppercase text-primary font-medium">
              Amman, Jordan · Est. 1967
            </span>
          </motion.div>

          {/* Animated headline */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] text-white mb-8"
            style={{ perspective: "800px" }}
          >
            <WordReveal words={words1} delay={0.3} />
            <br />
            <WordReveal words={words2} delay={0.65} italic />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-12 font-light"
          >
            Since 1967, Wentex has defined the standard for premium shirts in the MENA region.
            Trusted by institutions, designed for distinction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#products"
              className="relative px-8 py-4 bg-primary text-white text-sm tracking-[0.15em] uppercase overflow-hidden group inline-flex"
            >
              <span className="relative z-10">Explore Collections</span>
              <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-white/30 text-white text-sm tracking-[0.15em] uppercase hover:bg-white/10 transition-colors inline-flex"
            >
              Our Heritage
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-white/50">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.7, 0.3, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
