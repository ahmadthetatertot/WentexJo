import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

function AnimatedCounter({ target, suffix = "", from = 0 }: { target: number; suffix?: string; from?: number }) {
  const [count, setCount] = useState(from);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1600;
    const steps = 60;
    const increment = (target - from) / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const next = Math.min(Math.round(from + increment * step), target);
      setCount(next);
      if (next >= target) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [triggered, target, from]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function HeritageStrip() {
  const { t } = useLanguage();
  const stats = [
    { value: 1957, labelKey: "heritage.established", suffix: "", from: 1900 },
    { value: 69, labelKey: "heritage.years", suffix: "+", from: 0 },
    { value: 6, labelKey: "heritage.lines", suffix: "", from: 0 },
  ];
  return (
    <section className="border-y border-[#0E1928]/8 bg-[#EDE8E0] py-8 md:py-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

          <div className="flex items-center gap-10 md:gap-16 w-full md:w-auto overflow-x-auto no-scrollbar pb-4 md:pb-0 shrink-0">
            {stats.map((stat, i) => (
              <div key={stat.labelKey} className="flex items-center gap-10 md:gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col min-w-max"
                >
                  <span className="text-3xl md:text-4xl font-serif text-[#0E1928] mb-1 tabular-nums">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} from={stat.from} />
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#0E1928]/50">{t(stat.labelKey)}</span>
                </motion.div>
                {i < stats.length - 1 && (
                  <div className="w-[1px] h-12 bg-[#0E1928]/15 hidden md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="w-full md:w-[1px] h-[1px] md:h-12 bg-[#0E1928]/10 hidden md:block" />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 w-full text-center md:text-right"
          >
            <p className="text-sm md:text-base text-[#0E1928]/60 font-light tracking-wide max-w-xl ml-auto">
              {t("heritage.tagline1")} <strong className="text-[#0E1928] font-medium">{t("heritage.tagline2")}</strong>
              {t("heritage.tagline3")} <strong className="text-[#0E1928] font-medium">{t("heritage.tagline4")}</strong> {t("heritage.tagline5")}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
