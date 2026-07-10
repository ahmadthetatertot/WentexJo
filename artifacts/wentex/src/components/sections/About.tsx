import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F5F0E8] border-t border-[#0E1928]/6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-10 h-[2px] bg-primary mb-5 origin-left"
              />
              <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Our Heritage</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-[#0E1928] leading-tight mb-8">
                60 years of <br /> unbroken focus.
              </h3>

              <div className="space-y-6 text-[#0E1928]/60 font-light leading-relaxed">
                <p>
                  Founded in 1967 in Amman, Jordan, Wentex began with a simple premise: a well-made shirt is the foundation of professional life. As a family-owned enterprise, we haven't chased fleeting trends. We've spent six decades perfecting the stitch, the collar roll, and the durability of the fabrics we source.
                </p>
                <p>
                  Today, Wentex operates a world-class manufacturing facility supplying formal wear, specialized uniforms, and everyday essentials to leading retailers, banks, government institutions, and security forces across the MENA region.
                </p>
                <p>
                  We are not just a brand; we are the manufacturers. We control every aspect of production on our factory floor, ensuring the quiet confidence that comes from genuine quality.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 pt-12 border-t border-[#0E1928]/10"
              >
                <p className="font-serif text-2xl text-[#0E1928] italic">
                  "Excellence isn't an act, it's a daily habit on the factory floor."
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square lg:aspect-[4/5] bg-[#EDE8E0]"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/workshop.jpg`}
                alt="Wentex manufacturing workshop"
                className="w-full h-full object-cover grayscale-[30%] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-[#0E1928]/10 m-4 pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -left-6 -bottom-6 lg:-left-12 lg:-bottom-12 w-32 h-32 lg:w-48 lg:h-48 bg-primary p-6 lg:p-8 flex items-center justify-center"
              >
                <div className="text-center">
                  <span className="block text-4xl lg:text-5xl font-serif text-white mb-2">60</span>
                  <span className="block text-[10px] tracking-widest uppercase text-white/70">Years</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
