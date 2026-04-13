import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { trustStats } from "@/data/siteData";
import heroMountains from "@/assets/hero-mountains.jpg";
import heroWomen from "@/assets/hero-women.jpg";
import heroCamping from "@/assets/hero-camping.jpg";
import heroKids from "@/assets/hero-kids.jpg";
import { ShieldCheck, Users, Leaf } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      <div className="pt-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroMountains} alt="Explorers in the mountains" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>
          <div className="relative">
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/90">
                  About Explorers
                </span>
                <h1 className="mt-4 font-heading text-4xl md:text-6xl font-extrabold text-white">
                  Crafting Adventures That Last a Lifetime
                </h1>
                <p className="mt-4 text-base md:text-lg text-white/80 font-body">
                  Since 2001, we have helped thousands of explorers discover the mountains with confidence, comfort, and care.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
                  Our Story
                </h2>
                <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                  Founded in 2001, Explorers Treks & Tours began as a small group of passionate trekkers who believed in the
                  transformative power of nature. What started as weekend hikes in the Sahyadri mountains has grown into one
                  of India's most trusted adventure travel organizations.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Today, we've taken over 2 lakh members on adventures ranging from beginner-friendly weekend treks to
                  challenging Himalayan expeditions. Our commitment to safety, quality, and unforgettable experiences remains
                  unwavering.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  We are a government-certified adventure travel company with certified trek leaders, first-aid trained guides,
                  and a 100% safety record. Every adventure is carefully planned to ensure the best experience for our explorers.
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <img src={heroWomen} alt="Our team" className="h-56 w-full rounded-2xl object-cover card-shadow" />
              <img src={heroCamping} alt="Camp experience" className="h-56 w-full rounded-2xl object-cover card-shadow" />
              <img src={heroKids} alt="Junior explorers" className="h-56 w-full rounded-2xl object-cover card-shadow" />
              <div className="h-56 w-full rounded-2xl border border-border bg-card p-4 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Why Us</p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-foreground">Guided by Experts</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Certified trek leaders, safety-first planning, and thoughtful routes for every level.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trustStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-background p-6 text-center card-shadow"
                >
                  <span className="text-4xl mb-3 block">{stat.icon}</span>
                  <div className="font-heading text-3xl font-extrabold text-foreground mb-2">{stat.number}</div>
                  <p className="text-muted-foreground font-body text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">Our Values</h2>
              <p className="text-muted-foreground font-body mt-3 max-w-2xl mx-auto">
                Every trek is crafted with a focus on safety, community, and respect for the mountains.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Safety First", desc: "Certified guides, first-aid support, and meticulous route planning for every adventure.", icon: ShieldCheck },
                { title: "Community", desc: "Building lasting friendships through shared adventures and a growing explorer family.", icon: Users },
                { title: "Sustainability", desc: "Leave No Trace principles, eco-friendly practices, and supporting local communities.", icon: Leaf },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-8 text-center card-shadow"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-primary">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/40">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <img src={heroCamping} alt="Group trek" className="rounded-3xl card-shadow w-full h-[360px] object-cover" />
            </div>
            <div className="lg:col-span-6">
              <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Our Promise
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-foreground">
                Adventures that feel personal, safe, and unforgettable
              </h2>
              <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                Whether it is your first trek or your fiftieth, we design every journey with care. Our teams manage logistics,
                safety, and support so you can focus on the trail, the views, and the memories.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
