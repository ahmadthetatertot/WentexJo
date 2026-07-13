import { motion } from "framer-motion";
import { Building2, Shield, GraduationCap, ShoppingBag, Hotel, Landmark } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const sectors = [
  { nameKey: "sector.financial.name", descKey: "sector.financial.desc", Icon: Landmark },
  { nameKey: "sector.government.name", descKey: "sector.government.desc", Icon: Building2 },
  { nameKey: "sector.security.name", descKey: "sector.security.desc", Icon: Shield },
  { nameKey: "sector.retail.name", descKey: "sector.retail.desc", Icon: ShoppingBag },
  { nameKey: "sector.education.name", descKey: "sector.education.desc", Icon: GraduationCap },
  { nameKey: "sector.hospitality.name", descKey: "sector.hospitality.desc", Icon: Hotel },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Clients() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-[#EDE8E0] border-y border-[#0E1928]/8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-10 h-[2px] bg-primary mx-auto mb-5 origin-left"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs tracking-[0.3em] uppercase text-primary mb-5"
          >
            {t("clients.eyebrow")}
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-serif text-[#0E1928]"
          >
            {t("clients.title")}
          </motion.h3>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0E1928]/8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {sectors.map((sector) => {
            const { Icon } = sector;
            return (
              <motion.div
                key={sector.nameKey}
                variants={itemVariants}
                className="bg-[#FAF8F4] p-8 hover:bg-white transition-colors duration-200 group cursor-default"
              >
                <div className="w-10 h-10 bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-base text-[#0E1928] font-medium mb-2">{t(sector.nameKey)}</h4>
                <p className="text-sm text-[#0E1928]/45 font-light">{t(sector.descKey)}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
