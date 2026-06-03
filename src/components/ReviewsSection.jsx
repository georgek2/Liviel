import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Alexandra Chen",
    location: "Singapore",
    rating: 5,
    text: "LivielTours redefined luxury travel for me. The desert safari was otherworldly — watching the sunset from the dunes felt like stepping into another dimension.",
  },
  {
    name: "Marcus Williams",
    location: "London, UK",
    rating: 5,
    text: "From the yacht cruise to the architectural tour, every moment was flawlessly orchestrated. This is what premium travel should feel like.",
  },
  {
    name: "Sofia Al-Rashid",
    location: "Riyadh, KSA",
    rating: 5,
    text: "The heritage tour through Old Dubai was extraordinary. Our guide's knowledge was encyclopedic, and the hidden gems we discovered were unforgettable.",
  },
  {
    name: "James Nakamura",
    location: "Tokyo, Japan",
    rating: 5,
    text: "Booked the adventure package on a whim. Best decision of 2025. The skydiving over Palm Jumeirah was the most exhilarating experience of my life.",
  },
  {
    name: "Elena Petrova",
    location: "Moscow, Russia",
    rating: 4,
    text: "Impeccable service from start to finish. The attention to detail is remarkable — they remembered my coffee preference from day one.",
  },
  {
    name: "David Müller",
    location: "Berlin, Germany",
    rating: 5,
    text: "Three trips with LivielTours now, each one better than the last. They keep finding new ways to surprise and delight. True travel artisans.",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="font-inter text-[10px] tracking-[0.4em] text-accent/80 uppercase mb-3">
            Sector 03
          </p>
          <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-foreground">
            Echo Chamber
          </h2>
          <p className="font-inter text-sm text-muted-foreground mt-4 max-w-md mx-auto">
            Real stories from real travelers who chose us.
          </p>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}