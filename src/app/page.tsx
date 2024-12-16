import WaitlistForm from "./components/waitlist";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black flex flex-col">
      {/* Luxury Overlay Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-luxury-gradient opacity-20" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-emerald/10 rounded-full blur-[100px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-grow container mx-auto px-6 lg:px-12 py-16 flex flex-col justify-center">
        {/* Brand Section */}
        <div className="text-center mb-16">
          <p className="text-gold/70 font-body uppercase tracking-[0.3em] text-sm mb-4">
            Luxury Waist Chains
          </p>
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-pearl-light">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-pearl-light to-gold">
              ZUNISSE
            </span>
          </h1>
        </div>

        {/* Hero Content */}
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-16">
          <p className="text-xl md:text-2xl font-body font-light text-pearl-light/90 leading-relaxed">
            Elevate your elegance with artisanal waist chains, meticulously
            crafted for the modern goddess.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-[1px] bg-gold/30" />
            <span className="text-sm uppercase tracking-widest text-gold/80">
              Est. 2024
            </span>
            <div className="w-16 h-[1px] bg-gold/30" />
          </div>
        </div>

        {/* Waitlist Section */}
        <div className="max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-xl uppercase tracking-widest text-gold mb-4 font-body">
              Opening Soon
            </h2>
            <p className="text-pearl-light/70 max-w-md mx-auto mb-8">
              Join our exclusive waitlist to be the first to experience our
              luxurious collection of waist chains.
            </p>
          </div>

          <WaitlistForm />
        </div>
      </div>

      {/* Decorative Footer */}
      <footer className="relative z-10 pb-8">
        <div className="container mx-auto flex justify-center items-center space-x-4 text-gold/50">
          <div className="w-24 h-[1px] bg-gold/20" />
          <div className="w-2 h-2 rounded-full bg-gold/20" />
          <div className="w-24 h-[1px] bg-gold/20" />
        </div>
      </footer>
    </main>
  );
}
