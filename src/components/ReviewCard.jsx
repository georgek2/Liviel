import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      whileHover={{
        y: -8,
        boxShadow: "0 0 40px hsl(45 65% 52% / 0.08)",
      }}
      className="relative p-6 md:p-8 rounded-lg border border-border/50 bg-card/40 backdrop-blur-md min-w-[280px] md:min-w-0 flex-shrink-0 group focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-4 focus-within:ring-offset-background"
      tabIndex={0}
      role="article"
      aria-label={`Review by ${review.name}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top accent line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "40px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.12 + 0.3 }}
        className="h-px bg-primary mb-6"
      />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < review.rating ? "fill-primary text-primary" : "text-border"}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="font-inter text-sm text-foreground/70 leading-relaxed mb-6 relative z-10">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="relative z-10">
        <p className="font-syne font-semibold text-sm text-foreground">{review.name}</p>
        <p className="font-inter text-xs text-muted-foreground mt-1">{review.location}</p>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-4 right-4 w-5 h-5 opacity-20 group-hover:opacity-40 transition-opacity">
        <div className="absolute bottom-0 right-0 w-full h-px bg-accent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-accent" />
      </div>
    </motion.div>
  );
}