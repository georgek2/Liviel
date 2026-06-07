import { motion } from "framer-motion";
import { Hotel, Shield, Car, Smartphone } from "lucide-react";

const services = [
  {
    id: 0,
    title: "UAE Business Setup",
    description:
      "Launch your UAE company with trusted setup guidance, documentation support, and compliance assistance.",
    icon: Hotel,
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 1,
    title: "Hotel Booking",
    description:
      "Book premium accommodations across Dubai with exclusive rates and personalized service.",
    icon: Hotel,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Dubai Police Clearance",
    description:
      "Fast-track clearance certificates with complete documentation and legal assistance.",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Airport Pickup & Transfers",
    description:
      "Comfortable, reliable ground transportation with professional drivers available 24/7.",
    icon: Car,
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 4,
    title: "SIM Card Replacement",
    description:
      "Quick replacement and activation of local SIM cards with data plans.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "Visa Assistance",
    description:
      "Expert guidance through visa procedures and application processes.",
    icon: Shield,
    color: "from-red-500 to-rose-500",
  },
  {
    id: 6,
    title: "Travel Insurance",
    description:
      "Comprehensive coverage tailored to your Dubai travel needs.",
    icon: Hotel,
    color: "from-indigo-500 to-blue-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  const featuredService = services.find((service) => service.id === 0);
  const otherServices = services.filter((service) => service.id !== 0);

  return (
    <section
      id="services"
      className="relative py-20 px-6 bg-background overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-xs md:text-sm tracking-[0.3em] text-accent uppercase mb-4">
            Our Offerings
          </p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-foreground mb-6">
            Premium Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="font-inter text-foreground/60 max-w-2xl mx-auto text-lg">
            Comprehensive solutions for all your travel needs in Dubai
          </p>
        </motion.div>

        {/* Services Grid (excluding UAE Business Setup) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card Container */}
                <div
                  className="relative h-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
                  aria-label={service.title}
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${service.color}`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-syne font-extrabold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-inter text-foreground/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Top Border Accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />

                  {/* Bottom Right Corner Accent */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: service.id * 0.1 }}
                    className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${service.color} opacity-0 group-hover:opacity-10 rounded-tl-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Featured UAE Business Setup Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/40 backdrop-blur-sm">
            {/* background gradient accents */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-primary/5 to-accent/10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />

            {/* Make it taller than a normal card grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Text */}
              <div className="p-10 md:p-14 flex items-center">
                <div>
                  <p className="font-inter text-xs md:text-sm tracking-[0.3em] text-accent uppercase mb-4">
                    UAE Business Setup
                  </p>
                  <h3 className="font-syne font-extrabold text-3xl md:text-4xl text-foreground mb-4">
                    UAE Business Setup
                  </h3>
                  <p className="font-inter text-foreground/70 leading-relaxed max-w-xl text-base">
                    {featuredService?.description}
                  </p>

                  {/* quick highlights */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        label: "Setup Guidance",
                        color: "from-yellow-400 to-amber-500",
                      },
                      {
                        label: "Documentation Support",
                        color: "from-amber-400 to-yellow-500",
                      },
                      {
                        label: "Compliance Assistance",
                        color: "from-amber-500 to-orange-500",
                      },
                      {
                        label: "Step-by-step Support",
                        color: "from-yellow-500 to-amber-500",
                      },
                    ].map((h) => (
                      <div
                        key={h.label}
                        className="h-full rounded-2xl border border-border/50 bg-background/40 px-4 py-3"
                      >
                        <div
                          className={`h-1 w-10 bg-gradient-to-r ${h.color} mb-2`}
                        />
                        <p className="font-inter font-semibold text-foreground/90 text-sm">
                          {h.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-0 lg:min-h-[640px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-accent/10 pointer-events-none" />
                <img
                  src="/images/business-setup.png"
                  alt="UAE Business Setup"
                  className="absolute inset-0 w-full h-full object-contain object-top lg:object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm px-4 py-3">
                    <p className="font-inter font-semibold text-foreground/90 text-sm">
                      Trusted setup assistance for UAE entrepreneurs
                    </p>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                      <Hotel className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-inter text-foreground/60 mb-6">
            Ready to experience premium travel services?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary via-primary to-accent text-background font-inter font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/60 brightness-110 transition-all duration-300"
          >
            Get Started Today
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
