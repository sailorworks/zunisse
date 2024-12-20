"use client";
import { motion } from "framer-motion";
import WaitlistForm from "./components/waitlist";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const lineReveal = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="relative min-h-screen bg-black flex flex-col"
    >
      {/* Luxury Overlay Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full bg-luxury-gradient"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-emerald/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-grow container mx-auto px-6 lg:px-12 py-16 flex flex-col justify-center">
        {/* Brand Section */}
        <motion.div variants={fadeIn} className="text-center mb-16">
          <motion.p
            variants={fadeIn}
            className="text-gold/70 font-body uppercase tracking-[0.3em] text-sm mb-4"
          >
            Luxury Waist Chains
          </motion.p>
          <motion.h1
            variants={fadeIn}
            className="text-6xl md:text-8xl font-heading font-bold text-pearl-light"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-pearl-light to-gold">
              ZUNISSE
            </span>
          </motion.h1>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center space-y-8 mb-16"
        >
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl font-body font-light text-pearl-light/90 leading-relaxed"
          >
            Elevate your elegance with artisanal waist chains, meticulously
            crafted for the modern goddess.
          </motion.p>

          <div className="flex items-center justify-center space-x-4">
            <motion.div
              variants={lineReveal}
              className="w-16 h-[1px] bg-gold/30"
            />
            <motion.span
              variants={fadeIn}
              className="text-sm uppercase tracking-widest text-gold/80"
            >
              Est. 2024
            </motion.span>
            <motion.div
              variants={lineReveal}
              className="w-16 h-[1px] bg-gold/30"
            />
          </div>
        </motion.div>

        {/* Waitlist Section */}
        <motion.div variants={fadeIn} className="max-w-2xl mx-auto w-full">
          <motion.div variants={fadeIn} className="text-center mb-8">
            <motion.h2
              variants={fadeIn}
              className="text-xl uppercase tracking-widest text-gold mb-4 font-body"
            >
              Opening Soon
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-pearl-light/70 max-w-md mx-auto mb-8"
            >
              Join our exclusive waitlist to be the first to experience our
              luxurious collection of waist chains.
            </motion.p>
          </motion.div>
          <WaitlistForm />
        </motion.div>
      </div>

      {/* Decorative Footer */}
      <motion.footer variants={fadeIn} className="relative z-10 pb-8">
        <div className="container mx-auto flex justify-center items-center space-x-4 text-gold/50">
          <motion.div
            variants={lineReveal}
            className="w-24 h-[1px] bg-gold/20"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-2 h-2 rounded-full bg-gold/20"
          />
          <motion.div
            variants={lineReveal}
            className="w-24 h-[1px] bg-gold/20"
          />
        </div>
      </motion.footer>
    </motion.main>
  );
}
