import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-[10px] tracking-[0.4em] text-accent/80 uppercase mb-3">
            Sector 04
          </p>
          <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-foreground">
            The Nexus
          </h2>
          <p className="font-inter text-sm text-muted-foreground mt-4 max-w-md mx-auto">
            Initiate contact. Your expedition awaits.
          </p>
        </motion.div>

        {/* Contact blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="relative group p-8 md:p-10 rounded-lg border border-border/50 bg-card/30 backdrop-blur-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background block"
            aria-label="Contact LivielTours on WhatsApp"
          >
            {/* Pulsing green aura */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-700" />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-6 right-6 w-3 h-3 rounded-full bg-green-400"
            />

<div className="relative z-10">
              <div className="w-14 h-14 rounded-lg bg-green-500/15 border border-green-500/35 flex items-center justify-center mb-6">
                <MessageCircle size={28} className="text-white" />
              </div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-green-400/80 uppercase mb-2">
                Live Signal
              </p>
              <h3 className="font-syne font-bold text-xl text-foreground mb-2">WhatsApp</h3>
              <p className="font-inter text-lg text-foreground/80">+971 525006681</p>
              <p className="font-inter text-xs text-muted-foreground mt-3">
                Instant response · Available 24/7
              </p>
            </div>

            {/* Animated border on hover */}
            <div className="absolute inset-0 rounded-lg border border-green-500/0 group-hover:border-green-500/30 transition-all duration-500" />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:hello@livieltours.com"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="relative group p-8 md:p-10 rounded-lg border border-border/50 bg-card/30 backdrop-blur-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background block"
            aria-label="Email LivielTours"
          >
            {/* Blue aura */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700" />

            {/* Secure status bar */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-inter text-[9px] tracking-wider text-accent/60 uppercase">Secure</span>
            </div>

<div className="relative z-10">
              <div className="w-14 h-14 rounded-lg bg-accent/20 border border-accent/60 flex items-center justify-center mb-6">
                <Mail size={28} className="text-white" />
              </div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-accent/80 uppercase mb-2">
                Encrypted Channel
              </p>
              <h3 className="font-syne font-bold text-xl text-foreground mb-2">Email</h3>
              <p className="font-inter text-lg text-foreground/80">Livieltourstravel@gmail.com</p>
              <p className="font-inter text-xs text-muted-foreground mt-3">
                Detailed inquiries · Response within 2 hours
              </p>
            </div>

            <div className="absolute inset-0 rounded-lg border border-accent/0 group-hover:border-accent/30 transition-all duration-500" />
          </motion.a>
        </div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-3 text-muted-foreground"
        >
<MapPin size={14} className="text-white" />

          <p className="font-inter text-xs tracking-wider">
            Dubai, United Arab Emirates
          </p>
        </motion.div>
      </div>
    </section>
  );
}