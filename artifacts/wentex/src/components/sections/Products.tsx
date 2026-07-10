import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: "formal",
    title: "Formal Shirts",
    desc: "Impeccable Oxford and broadcloth essentials.",
    image: "formal.jpg"
  },
  {
    id: "slim",
    title: "Slim Fit",
    desc: "Modern cuts tailored for a sharp silhouette.",
    image: "slim.jpg"
  },
  {
    id: "tuxedo",
    title: "Tuxedo & Luxury",
    desc: "Elevated eveningwear for monumental occasions.",
    image: "tuxedo.jpg"
  },
  {
    id: "school",
    title: "School Uniforms",
    desc: "Durable, crisp whites designed for daily wear.",
    image: "school.jpg"
  },
  {
    id: "security",
    title: "Security & Protective",
    desc: "Authoritative, rugged apparel for forces.",
    image: "security.jpg"
  },
  {
    id: "casual",
    title: "Everyday Casual",
    desc: "Relaxed sophistication in earth tones.",
    image: "casual.jpg"
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Our Collections</h2>
            <p className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Crafted for every institution, <br className="hidden md:block"/> designed for every individual.
            </p>
          </div>
          <p className="text-white/50 text-sm md:text-base max-w-sm md:text-right">
            From the boardroom to the academy, our comprehensive lines deliver uncompromising quality across all sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {products.map((product, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={product.id}
              className="group relative flex flex-col gap-5 cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#111111]">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={`${import.meta.env.BASE_URL}images/${product.image}`} 
                  alt={product.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
