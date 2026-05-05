import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="relative left-1/2 min-h-[78vh] w-screen -translate-x-1/2 overflow-hidden md:min-h-screen">
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
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex min-h-[78vh] items-center px-4 pt-20 md:min-h-screen">
        <div className="container mx-auto">
          <div className="max-w-3xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex flex-wrap items-center gap-3 rounded-full border border-primary-foreground/25 bg-black/20 px-4 py-2 text-primary-foreground shadow-lg backdrop-blur-sm"
            >
              <span className="font-heading text-sm font-extrabold tracking-wide">EXPLORERS GROUP</span>
              <span className="h-1 w-1 rounded-full bg-highlight" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
                Adventure
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
                Travel
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">
                Training
              </span>
            </motion.div>

            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-accent md:text-base"
            >
              Since 2001 - The Name of Excellence
            </motion.p>
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4 max-w-4xl font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl lg:text-7xl"
            >
              {heroSlides[current].title}
            </motion.h1>
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8 max-w-2xl font-body text-lg text-primary-foreground/85 md:text-xl"
            >
              {heroSlides[current].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/treks">
                <Button
                  size="lg"
                  className="gradient-highlight rounded-full px-8 font-heading text-base font-bold text-highlight-foreground"
                >
                  Explore Treks
                </Button>
              </Link>
              <Link to="/atlas">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/40 px-8 font-heading text-base font-bold text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Join ATLAS
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-card/30 p-2 text-primary-foreground backdrop-blur-sm transition hover:bg-card/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-card/30 p-2 text-primary-foreground backdrop-blur-sm transition hover:bg-card/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all ${i === current ? "w-8 bg-highlight" : "w-3 bg-primary-foreground/40"}`}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
