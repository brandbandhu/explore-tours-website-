import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Baby, CarFront, Footprints, Mountain, MountainSnow, UserRound } from "lucide-react";
import { categories } from "@/data/siteData";

const categoryIcons = {
  "Weekend Treks": Mountain,
  "Junior Explorers": Baby,
  "Lady Explorers": UserRound,
  "Silver Trails": MountainSnow,
  "On Wheels": CarFront,
  "Mountain Run": Footprints,
};

const CategoriesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_hsl(var(--background)),_hsl(var(--secondary)/0.6)),radial-gradient(circle_at_top,_hsl(var(--primary)/0.12),_transparent_48%)]" />
      <div className="container relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground shadow-sm">
            Curated Experiences
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Choose Your <span className="text-gradient-primary">Adventure</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-muted-foreground md:text-lg">
            From weekend getaways to life-changing expeditions - find what moves you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((cat, i) => {
            const Icon = categoryIcons[cat.name as keyof typeof categoryIcons] ?? Mountain;

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="h-full"
              >
                <Link
                  to={cat.link}
                  className="group relative flex h-full min-h-48 flex-col overflow-hidden rounded-lg border border-border bg-card p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_22px_48px_-22px_hsl(var(--primary)/0.45)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/30 via-highlight to-primary/30 opacity-80" />
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-7 w-7" strokeWidth={2.2} />
                    </div>
                    <span className="rounded-full bg-muted px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                      Explore
                    </span>
                  </div>
                  <div className="mt-auto pt-8">
                    <h3 className="font-heading text-lg font-bold leading-snug text-foreground">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">View programs</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
