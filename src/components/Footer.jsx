import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-card/20">
      {/* Vector path line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-center"
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-syne font-extrabold text-sm tracking-wider text-primary">
              LIVIELTOURSTRAVEL
            </span>
            <span className="text-border">|</span>
            <span className="font-inter text-xs text-muted-foreground">
              Dubai, UAE
            </span>
          </div>

          <p className="font-inter text-xs text-muted-foreground">
            © {new Date().getFullYear()} LivielTours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}