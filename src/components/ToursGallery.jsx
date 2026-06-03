import { motion } from "framer-motion";
import TourCard from "./TourCard";

const tours = [
  {
    title: "Desert Odyssey",
    tag: "Safari",
    image: "/images/tour-1-dubai.png",
    alt: "Sweeping view of Arabian desert red sand dunes at golden hour sunset",
    duration: "6 hours",
    terrain: "Desert Dunes",
    rating: "★★★★★",
    description: "Traverse the crimson dunes in luxury 4x4s, culminating in a sunset feast under the stars.",
  },
  {
    title: "Azure Voyage",
    tag: "Yacht Cruise",
    image: "/images/tour-2-abudhabi.png",
    alt: "Luxury white yacht cruising through turquoise waters near Dubai coastline",
    duration: "4 hours",
    terrain: "Arabian Gulf",
    rating: "★★★★★",
    description: "Glide through the Gulf aboard a private yacht with panoramic views of the Dubai skyline.",
  },
  {
    title: "Skyline Protocol",
    tag: "Architecture",
    image: "/images/tour-3-desert.png",
    alt: "Detail-oriented shot of modern Emirati architecture with geometric glass facade",
    duration: "5 hours",
    terrain: "Urban",
    rating: "★★★★☆",
    description: "An exclusive tour of Dubai's most iconic architectural marvels and engineering feats.",
  },
  {
    title: "Altitude Rush",
    tag: "Adventure",
    image: "/images/tour-4-beach.png",
    alt: "Aerial view of Dubai adventure zone with Palm Jumeirah visible below",
    duration: "3 hours",
    terrain: "Aerial",
    rating: "★★★★★",
    description: "Skydiving, helicopter rides, and zip-lines — pure adrenaline at impossible heights.",
  },
  {
    title: "Heritage Nexus",
    tag: "Cultural",
    image: "/images/tour-5-mountain.png",
    alt: "Interior of a traditional Arabian souk market with ornate gold lanterns",
    duration: "7 hours",
    terrain: "Historic District",
    rating: "★★★★★",
    description: "Journey through ancient souks, spice markets, and hidden gems of Old Dubai.",
  },
  {
    title: "Sky Sovereignty",
    tag: "Helicopter Tour",
    image: "https://media.base44.com/images/public/6a1882081889b675b2917e8a/598a4373f_generated_image.png",
    alt: "Luxury private helicopter flying over Dubai at golden hour with Burj Khalifa visible below",
    duration: "90 minutes",
    terrain: "Aerial / Urban",
    rating: "\u2605\u2605\u2605\u2605\u2605",
    description: "A private helicopter flight over Dubai's iconic landmarks — the ultimate bird's-eye perspective.",
  },
  {
    title: "Arctic Protocol",
    tag: "Winter Experience",
    image: "https://media.base44.com/images/public/6a1882081889b675b2917e8a/35ffcbbc5_generated_image.png",
    alt: "Luxury indoor ski slope inside a massive modern mall in Dubai with electric blue lighting",
    duration: "Half day",
    terrain: "Indoor / Snow",
    rating: "\u2605\u2605\u2605\u2605\u2606",
    description: "From scorching desert to sub-zero snowfields — Dubai's most surreal contrast experience.",
  },
  {
    title: "Zenith Table",
    tag: "Culinary",
    image: "https://media.base44.com/images/public/6a1882081889b675b2917e8a/11d50c225_generated_image.png",
    alt: "Ultra luxury private rooftop dining setup overlooking the Dubai skyline at night",
    duration: "3 hours",
    terrain: "Skyline / Rooftop",
    rating: "\u2605\u2605\u2605\u2605\u2605",
    description: "A curated private dining odyssey above the city — world-class cuisine under a canopy of stars.",
  },
];

export default function ToursGallery() {
  return (
    <section id="tours" className="relative py-24 md:py-32 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-inter text-[10px] tracking-[0.4em] text-accent/80 uppercase mb-3">
            Sector 02
          </p>
          <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-foreground">
            Expeditions
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="relative">
        <div className="flex gap-6 px-6 md:px-16 overflow-x-auto pb-8 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {tours.map((tour, i) => (
            <TourCard key={tour.title} tour={tour} index={i} />
          ))}
        </div>

        {/* Gradient fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="mt-16 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-border to-transparent origin-center"
      />
    </section>
  );
}