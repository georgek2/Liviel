import { useState } from "react";
import { motion } from "framer-motion";

export default function TourCard({ tour, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: 12, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex-shrink-0 w-64 md:w-72 h-96 md:h-[28rem] cursor-pointer group overflow-hidden"
      style={{
        clipPath: hovered
          ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          : "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
        transition: "clip-path 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      role="article"
      aria-label={tour.title}
      tabIndex={0}
    >
      {/* Shimmer sweep on scroll-in */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "200%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: index * 0.12 + 0.3, ease: "easeInOut" }}
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 30%, rgba(212,175,55,0.18) 50%, transparent 70%)",
        }}
      />

      {/* Glowing left-edge pulse */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: [0, 1, 0], scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: index * 0.12 + 0.1 }}
        className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent z-20 origin-top"
      />

      {/* Image */}
      <motion.img
        src={tour.image}
        alt={tour.alt}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        hovered
          ? "bg-background/80 backdrop-blur-sm"
          : "bg-gradient-to-t from-background/90 via-background/20 to-transparent"
      }`} />

      {/* Default content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <motion.div
          animate={{ opacity: hovered ? 0 : 1, y: hovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-inter text-[10px] tracking-[0.3em] text-accent/80 uppercase mb-2">
            {tour.tag}
          </p>
          <h3 className="font-syne font-bold text-lg text-foreground">
            {tour.title}
          </h3>
        </motion.div>
      </div>

      {/* Hover content - terminal style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, delay: hovered ? 0.1 : 0 }}
        className="absolute inset-0 flex flex-col justify-center p-6 z-10"
      >
        <p className="font-inter text-[10px] tracking-[0.3em] text-accent uppercase mb-4">
          // {tour.tag}
        </p>
        <h3 className="font-syne font-bold text-xl text-foreground mb-4">
          {tour.title}
        </h3>
        <div className="space-y-2 font-inter text-xs text-foreground/60" style={{ fontFamily: "monospace" }}>
          <p><span className="text-primary">duration:</span> {tour.duration}</p>
          <p><span className="text-primary">terrain:</span> {tour.terrain}</p>
          <p><span className="text-primary">rating:</span> {tour.rating}</p>
        </div>
        <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
        <p className="mt-3 font-inter text-xs text-foreground/40">
          {tour.description}
        </p>
      </motion.div>

      {/* Corner accents */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute top-4 left-4 w-6 h-6 z-10"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-primary/60" />
        <div className="absolute top-0 left-0 h-full w-px bg-primary/60" />
      </motion.div>
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute bottom-4 right-4 w-6 h-6 z-10"
      >
        <div className="absolute bottom-0 right-0 w-full h-px bg-primary/60" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-primary/60" />
      </motion.div>
    </motion.div>
  );
}