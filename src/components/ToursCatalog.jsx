import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TourCatalogCard from "./TourCatalogCard";

const ALL_TOURS = [
  {
    id: 1,
    title: "Desert Odyssey",
    tag: "Safari",
    category: "Adventure",
    image: "/images/tour-1-dubai.png",
    alt: "Sweeping view of Arabian desert red sand dunes at golden hour sunset",
    duration: "6 hours",
    terrain: "Desert Dunes",
    stars: 5,
    price: "AED 850",
    description: "Traverse the crimson dunes in luxury 4x4s, watch the sun melt into the horizon, and dine under a canopy of stars in a private Bedouin camp.",
  },
  {
    id: 2,
    title: "Azure Voyage",
    tag: "Yacht Cruise",
    category: "Luxury",
    image: "/images/tour-2-abudhabi.png",
    alt: "Luxury white yacht cruising through turquoise waters near Dubai coastline",
    duration: "4 hours",
    terrain: "Arabian Gulf",
    stars: 5,
    price: "AED 1,200",
    description: "Glide through the Gulf aboard a private superyacht with panoramic views of the Dubai skyline, gourmet catering, and a personal crew.",
  },
  {
    id: 3,
    title: "Skyline Protocol",
    tag: "Architecture",
    category: "Cultural",
    image: "/images/tour-3-desert.png",
    alt: "Detail-oriented shot of modern Emirati architecture with geometric glass facade",
    duration: "5 hours",
    terrain: "Urban",
    stars: 4,
    price: "AED 650",
    description: "An exclusive guided tour of Dubai's most iconic architectural marvels, from the Burj Khalifa to the futuristic Museum of the Future.",
  },
  {
    id: 4,
    title: "Altitude Rush",
    tag: "Adventure",
    category: "Adventure",
    image: "/images/tour-4-beach.png",
    alt: "Aerial view of Dubai adventure zone with Palm Jumeirah visible below",
    duration: "3 hours",
    terrain: "Aerial",
    stars: 5,
    price: "AED 1,800",
    description: "Skydiving, helicopter rides, and zip-lines across the skyline — pure adrenaline at impossible heights above one of the world's greatest cities.",
  },
  {
    id: 5,
    title: "Heritage Nexus",
    tag: "Cultural",
    category: "Cultural",
    image: "/images/tour-5-mountain.png",
    alt: "Interior of a traditional Arabian souk market with ornate gold lanterns",
    duration: "7 hours",
    terrain: "Historic District",
    stars: 5,
    price: "AED 550",
    description: "Journey through ancient souks, spice markets, and the hidden gems of Old Dubai — immerse yourself in authentic Emirati heritage and hospitality.",
  },
  {
    id: 6,
    title: "Sky Sovereignty",
    tag: "Helicopter Tour",
    category: "Luxury",
    image: "/images/tour-6-cultural.png",
    alt: "Luxury private helicopter flying over Dubai at golden hour with Burj Khalifa visible below",
    duration: "90 minutes",
    terrain: "Aerial / Urban",
    stars: 5,
    price: "AED 2,400",
    description: "A private helicopter flight over every landmark in Dubai's astonishing skyline — the ultimate bird's-eye perspective reserved for the discerning few.",
  },
  {
    id: 7,
    title: "Arctic Protocol",
    tag: "Winter Experience",
    category: "Adventure",
    image: "/images/tour-7-adventure.png",
    alt: "Luxury indoor ski slope inside a massive modern mall in Dubai with electric blue lighting",
    duration: "Half day",
    terrain: "Indoor / Snow",
    stars: 4,
    price: "AED 750",
    description: "From scorching desert heat to sub-zero snowfields in minutes — Dubai's most surreal atmospheric contrast, set inside a world-class winter paradise.",
  },
  {
    id: 8,
    title: "Zenith Table",
    tag: "Culinary",
    category: "Luxury",
    image: "/images/tour-8-luxury.png",
    alt: "Ultra luxury private rooftop dining setup overlooking the Dubai skyline at night",
    duration: "3 hours",
    terrain: "Skyline / Rooftop",
    stars: 5,
    price: "AED 980",
    description: "A curated private dining odyssey above the glittering city — world-class chefs, bespoke menus, and a skyline table reserved only for you.",
  },
];

const CATEGORIES = ["All", "Luxury", "Adventure", "Cultural"];

export default function ToursCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = ALL_TOURS[5]; // Sky Sovereignty as featured
  const filtered = ALL_TOURS.filter(
    (t) => t.id !== featured.id && (activeCategory === "All" || t.category === activeCategory)
  );

  return (
    <section id="tours" className="relative py-24 md:py-36 overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="font-inter text-[9px] tracking-[0.5em] text-accent/70 uppercase mb-3">
              Expedition Catalog
            </p>
            <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-foreground leading-none">
              Luxury
              <br />
              <span className="text-foreground/30">Expeditions</span>
            </h2>
            <div className="mt-5 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
          </div>
          <p className="font-inter text-sm text-foreground/40 max-w-xs leading-relaxed md:text-right">
            Every journey curated to perfection — from desert escapes to aerial experiences above the city of tomorrow.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 mb-12 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative flex-shrink-0 font-inter text-xs tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-300 focus:outline-none ${
                activeCategory === cat
                  ? "text-background bg-primary"
                  : "text-foreground/50 border border-border/40 hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
          <div className="ml-auto font-inter text-[10px] text-foreground/25 tracking-widest flex-shrink-0">
            {filtered.length + 1} expeditions
          </div>
        </motion.div>

        {/* Featured Tour */}
        <div className="mb-8">
          <TourCatalogCard tour={featured} index={0} featured={true} />
        </div>

        {/* Tour Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((tour, i) => (
              <TourCatalogCard key={tour.id} tour={tour} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 flex flex-col items-center gap-5"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent" />
          <p className="font-inter text-xs text-foreground/30 tracking-[0.3em] uppercase text-center">
            All experiences are fully customizable — contact us to design your journey
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-2 px-8 py-3 border border-primary/40 text-primary font-inter text-xs tracking-widest uppercase hover:bg-primary/10 transition-all duration-300"
          >
            Bespoke Inquiry
          </button>
        </motion.div>
      </div>
    </section>
  );
}