import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

const products = [
  { id: "formal", titleKey: "product.formal.title", descKey: "product.formal.desc", image: "formal.jpg" },
  { id: "slim", titleKey: "product.slim.title", descKey: "product.slim.desc", image: "slim.jpg" },
  { id: "tuxedo", titleKey: "product.tuxedo.title", descKey: "product.tuxedo.desc", image: "tuxedo.jpg" },
  { id: "school", titleKey: "product.school.title", descKey: "product.school.desc", image: "school.jpg" },
  { id: "security", titleKey: "product.security.title", descKey: "product.security.desc", image: "security.jpg" },
  { id: "casual", titleKey: "product.casual.title", descKey: "product.casual.desc", image: "casual.jpg" },
];

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
              <div className="flex flex-col gap-5 cursor-default">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EDE8E0]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${product.image}`}
                    alt={t(product.titleKey)}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#0E1928] mb-2">
                    {t(product.titleKey)}
                  </h3>
                  <p className="text-sm text-[#0E1928]/50 leading-relaxed font-light">{t(product.descKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
