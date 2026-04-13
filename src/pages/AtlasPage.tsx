import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroKids from "@/assets/hero-kids.jpg";

const AtlasPage = () => {
  return (
    <Layout>
      <div className="relative h-[50vh] min-h-[350px]">
        <img src={heroKids} alt="ATLAS Academy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">ATLAS Academy</h1>
            <p className="text-primary-foreground/80 font-body text-lg max-w-xl mx-auto">
              Adventure Training for Leadership, Adventure & Survival
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-extrabold text-foreground mb-6">About ATLAS</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              ATLAS Academy is our flagship leadership development program that uses outdoor adventure
              as a medium for personal growth. Through carefully designed challenges, participants develop
              resilience, teamwork, decision-making, and leadership skills that translate into every
              aspect of life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { title: "Mountaineering", desc: "Learn basic to advanced mountaineering skills from certified instructors." },
                { title: "Survival Skills", desc: "Navigation, shelter building, fire craft, and wilderness first aid." },
                { title: "Leadership", desc: "Team dynamics, conflict resolution, and leading under pressure." },
                { title: "Certification", desc: "Receive recognized certification upon completing the program." },
              ].map((m) => (
                <div key={m.title} className="bg-background rounded-xl p-6 card-shadow border border-border">
                  <h3 className="font-heading font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{m.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/contact">
              <Button size="lg" className="gradient-highlight text-highlight-foreground font-heading font-bold rounded-full px-10">
                Enroll Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AtlasPage;
