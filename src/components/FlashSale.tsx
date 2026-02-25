import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { flashSaleProducts, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const FlashSale = () => {
  const { addToCart } = useCart();
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 23, seconds: 47 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="mx-4 mt-6">
      <div className="rounded-xl bg-card border border-border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between sale-gradient px-6 py-3">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
            <h2 className="text-lg font-extrabold text-primary-foreground">Flash Sale</h2>
          </div>
          <div className="flex items-center gap-1 text-primary-foreground font-mono font-bold text-sm">
            <span>Ends in</span>
            <span className="rounded bg-foreground/20 px-1.5 py-0.5">{pad(timeLeft.hours)}</span>:
            <span className="rounded bg-foreground/20 px-1.5 py-0.5">{pad(timeLeft.minutes)}</span>:
            <span className="rounded bg-foreground/20 px-1.5 py-0.5">{pad(timeLeft.seconds)}</span>
          </div>
        </div>

        {/* Products scroll */}
        <div className="flex gap-4 overflow-x-auto p-4 scrollbar-hide">
          {flashSaleProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex shrink-0 flex-col items-center w-40 text-center"
            >
              <Link to={`/product/${product.slug}`} className="group">
                <div className="relative h-32 w-32 overflow-hidden rounded-lg bg-secondary/50">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                </div>
              </Link>
              <h3 className="mt-2 text-xs font-semibold text-card-foreground line-clamp-2">{product.name}</h3>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-sm font-bold text-card-foreground">{formatPrice(product.price)}</span>
              </div>
              <span className="text-xs font-bold text-sale">{product.discount}% off</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
