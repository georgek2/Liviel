import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Star, ArrowUpRight } from "lucide-react";

export default function TourCatalogCard({ tour, index, featured = false }) {
  const [hovered, setHovered] = useState(false);

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative col-span-full h-[480px] md:h-[560px] overflow-hidden cursor-pointer group rounded-sm"
      >
        {/* Image */}
        <motion.img
          src={tour.image}
          alt={tour.alt}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

        {/* Featured badge */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <span className="font-inter text-[9px] tracking-[0.4em] text-background bg-primary px-3 py-1 uppercase">
            Featured
          </span>
          <span className="font-inter text-[9px] tracking-[0.3em] text-accent/80 border border-accent/20 px-3 py-1 uppercase backdrop-blur-sm bg-background/20">
            {tour.tag}
          </span>
        </div>

        {/* Hover arrow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-6 right-6 w-10 h-10 border border-primary/40 flex items-center justify-center backdrop-blur-sm bg-background/20"
        >
          <ArrowUpRight size={16} className="text-primary" />
        </motion.div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <p className="font-inter text-[10px] tracking-[0.4em] text-accent/70 uppercase mb-3">
            Signature Experience
          </p>
          <h3 className="font-syne font-extrabold text-3xl md:text-5xl text-foreground mb-4 leading-none">
            {tour.title}
          </h3>
          <p className="font-inter text-sm text-foreground/60 max-w-lg mb-6 leading-relaxed">
            {tour.description}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-foreground/50 font-inter text-xs">
              <Clock size={12} className="text-primary/60" />
              {tour.duration}
            </div>
            <div className="flex items-center gap-2 text-foreground/50 font-inter text-xs">
              <MapPin size={12} className="text-primary/60" />
              {tour.terrain}
            </div>
            <div className="flex items-center gap-1 text-primary/80 text-xs font-inter">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className={i < tour.stars ? "fill-primary text-primary" : "text-foreground/20"} />
              ))}
            </div>
            {tour.price && (
              <span className="ml-auto font-syne font-bold text-lg text-foreground">
                {tour.price}
                <span className="font-inter font-normal text-xs text-foreground/40 ml-1">/ person</span>
              </span>
            )}
          </div>
        </div>

        {/* Bottom border glow on hover */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col overflow-hidden cursor-pointer group rounded-sm bg-card/30 border border-border/40 hover:border-primary/30 transition-colors duration-500"
    >
      {/* Image */}
      <div className="relative h-52 md:h-60 overflow-hidden">
        <motion.img
          src={tour.image}
          alt={tour.alt}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

        {/* Shimmer on hover */}
        <motion.div
          animate={{ x: hovered ? "200%" : "-100%" }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 30%, rgba(212,175,55,0.15) 50%, transparent 70%)" }}
        />

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="font-inter text-[9px] tracking-[0.3em] text-foreground/80 border border-foreground/20 px-2 py-1 uppercase backdrop-blur-sm bg-background/40">
            {tour.tag}
          </span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
          className="absolute top-4 right-4 w-8 h-8 border border-primary/50 flex items-center justify-center bg-background/40 backdrop-blur-sm"
        >
          <ArrowUpRight size={12} className="text-primary" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-syne font-bold text-lg text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
          {tour.title}
        </h3>
        <p className="font-inter text-xs text-foreground/50 leading-relaxed flex-1 mb-4">
          {tour.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-foreground/40 font-inter text-[11px]">
              <Clock size={10} className="text-primary/50" />
              {tour.duration}
            </div>
            <div className="flex items-center gap-1.5 text-foreground/40 font-inter text-[11px]">
              <MapPin size={10} className="text-primary/50" />
              {tour.terrain}
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={9} className={i < tour.stars ? "fill-primary text-primary" : "text-foreground/15"} />
            ))}
          </div>
        </div>

        {tour.price && (
          <div className="mt-3">
            <span className="font-syne font-bold text-base text-foreground">
              {tour.price}
            </span>
            <span className="font-inter text-[10px] text-foreground/35 ml-1">/ person</span>
          </div>
        )}
      </div>

      {/* Left accent line */}
      <motion.div
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent origin-top"
      />
    </motion.div>
  );
}