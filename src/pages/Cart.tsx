import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  const savings = items.reduce((sum, item) => sum + (item.product.originalPrice - item.product.price) * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center py-32">
          <ShoppingBag className="h-20 w-20 text-muted-foreground/30" />
          <h2 className="mt-4 text-xl font-bold text-foreground">Your cart is empty</h2>
          <p className="mt-1 text-sm text-muted-foreground">Add items to get started</p>
          <Link to="/" className="mt-6 rounded-lg bg-primary px-8 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Shopping Cart ({totalItems} items)</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cart items */}
          <div className="md:col-span-2 space-y-3">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  exit={{ opacity: 0, x: -100 }}
                  className="flex gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <Link to={`/product/${item.product.slug}`} className="shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="h-24 w-24 rounded-lg object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.slug}`}>
                      <h3 className="text-sm font-semibold text-card-foreground hover:text-primary transition-colors">{item.product.name}</h3>
                    </Link>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.product.brand}</p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-base font-bold text-card-foreground">{formatPrice(item.product.price)}</span>
                      {item.product.originalPrice > item.product.price && (
                        <span className="text-xs text-muted-foreground line-through">{formatPrice(item.product.originalPrice)}</span>
                      )}
                      {item.product.discount > 0 && (
                        <span className="text-xs font-bold text-success">{item.product.discount}% off</span>
                      )}
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center rounded-lg border border-border">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold text-card-foreground">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} className="text-xs font-medium text-sale hover:underline flex items-center gap-1">
                        <Trash2 className="h-3 w-3" /> Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order summary */}
          <div className="h-fit rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Price Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-card-foreground">
                <span>Price ({totalItems} items)</span>
                <span>{formatPrice(totalPrice + savings)}</span>
              </div>
              <div className="flex justify-between text-success font-medium">
                <span>Discount</span>
                <span>-{formatPrice(savings)}</span>
              </div>
              <div className="flex justify-between text-card-foreground">
                <span>Delivery</span>
                <span className="text-success font-medium">Free</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-base font-bold text-card-foreground">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>
            {savings > 0 && (
              <p className="mt-3 text-xs font-medium text-success text-center">You save {formatPrice(savings)} on this order</p>
            )}
            <button className="mt-4 w-full rounded-lg sale-gradient py-3 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity">
              Place Order
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
