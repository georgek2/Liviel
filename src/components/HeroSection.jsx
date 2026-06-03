import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HERO_IMG = "/images/hero-banner.png";

const glitchVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function HUDLine({ className, style }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
      className={`absolute h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-left ${className}`}
      style={style} />);


}

function HUDCorner({ className }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className={`absolute w-16 h-16 ${className}`}>
      
      <div className="absolute top-0 left-0 w-full h-px bg-accent/30" />
      <div className="absolute top-0 left-0 h-full w-px bg-accent/30" />
    </motion.div>);

}

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const title = "LIVIELTOURSTRAVEL";

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: mousePos.x * 0.5,
          y: mousePos.y * 0.5
        }}>
        
        <img
          src={HERO_IMG}
          alt="Aerial panoramic view of Dubai Marina at night with neon lights reflecting in water"
          className="w-full h-full object-cover scale-110" />
        
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

      {/* HUD elements */}
      <HUDLine className="top-1/4 left-0 w-full" />
      <HUDLine className="top-3/4 left-0 w-full" style={{ animationDelay: "0.3s" }} />
      <HUDCorner className="top-8 left-8 md:top-24 md:left-24" />
      <HUDCorner className="bottom-8 right-8 md:bottom-24 md:right-24 rotate-180" />

      {/* Scanning line */}
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
className="font-inter text-xs md:text-sm tracking-[0.3em] text-white uppercase mb-6">
          
          Dubai's Premier Travel Experience
        </motion.p>

        {/* Animated glow backdrop behind title */}
        <div className="relative">
          <motion.div
            animate={{
              opacity: [0.3, 0.65, 0.3],
              scale: [1, 1.08, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 -mx-10 -my-6 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, hsl(184 100% 50% / 0.12) 0%, hsl(45 65% 52% / 0.08) 50%, transparent 80%)" }} />
          
          {/* Horizontal scanline shimmer */}
          <motion.div
            animate={{ x: ["-120%", "120%"] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-full"
            style={{ background: "linear-gradient(105deg, transparent 30%, hsl(184 100% 50% / 0.1) 50%, transparent 70%)" }} />
          
            <motion.h1
            variants={glitchVariants}
            initial="hidden"
            animate="visible"
            className="font-syne font-extrabold tracking-tight text-[clamp(2.1rem,7.5vw,5.5rem)] md:text-[clamp(2.4rem,6vw,5.5rem)]">
            
          {title.split("").map((char, i) =>
            <motion.span
              key={i}
              variants={letterVariants}
              className="inline-block text-foreground text-3xl sm:text-4xl md:text-5xl"
              style={{
                textShadow: "0 0 40px hsl(45 65% 52% / 0.3)"
              }}>
              
              {char}
            </motion.span>
            )}
        </motion.h1>
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-8 mb-6" />
        

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="font-inter text-sm md:text-base text-foreground/60 max-w-md">
          
          Experience Dubai's finest tours and unforgettable adventures.
          <br />
          Create memories that last a lifetime.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.querySelector("#tours")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-10 px-8 py-3 border border-primary/40 text-primary font-inter text-sm tracking-wider hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background rounded">
          
          EXPLORE EXPEDITIONS
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          
          <span className="font-inter text-[10px] tracking-[0.2em] text-foreground/30 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent" />
          
        </motion.div>
      </div>
    </section>);

}