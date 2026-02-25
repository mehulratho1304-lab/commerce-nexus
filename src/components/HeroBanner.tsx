import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { banners } from "@/data/products";

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % banners.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + banners.length) % banners.length);
  const next = () => setCurrent((c) => (c + 1) % banners.length);

  return (
    <div className="relative overflow-hidden rounded-xl mx-4 mt-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.4 }}
          className={`relative flex items-center justify-between bg-gradient-to-r ${banners[current].gradient} px-8 md:px-16 py-12 md:py-20 rounded-xl`}
        >
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight">{banners[current].title}</h2>
            <p className="mt-3 text-lg text-primary-foreground/80">{banners[current].subtitle}</p>
            <button className="mt-6 rounded-lg bg-card px-8 py-3 text-sm font-bold text-foreground hover:bg-card/90 transition-colors shadow-lg">
              {banners[current].cta}
            </button>
          </div>
          <div className="hidden md:block text-8xl opacity-30">🛍️</div>
        </motion.div>
      </AnimatePresence>

      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 backdrop-blur-sm hover:bg-card transition-colors">
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-2 backdrop-blur-sm hover:bg-card transition-colors">
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-card" : "w-1.5 bg-card/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
