import { useParams, Link } from "react-router-dom";
import { products, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useCart();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Product Not Found</h1>
            <Link to="/" className="mt-4 inline-block text-primary hover:underline">Go Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="capitalize">{product.category}</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
            <div className="aspect-square overflow-hidden rounded-xl bg-secondary/50 border border-border">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <button onClick={() => setLiked(!liked)} className="absolute top-4 right-4 rounded-full bg-card p-2 shadow-md">
              <Heart className={`h-5 w-5 ${liked ? "fill-sale text-sale" : "text-muted-foreground"}`} />
            </button>
            {product.discount > 0 && (
              <span className="absolute top-4 left-4 sale-gradient rounded-md px-3 py-1 text-sm font-bold text-primary-foreground">
                {product.discount}% OFF
              </span>
            )}
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <p className="text-sm font-medium text-primary">{product.brand}</p>
            <h1 className="mt-1 text-2xl font-bold text-foreground">{product.name}</h1>

            <div className="mt-2 flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-md bg-success px-2 py-1 text-xs font-bold text-primary-foreground">
                {product.rating} <Star className="h-3 w-3 fill-current" />
              </span>
              <span className="text-sm text-muted-foreground">{product.reviewCount.toLocaleString()} ratings</span>
            </div>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-foreground">{formatPrice(product.price)}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-lg text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="text-sm font-bold text-success">{product.discount}% off</span>
                </>
              )}
            </div>

            <p className="mt-1 text-xs text-muted-foreground">inclusive of all taxes</p>

            {/* Variants */}
            {product.variants?.map((variant) => (
              <div key={variant.label} className="mt-5">
                <p className="text-sm font-semibold text-foreground mb-2">{variant.label}</p>
                <div className="flex flex-wrap gap-2">
                  {variant.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedVariants((prev) => ({ ...prev, [variant.label]: option }))}
                      className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                        selectedVariants[variant.label] === option
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-foreground hover:border-primary/50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => addToCart(product)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg sale-gradient py-3.5 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity">
                ⚡ Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: <Truck className="h-5 w-5" />, text: product.freeDelivery ? "Free Delivery" : "Standard Delivery" },
                { icon: <Shield className="h-5 w-5" />, text: "1 Year Warranty" },
                { icon: <RotateCcw className="h-5 w-5" />, text: "7-Day Returns" },
              ].map((f, i) => (
                <div key={i} className="flex flex-col items-center gap-1 rounded-lg border border-border p-3 text-center">
                  <span className="text-muted-foreground">{f.icon}</span>
                  <span className="text-xs font-medium text-foreground">{f.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-foreground mb-4">Similar Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
