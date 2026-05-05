import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { treks } from "@/data/siteData";

const difficultyColor: Record<string, string> = {
  Easy: "bg-accent/20 text-accent-foreground",
  Moderate: "bg-highlight/20 text-foreground",
  Difficult: "bg-destructive/20 text-destructive",
  Extreme: "bg-destructive text-destructive-foreground",
};

const FeaturedTreks = () => {
  const featured = treks.filter((t) => t.featured).slice(0, 6);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Featured <span className="text-gradient-primary">Treks</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Handpicked adventures for every explorer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((trek, i) => (
            <motion.div
              key={trek.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/treks/${trek.id}`}
                className="group block bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={trek.image}
                    alt={trek.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-3 left-3 ${difficultyColor[trek.difficulty]} font-heading text-xs`}>
                    {trek.difficulty}
                  </Badge>
                  {trek.originalPrice && (
                    <Badge className="absolute top-3 right-3 gradient-highlight text-highlight-foreground font-heading text-xs">
                      {Math.round((1 - trek.price / trek.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {trek.title}
                  </h3>
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex min-w-0 items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {trek.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {trek.duration}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
                    <div>
                      <span className="font-heading font-extrabold text-xl text-primary">₹{trek.price.toLocaleString()}</span>
                      {trek.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">₹{trek.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary font-semibold gap-1">
                      Details <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/treks">
            <Button size="lg" className="gradient-primary text-primary-foreground font-heading font-bold rounded-full px-10">
              View All Treks
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreks;
