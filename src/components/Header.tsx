import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, ChevronDown, MapPin } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { categories } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategories, setShowCategories] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="hero-gradient">
        <div className="container mx-auto flex items-center gap-4 px-4 py-2.5">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center shrink-0">
            <span className="text-xl font-extrabold tracking-tight text-primary-foreground">ShopVerse</span>
            <span className="text-[10px] italic text-primary-foreground/70 -mt-1">Explore Plus ✦</span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md bg-card py-2 pl-10 pr-4 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link to="/cart" className="flex items-center gap-1.5 text-primary-foreground hover:opacity-80 transition-opacity">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </div>
              <span className="text-sm font-medium hidden md:inline">Cart</span>
            </Link>
            <button className="flex items-center gap-1.5 text-primary-foreground hover:opacity-80 transition-opacity">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium hidden md:inline">Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category bar */}
      <nav className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 overflow-x-auto py-2 text-sm scrollbar-hide">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.slug}`}
                className="flex shrink-0 items-center gap-1.5 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
