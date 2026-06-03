import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const photos = [
  {
    url: "https://media.base44.com/images/public/6a1882081889b675b2917e8a/52f8fbe73_generated_image.png",
    alt: "Burj Al Arab luxury hotel at twilight illuminated against indigo sky",
    title: "Burj Al Arab",
    span: "col-span-2",
  },
  {
    url: "https://media.base44.com/images/public/6a1882081889b675b2917e8a/91928aa4d_generated_image.png",
    alt: "Palm Jumeirah island aerial view at sunset with golden light",
    title: "Palm Jumeirah",
    span: "col-span-1",
  },
  {
    url: "https://media.base44.com/images/public/6a1882081889b675b2917e8a/340f554b5_generated_image.png",
    alt: "Dubai Creek at golden hour with traditional dhow boats on glittering water",
    title: "Dubai Creek",
    span: "col-span-1",
  },
  {
    url: "https://media.base44.com/images/public/6a1882081889b675b2917e8a/0ea3ab925_generated_image.png",
    alt: "Dubai Mall aquarium tunnel with bioluminescent blue lighting and sharks",
    title: "Dubai Aquarium",
    span: "col-span-1",
  },
  {
    url: "https://media.base44.com/images/public/6a1882081889b675b2917e8a/d1fe07b87_generated_image.png",
    alt: "Dubai Frame monument at dusk lit against a purple gradient sky",
    title: "Dubai Frame",
    span: "col-span-1",
  },
  {
    url: "https://media.base44.com/images/public/6a1882081889b675b2917e8a/8ae104f57_generated_image.png",
    alt: "Dubai Miracle Garden carpet of colorful flowers in geometric heart archways",
    title: "Miracle Garden",
    span: "col-span-2",
  },
];

function GalleryItem({ photo, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={() => onOpen(photo)}
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${photo.span} h-56 md:h-72 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-4 focus-within:ring-offset-background`}
      role="button"
      tabIndex={0}
      aria-label={`View ${photo.title}`}
      onKeyDown={(e) => e.key === "Enter" && onOpen(photo)}
    >
      <img
        src={photo.url}
        alt={photo.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/30 group-hover:bg-background/50 transition-all duration-500" />
      {/* Hover content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <ZoomIn size={28} className="text-foreground mb-2" />
        <p className="font-syne font-bold text-sm text-foreground tracking-wider">{photo.title}</p>
      </div>
      {/* Corner accent */}
      <div className="absolute top-3 left-3 w-5 h-5 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-px bg-primary" />
        <div className="absolute top-0 left-0 h-full w-px bg-primary" />
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-inter text-[10px] tracking-[0.4em] text-accent/80 uppercase mb-3">
            Sector 03
          </p>
          <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-foreground">
            Destinations
          </h2>
          <p className="font-inter text-sm text-muted-foreground mt-3 max-w-md">
            A visual atlas of Dubai's most extraordinary places.
          </p>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <GalleryItem key={photo.title} photo={photo} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.url}
                alt={selected.alt}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="font-syne font-bold text-lg text-foreground">{selected.title}</p>
                <button
                  onClick={() => setSelected(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded p-1"
                  aria-label="Close image"
                >
                  <X size={20} />
                </button>
              </div>
              {/* Bottom accent line */}
              <div className="mt-3 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}