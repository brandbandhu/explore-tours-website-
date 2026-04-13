import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/data/siteData";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrent((c) => (c + 1) % heroSlides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[current].image}
            alt={heroSlides[current].title}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.p
          key={`sub-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent font-heading font-semibold text-sm md:text-base tracking-widest uppercase mb-4"
        >
          Since 2001 – The Name of Excellence
        </motion.p>
        <motion.h1
          key={`title-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-4 max-w-4xl leading-tight"
        >
          {heroSlides[current].title}
        </motion.h1>
        <motion.p
          key={`desc-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-8 font-body"
        >
          {heroSlides[current].subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Link to="/treks">
            <Button size="lg" className="gradient-highlight text-highlight-foreground font-heading font-bold rounded-full px-8 text-base">
              Explore Treks
            </Button>
          </Link>
          <Link to="/atlas">
            <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-bold rounded-full px-8 text-base">
              Join ATLAS
            </Button>
          </Link>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-card/90 backdrop-blur-md rounded-2xl p-3 flex flex-wrap gap-3 items-center shadow-xl max-w-3xl w-full"
        >
          <select className="flex-1 min-w-[120px] bg-muted rounded-lg px-3 py-2.5 text-sm text-foreground font-body">
            <option>Tour Type</option>
            <option>Weekend Trek</option>
            <option>Himalayan Trek</option>
            <option>Camping</option>
          </select>
          <select className="flex-1 min-w-[120px] bg-muted rounded-lg px-3 py-2.5 text-sm text-foreground font-body">
            <option>Difficulty</option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Difficult</option>
          </select>
          <select className="flex-1 min-w-[100px] bg-muted rounded-lg px-3 py-2.5 text-sm text-foreground font-body">
            <option>Month</option>
            {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <Link to="/treks">
            <Button className="gradient-primary text-primary-foreground rounded-lg px-6">
              <Search className="w-4 h-4 mr-2" /> Search
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Navigation arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-card/30 backdrop-blur-sm hover:bg-card/50 rounded-full p-2 text-primary-foreground transition">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-card/30 backdrop-blur-sm hover:bg-card/50 rounded-full p-2 text-primary-foreground transition">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-highlight w-8" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
