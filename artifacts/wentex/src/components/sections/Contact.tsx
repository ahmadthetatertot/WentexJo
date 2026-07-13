import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Printer, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();

  const contactItems = [
    {
      Icon: MapPin,
      title: t("contact.hq.title"),
      content: (
        <p className="text-[#0E1928]/55 font-light leading-relaxed">
          {t("contact.hq.line1")}<br />
          {t("contact.hq.line2")}<br />
          {t("contact.hq.line3")}
        </p>
      ),
      delay: 0.2,
    },
    {
      Icon: Phone,
      title: t("contact.phones.title"),
      content: (
        <div className="space-y-2 text-[#0E1928]/55 font-light">
          <a href="tel:+962788004400" className="block hover:text-primary transition-colors">+962 78 800 4400</a>
          <a href="tel:+962795500756" className="block hover:text-primary transition-colors">+962 79 550 0756</a>
          <a href="tel:+96264630526" className="block hover:text-primary transition-colors">+962 6 463 0526</a>
        </div>
      ),
      delay: 0.3,
    },
    {
      Icon: Printer,
      title: t("contact.fax.title"),
      content: <p className="text-[#0E1928]/55 font-light">+962 6 465 260</p>,
      delay: 0.4,
    },
    {
      Icon: Mail,
      title: t("contact.email.title"),
      content: (
        <a href="mailto:info@wentex-jo.com" className="text-[#0E1928]/55 font-light hover:text-primary transition-colors">
          info@wentex-jo.com
        </a>
      ),
      delay: 0.5,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF8F4]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-10 h-[2px] bg-primary mb-5 origin-left"
              />
              <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-5">{t("contact.eyebrow")}</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-[#0E1928] mb-8">
                {t("contact.title")}
              </h3>
              <p className="text-[#0E1928]/55 font-light mb-12 max-w-md">
                {t("contact.subtitle")}
              </p>
            </motion.div>

            <div className="space-y-10">
              {contactItems.map(({ Icon, title, content, delay }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay }}
                  className="flex gap-6"
                >
                  <div className="mt-1 w-10 h-10 bg-primary/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-[#0E1928] font-medium mb-2 uppercase tracking-widest text-xs">{title}</h4>
                    {content}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="sticky top-32 bg-white p-8 md:p-12 border border-[#0E1928]/8 shadow-sm">
              <h4 className="text-2xl font-serif text-[#0E1928] mb-6">{t("contact.form.title")}</h4>
              <form className="space-y-6">
                {[
                  { label: t("contact.form.name"), type: "text" },
                  { label: t("contact.form.emailphone"), type: "text" },
                ].map(({ label, type }) => (
                  <div key={label}>
                    <label className="block text-xs uppercase tracking-widest text-[#0E1928]/45 mb-2">{label}</label>
                    <input
                      type={type}
                      className="w-full bg-transparent border-b border-[#0E1928]/15 py-3 text-[#0E1928] focus:outline-none focus:border-primary transition-colors placeholder-[#0E1928]/30"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#0E1928]/45 mb-2">{t("contact.form.message")}</label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-[#0E1928]/15 py-3 text-[#0E1928] focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="relative w-full py-4 bg-primary text-white text-sm tracking-widest uppercase overflow-hidden group"
                >
                  <span className="relative z-10">{t("contact.form.submit")}</span>
                  <div className="absolute inset-0 bg-black/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              </form>

              <div className="mt-8 pt-8 border-t border-[#0E1928]/8 text-center">
                <span className="block text-xs uppercase tracking-widest text-[#0E1928]/40 mb-4">{t("contact.form.orReach")}</span>
                <a
                  href="https://wa.me/962788004400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#25D366]/8 text-[#25D366] text-sm tracking-widest uppercase hover:bg-[#25D366]/15 transition-colors border border-[#25D366]/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t("contact.form.whatsapp")}
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
