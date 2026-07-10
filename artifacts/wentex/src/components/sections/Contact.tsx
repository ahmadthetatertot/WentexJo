import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Printer, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">
                Let's discuss your requirements.
              </h3>
              <p className="text-white/60 font-light mb-12 max-w-md">
                Whether you are a retailer seeking our Monaco line, or an institution requiring volume production, our team is ready.
              </p>
            </motion.div>

            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-6"
              >
                <div className="mt-1">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-sm">Headquarters</h4>
                  <p className="text-white/60 font-light leading-relaxed">
                    Amman - Jordan<br />
                    Petra Street, P.O. Box 297<br />
                    Postal Code 11118
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-6"
              >
                <div className="mt-1">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-sm">Phones</h4>
                  <div className="space-y-2 text-white/60 font-light">
                    <a href="tel:+962788004400" className="block hover:text-primary transition-colors">+962 78 800 4400</a>
                    <a href="tel:+962795500756" className="block hover:text-primary transition-colors">+962 79 550 0756</a>
                    <a href="tel:+96264630526" className="block hover:text-primary transition-colors">+962 6 463 0526</a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-6"
              >
                <div className="mt-1">
                  <Printer className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-sm">Fax</h4>
                  <p className="text-white/60 font-light">+962 6 465 260</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-6"
              >
                <div className="mt-1">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2 uppercase tracking-widest text-sm">Email</h4>
                  <a href="mailto:info@wentex-jo.com" className="text-white/60 font-light hover:text-primary transition-colors">
                    info@wentex-jo.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-32 bg-[#111111] p-8 md:p-12 border border-white/5">
              <h4 className="text-2xl font-serif text-white mb-6">Send an Inquiry</h4>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Email or Phone</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-primary text-white text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors">
                  Submit Inquiry
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <span className="block text-xs uppercase tracking-widest text-white/50 mb-4">Or reach out instantly</span>
                <a 
                  href="https://wa.me/962788004400" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#25D366]/10 text-[#25D366] text-sm tracking-widest uppercase hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
