import { Product, Category, Banner } from "@/types";

export const categories: Category[] = [
  { id: "1", name: "Electronics", slug: "electronics", icon: "📱", image: "" },
  { id: "2", name: "Fashion", slug: "fashion", icon: "👕", image: "" },
  { id: "3", name: "Home & Living", slug: "home-living", icon: "🏠", image: "" },
  { id: "4", name: "Beauty", slug: "beauty", icon: "💄", image: "" },
  { id: "5", name: "Sports", slug: "sports", icon: "⚽", image: "" },
  { id: "6", name: "Books", slug: "books", icon: "📚", image: "" },
  { id: "7", name: "Toys", slug: "toys", icon: "🧸", image: "" },
  { id: "8", name: "Grocery", slug: "grocery", icon: "🛒", image: "" },
];

export const products: Product[] = [
  {
    id: "1", name: "iPhone 15 Pro Max", slug: "iphone-15-pro-max",
    description: "Apple iPhone 15 Pro Max with A17 Pro chip, 256GB storage, titanium design, and 48MP camera system.",
    price: 134900, originalPrice: 159900, discount: 16, rating: 4.6, reviewCount: 12453,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    category: "electronics", brand: "Apple", inStock: true, freeDelivery: true,
    variants: [{ label: "Storage", options: ["256GB", "512GB", "1TB"] }, { label: "Color", options: ["Natural Titanium", "Blue", "White", "Black"] }]
  },
  {
    id: "2", name: "Samsung Galaxy S24 Ultra", slug: "samsung-galaxy-s24-ultra",
    description: "Samsung Galaxy S24 Ultra with Galaxy AI, S Pen, 200MP camera, and Snapdragon 8 Gen 3.",
    price: 129999, originalPrice: 144999, discount: 10, rating: 4.5, reviewCount: 8921,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
    category: "electronics", brand: "Samsung", inStock: true, freeDelivery: true,
  },
  {
    id: "3", name: "Sony WH-1000XM5 Headphones", slug: "sony-wh-1000xm5",
    description: "Industry-leading noise canceling headphones with exceptional sound quality and 30-hour battery.",
    price: 26990, originalPrice: 34990, discount: 23, rating: 4.7, reviewCount: 5678,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    category: "electronics", brand: "Sony", inStock: true, freeDelivery: true,
  },
  {
    id: "4", name: "Nike Air Max 270", slug: "nike-air-max-270",
    description: "The Nike Air Max 270 delivers visible cushioning under every step with the largest Max Air unit yet.",
    price: 8995, originalPrice: 13995, discount: 36, rating: 4.3, reviewCount: 3421,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "fashion", brand: "Nike", inStock: true, freeDelivery: false,
    variants: [{ label: "Size", options: ["7", "8", "9", "10", "11"] }]
  },
  {
    id: "5", name: "MacBook Air M3", slug: "macbook-air-m3",
    description: "Supercharged by M3 chip, strikingly thin design, up to 18 hours of battery life, and a brilliant Liquid Retina display.",
    price: 114900, originalPrice: 129900, discount: 12, rating: 4.8, reviewCount: 6543,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    category: "electronics", brand: "Apple", inStock: true, freeDelivery: true,
  },
  {
    id: "6", name: "Levi's 501 Original Jeans", slug: "levis-501-jeans",
    description: "The original jean. The iconic straight fit with a button fly. A blank canvas for self-expression since 1873.",
    price: 2999, originalPrice: 5999, discount: 50, rating: 4.4, reviewCount: 9876,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    category: "fashion", brand: "Levi's", inStock: true, freeDelivery: false,
    variants: [{ label: "Size", options: ["28", "30", "32", "34", "36"] }]
  },
  {
    id: "7", name: "Dyson V15 Detect Vacuum", slug: "dyson-v15-detect",
    description: "Intelligently adapts suction power. Reveals invisible dust with a laser. Proves deep cleaning on an LCD screen.",
    price: 52900, originalPrice: 62900, discount: 16, rating: 4.6, reviewCount: 2345,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    category: "home-living", brand: "Dyson", inStock: true, freeDelivery: true,
  },
  {
    id: "8", name: "The Alchemist by Paulo Coelho", slug: "the-alchemist",
    description: "A magical story about following your dreams. One of the best-selling books in history.",
    price: 299, originalPrice: 599, discount: 50, rating: 4.5, reviewCount: 45678,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    category: "books", brand: "HarperCollins", inStock: true, freeDelivery: false,
  },
  {
    id: "9", name: "iPad Pro M4", slug: "ipad-pro-m4",
    description: "The ultimate iPad experience with the M4 chip, Ultra Retina XDR display, and Apple Pencil Pro support.",
    price: 99900, originalPrice: 119900, discount: 17, rating: 4.7, reviewCount: 4567,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    category: "electronics", brand: "Apple", inStock: true, freeDelivery: true,
  },
  {
    id: "10", name: "Adidas Ultraboost 23", slug: "adidas-ultraboost-23",
    description: "Experience incredible energy return with every stride in the Adidas Ultraboost running shoes.",
    price: 11999, originalPrice: 16999, discount: 29, rating: 4.5, reviewCount: 5432,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    category: "sports", brand: "Adidas", inStock: true, freeDelivery: true,
  },
  {
    id: "11", name: "Samsung 65\" OLED TV", slug: "samsung-65-oled-tv",
    description: "Stunning 4K OLED display with quantum HDR, smart TV features, and immersive Dolby Atmos sound.",
    price: 164990, originalPrice: 219990, discount: 25, rating: 4.6, reviewCount: 1234,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    category: "electronics", brand: "Samsung", inStock: true, freeDelivery: true,
  },
  {
    id: "12", name: "Ray-Ban Aviator Classic", slug: "ray-ban-aviator",
    description: "The iconic Ray-Ban Aviator sunglasses with polarized lenses and gold metal frame.",
    price: 7490, originalPrice: 12990, discount: 42, rating: 4.4, reviewCount: 7654,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    category: "fashion", brand: "Ray-Ban", inStock: true, freeDelivery: false,
  },
];

export const banners: Banner[] = [
  {
    id: "1",
    title: "Mega Electronics Sale",
    subtitle: "Up to 70% off on smartphones, laptops & more",
    cta: "Shop Now",
    image: "",
    gradient: "from-blue-600 to-indigo-800",
  },
  {
    id: "2",
    title: "Fashion Fiesta",
    subtitle: "Flat 50% off on top brands",
    cta: "Explore Deals",
    image: "",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "3",
    title: "Home Makeover Sale",
    subtitle: "Transform your space with up to 60% off",
    cta: "Shop Home",
    image: "",
    gradient: "from-emerald-500 to-teal-700",
  },
];

export const flashSaleProducts = products.filter(p => p.discount >= 25);
export const trendingProducts = products.filter(p => p.rating >= 4.5);

export function formatPrice(price: number): string {
  return "₹" + price.toLocaleString("en-IN");
}
