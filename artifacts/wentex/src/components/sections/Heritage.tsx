import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 1967, label: "Established", suffix: "" },
  { value: 57, label: "Years of Mastery", suffix: "+" },
  { value: 6, label: "Premium Lines", suffix: "" },
];

export function HeritageStrip() {
  return (
    <section className="border-y border-[#0E1928]/8 bg-[#EDE8E0] py-8 md:py-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

          <div className="flex items-center gap-10 md:gap-16 w-full md:w-auto overflow-x-auto no-scrollbar pb-4 md:pb-0 shrink-0">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-10 md:gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col min-w-max"
                >
                  <span className="text-3xl md:text-4xl font-serif text-[#0E1928] mb-1 tabular-nums">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#0E1928]/50">{stat.label}</span>
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
              Proudly manufactured in <strong className="text-[#0E1928] font-medium">Jordan</strong>,
              supplying the <strong className="text-[#0E1928] font-medium">MENA Region</strong> with uncompromising quality.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
