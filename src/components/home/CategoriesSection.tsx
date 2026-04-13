import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "@/data/siteData";

const CategoriesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.08),_transparent_55%),radial-gradient(circle_at_bottom,_hsl(var(--accent)/0.08),_transparent_55%)]" />
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Curated Experiences
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mt-4">
            Choose Your <span className="text-gradient-primary">Adventure</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto mt-3">
            From weekend getaways to life-changing expeditions - find what moves you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={cat.link}
                className="group relative h-full rounded-2xl border border-border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-18px_hsl(var(--primary)/0.35)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Explore</span>
                </div>
                <div className="mt-4">
                  <div className="font-heading font-semibold text-base text-foreground">
                    {cat.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">View programs</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
