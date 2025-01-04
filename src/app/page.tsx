"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import WaitlistForm from "./components/waitlist";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="h-screen bg-black overflow-hidden relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pearl-light/5 blur-[100px] rounded-full" />
      </div>

      {/* Main Content Grid */}
      <div className="h-full grid lg:grid-cols-2 container mx-auto px-6 lg:px-12 py-8 relative z-10">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-between h-full pr-0 lg:pr-12">
          {/* Top Content Section */}
          <div className="space-y-6">
            {/* Brand Section */}
            <motion.div variants={slideIn} className="space-y-2">
              <motion.p
                variants={fadeIn}
                className="text-gold/80 font-body uppercase tracking-[0.4em] text-sm"
              >
                Luxury Waist Chains
              </motion.p>
              <motion.h1
                variants={fadeIn}
                className="text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-none"
              >
                <span className="text-gold">ZUNISSE</span>
              </motion.h1>
            </motion.div>

            {/* Description Section */}
            <div className="space-y-4">
              <motion.p
                variants={fadeIn}
                className="text-xl font-light text-pearl-light/90 leading-relaxed max-w-lg"
              >
                Elevate your elegance with artisanal waist chains, meticulously
                crafted for the modern goddess. Each piece is a celebration of
                feminine beauty and timeless sophistication.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex items-center space-x-4"
              >
                <div className="h-[1px] w-12 bg-gold/30" />
                <span className="text-sm uppercase tracking-widest text-gold">
                  Est. 2024
                </span>
              </motion.div>
            </div>
          </div>

          {/* Bottom Content Section */}
          <div className="space-y-6">
            {/* Opening Soon Section */}
            <motion.div variants={fadeIn} className="space-y-3">
              <h2 className="text-gold text-xl uppercase tracking-widest font-body">
                Opening Soon
              </h2>
              <p className="text-pearl-light/70 text-lg max-w-md">
                Join our exclusive waitlist to be the first to experience our
                luxurious collection.
              </p>
            </motion.div>

            {/* Waitlist Form */}
            <WaitlistForm />
          </div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          variants={imageReveal}
          className="relative h-full hidden lg:block"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-gold/20">
            <Image
              src="/waistchain-hero.png"
              alt="Luxury waist chain elegantly worn"
              fill
              className="object-cover object-center"
              priority
              quality={95}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Corner Decorative Element */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/40" />
          </div>
        </motion.div>
      </div>

      {/* Decorative footer element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3"
      >
        <div className="w-1 h-1 rounded-full bg-gold/30" />
        <div className="w-1 h-1 rounded-full bg-gold/30" />
        <div className="w-1 h-1 rounded-full bg-gold/30" />
      </motion.div>
    </motion.main>
  );
}
