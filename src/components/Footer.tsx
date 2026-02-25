import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-background/60">About</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-background/60">Help</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Payments</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-background/60">Policy</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-background/60">Connect</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-background transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold">ShopVerse</span>
            <span className="text-xs text-background/50">© 2026</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-background/50">
            <span>🔒 100% Secure Payments</span>
            <span>📦 Free Shipping over ₹499</span>
            <span>↩️ Easy Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
