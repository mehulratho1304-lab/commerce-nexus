import { motion } from "framer-motion";
import { categories } from "@/data/products";
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  return (
    <section className="mx-4 mt-6">
      <h2 className="mb-4 text-xl font-bold text-foreground">Shop by Category</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={`/products?category=${cat.slug}`}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 hover:border-primary/30 hover:card-shadow-hover transition-all duration-300"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-xs font-semibold text-card-foreground text-center">{cat.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
