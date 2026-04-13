import { motion } from "framer-motion";
import { trustStats } from "@/data/siteData";

const TrustSection = () => {
  return (
    <section className="gradient-primary section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground mb-3">
            Trusted by Lakhs of Explorers
          </h2>
          <p className="text-primary-foreground/70 font-body max-w-xl mx-auto">
            Over two decades of safe, memorable adventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm"
            >
              <span className="text-4xl mb-3 block">{stat.icon}</span>
              <div className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-2">
                {stat.number}
              </div>
              <p className="text-primary-foreground/70 font-body text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
