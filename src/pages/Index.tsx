import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import FlashSale from "@/components/FlashSale";
import ProductCard from "@/components/ProductCard";
import { products, trendingProducts } from "@/data/products";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto max-w-7xl pb-8">
        <HeroBanner />
        <CategoryGrid />
        <FlashSale />

        {/* Trending Products */}
        <section className="mx-4 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Trending Now 🔥</h2>
            <a href="/products" className="text-sm font-semibold text-primary hover:underline">View All</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {trendingProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </section>

        {/* All Products */}
        <section className="mx-4 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Top Deals For You</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </section>

        {/* Trust badges */}
        <section className="mx-4 mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🚚", title: "Free Shipping", desc: "On orders over ₹499" },
              { icon: "↩️", title: "Easy Returns", desc: "30-day return policy" },
              { icon: "🔒", title: "Secure Payments", desc: "SSL encrypted checkout" },
              { icon: "🎧", title: "24/7 Support", desc: "Dedicated customer care" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="text-2xl">{badge.icon}</span>
                <div>
                  <p className="text-sm font-bold text-card-foreground">{badge.title}</p>
                  <p className="text-xs text-muted-foreground">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
