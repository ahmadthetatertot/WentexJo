import { motion } from "framer-motion";

export function Monaco() {
  return (
    <section id="monaco" className="relative py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D52975]/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-[1px] w-8 bg-primary" />
                <span className="text-xs tracking-[0.4em] uppercase text-primary">The Flagship Label</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-serif text-white mb-8 tracking-tight">
                MONACO
              </h2>
              
              <p className="text-xl md:text-2xl text-white/90 font-serif italic mb-8">
                The pinnacle of Jordanian tailoring.
              </p>
              
              <div className="space-y-6 text-white/60 font-light leading-relaxed max-w-xl">
                <p>
                  Monaco is our crown jewel. Synonymous with prestige in the MENA market, it is the brand chosen by executives, diplomats, and those who recognize that detail is not a luxury—it is a requirement.
                </p>
                <p>
                  Every Monaco shirt represents the zenith of our capabilities: the finest long-staple cottons, exacting stitch densities, and a collar architecture that remains uncompromised from dawn until dusk.
                </p>
              </div>

              <div className="mt-12">
                <a
                  href="#contact"
                  className="group flex items-center gap-4 text-white hover:text-primary transition-colors w-fit"
                >
                  <span className="text-sm tracking-[0.2em] uppercase font-medium">Inquire about Monaco</span>
                  <div className="w-12 h-[1px] bg-white/30 group-hover:bg-primary transition-colors group-hover:w-16" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="col-span-2 aspect-[16/9] bg-[#111111] overflow-hidden"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}images/tuxedo.jpg`} 
                  alt="Monaco premium tuxedo shirt"
                  className="w-full h-full object-cover object-top opacity-80"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-square bg-[#111111] overflow-hidden"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}images/formal.jpg`} 
                  alt="Monaco formal wear details"
                  className="w-full h-full object-cover opacity-80"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="aspect-square bg-[#1A1A1A] p-8 flex flex-col justify-between border border-white/5"
              >
                <span className="text-4xl text-primary font-serif">M.</span>
                <p className="text-sm text-white/50 tracking-wide font-light">
                  A commitment to the art of presentation.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
