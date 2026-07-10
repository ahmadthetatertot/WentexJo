import { motion } from "framer-motion";

export function Monaco() {
  return (
    <section id="monaco" className="relative py-32 bg-[#0E1928] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/8 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <motion.div
                  className="h-[1px] bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <span className="text-xs tracking-[0.4em] uppercase text-primary">The Flagship Label</span>
              </div>

              <motion.h2
                className="text-6xl md:text-8xl font-serif text-white mb-8 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                MONACO
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-white/90 font-serif italic mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                The pinnacle of Jordanian tailoring.
              </motion.p>

              <motion.div
                className="space-y-6 text-white/60 font-light leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <p>
                  Monaco is our crown jewel. Synonymous with prestige in the MENA market, it is the brand chosen by executives, diplomats, and those who recognize that detail is not a luxury—it is a requirement.
                </p>
                <p>
                  Every Monaco shirt represents the zenith of our capabilities: the finest long-staple cottons, exacting stitch densities, and a collar architecture that remains uncompromised from dawn until dusk.
                </p>
              </motion.div>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="#contact"
                  className="group flex items-center gap-4 text-white hover:text-primary transition-colors w-fit"
                >
                  <span className="text-sm tracking-[0.2em] uppercase font-medium">Inquire about Monaco</span>
                  <motion.div
                    className="h-[1px] bg-white/30 group-hover:bg-primary transition-colors"
                    initial={{ width: 48 }}
                    whileHover={{ width: 72 }}
                    transition={{ duration: 0.25 }}
                  />
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="col-span-2 aspect-[16/9] bg-[#1A2840] overflow-hidden"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/tuxedo.jpg`}
                  alt="Monaco premium tuxedo shirt"
                  className="w-full h-full object-cover object-top opacity-85 hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-square bg-[#1A2840] overflow-hidden"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/formal.jpg`}
                  alt="Monaco formal wear details"
                  className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="aspect-square bg-[#1A2840] overflow-hidden relative group"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/slim.jpg`}
                  alt="Monaco slim-fit shirt"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0E1928]/80 to-transparent">
                  <span className="text-xs tracking-[0.25em] uppercase text-white/60">Slim Fit</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
