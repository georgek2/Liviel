import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Expeditions", href: "#tours" },
  { label: "Testimonials", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const scrollTo = (href /*: string */) => {
    setMobileOpen(false);
    // Ensure scroll happens after the mobile menu closes
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollTo("#hero")} 
          className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded"
          aria-label="Liviel Tours - Home"
        >
          <img 
            src="/images/logo.png" 
            alt="Liviel Tours and Travel Logo" 
            className="h-14 w-auto object-contain rounded-lg"
          />
          <span className="font-syne font-extrabold text-sm md:text-base tracking-widest text-primary hidden sm:inline">
            LIVIELTOURSTRAVEL
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-inter text-sm text-foreground/70 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background rounded"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground focus:outline-none focus:ring-2 focus:ring-accent rounded"
aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} className="text-foreground" /> : <Menu size={28} className="text-foreground" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="font-inter text-sm text-foreground/70 hover:text-primary transition-colors text-left focus:outline-none focus:ring-2 focus:ring-accent rounded"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}