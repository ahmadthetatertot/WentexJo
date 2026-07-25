import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const products = [
  { id: "formal", titleKey: "product.formal.title", descKey: "product.formal.desc", image: "formal.jpg" },
  { id: "slim", titleKey: "product.slim.title", descKey: "product.slim.desc", image: "slim.jpg" },
  { id: "tuxedo", titleKey: "product.tuxedo.title", descKey: "product.tuxedo.desc", image: "tuxedo.jpg" },
  { id: "school", titleKey: "product.school.title", descKey: "product.school.desc", image: "school.jpg" },
  { id: "security", titleKey: "product.security.title", descKey: "product.security.desc", image: "security.jpg" },
  { id: "casual", titleKey: "product.casual.title", descKey: "product.casual.desc", image: "casual.jpg" },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ z: 10 }}
      className="cursor-default"
    >
      {children}
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Products() {
  const { t } = useLanguage();
  return (
    <section id="products" className="py-24 md:py-32 bg-[#FAF8F4]">
      <div className="container mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-10 h-[2px] bg-primary mb-5 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xs tracking-[0.3em] uppercase text-primary mb-5"
            >
              {t("products.eyebrow")}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif text-[#0E1928] leading-tight"
            >
              {t("products.title")}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#0E1928]/50 text-sm md:text-base max-w-sm md:text-right font-light"
          >
            {t("products.subtitle")}
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <TiltCard>
                <div className="group relative flex flex-col gap-5">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#EDE8E0]">
                    <motion.img
                      src={`${import.meta.env.BASE_URL}images/${product.image}`}
                      alt={t(product.titleKey)}
                      className="w-full h-full object-cover object-center"
                      whileHover={{ scale: 1.07 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-[#0E1928]/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <motion.div
                      className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 0 }}
                      whileInView={{ opacity: 0 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-[#0E1928]" />
                    </motion.div>
                    <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-[#0E1928]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-[#0E1928] mb-2 group-hover:text-primary transition-colors duration-200">
                      {t(product.titleKey)}
                    </h3>
                    <p className="text-sm text-[#0E1928]/50 leading-relaxed font-light">{t(product.descKey)}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
