import { motion } from "framer-motion";

export function Clients() {
  const sectors = [
    { name: "Financial Institutions", desc: "Corporate banking uniforms" },
    { name: "Government Sectors", desc: "Official institutional wear" },
    { name: "Security Forces", desc: "High-durability tactical apparel" },
    { name: "Premium Retailers", desc: "Flagship formal collections" },
    { name: "Educational Academies", desc: "Standardized school wear" },
    { name: "Hospitality Groups", desc: "Luxury service uniforms" },
  ];

  return (
    <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Trusted By Institutions</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white">
            The supplier of choice across the MENA region.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {sectors.map((sector, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={sector.name}
              className="bg-[#111111] p-8 hover:bg-[#151515] transition-colors border border-transparent hover:border-white/5 cursor-default"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <h4 className="text-lg text-white font-medium mb-2">{sector.name}</h4>
              <p className="text-sm text-white/40">{sector.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
