import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative flex flex-col rounded-lg border border-border bg-card card-shadow hover:card-shadow-hover transition-shadow duration-300"
    >
      {/* Discount badge */}
      {product.discount > 0 && (
        <span className="absolute top-2 left-2 z-10 rounded-sm sale-gradient px-2 py-0.5 text-xs font-bold text-primary-foreground">
          {product.discount}% OFF
        </span>
      )}

      {/* Wishlist */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-2 right-2 z-10 rounded-full bg-card/80 p-1.5 backdrop-blur-sm hover:bg-card transition-colors"
      >
        <Heart className={`h-4 w-4 ${liked ? "fill-sale text-sale" : "text-muted-foreground"}`} />
      </button>

      {/* Image */}
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden rounded-t-lg">
        <div className="aspect-square overflow-hidden bg-secondary/50">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col p-3">
        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">{product.brand}</p>
        <Link to={`/product/${product.slug}`}>
          <h3 className="mt-0.5 text-sm font-semibold text-card-foreground line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-1.5 flex items-center gap-1">
          <span className="flex items-center gap-0.5 rounded-sm bg-success px-1.5 py-0.5 text-[11px] font-bold text-primary-foreground">
            {product.rating} <Star className="h-2.5 w-2.5 fill-current" />
          </span>
          <span className="text-xs text-muted-foreground">({product.reviewCount.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-bold text-card-foreground">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {product.freeDelivery && (
          <p className="mt-1 text-[11px] font-medium text-success">Free Delivery</p>
        )}

        {/* Add to cart */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 flex items-center justify-center gap-1.5 rounded-md bg-primary py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
