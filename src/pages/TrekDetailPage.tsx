import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Users,
  TrendingUp,
  IndianRupee,
  ChevronRight,
  Check,
  X as XIcon,
  Calendar,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import { treks } from "@/data/siteData";

const TrekDetailPage = () => {
  const { id } = useParams();
  const trek = treks.find((t) => t.id === id);
  const [openMonth, setOpenMonth] = useState<string | null>(null);

  if (!trek) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-bold text-foreground mb-4">Trek Not Found</h1>
            <Link to="/treks"><Button>Browse Treks</Button></Link>
          </div>
        </div>
      </Layout>
    );
  }

  const quickFacts = [
    { icon: MapPin, label: "Location", value: trek.location },
    { icon: Clock, label: "Duration", value: trek.duration },
    { icon: TrendingUp, label: "Difficulty", value: trek.difficulty },
    { icon: Users, label: "Age Group", value: `${trek.ageGroup} yrs` },
    { icon: Calendar, label: "Best Months", value: trek.month.join(", ") },
    { icon: IndianRupee, label: "Starting Price", value: `₹${trek.price.toLocaleString()}` },
  ];

  const monthNames: Record<string, string> = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };

  const departuresByMonth = trek.month
    .filter((m) => m !== "Dec")
    .map((m) => ({
    key: m,
    label: `${monthNames[m] || m}-2026`,
    items: [
      { range: `${m} 10 – ${m} 18`, status: "Filling Fast", seats: "7 Seats Left", tone: "fast" },
      { range: `${m} 19 – ${m} 27`, status: "Seats Left", seats: "11 Seats Left", tone: "left" },
      { range: `${m} 25 – ${m} 31`, status: "Open", seats: "Open", tone: "open" },
    ],
  }));

  const statusTone = {
    fast: "text-orange-600",
    left: "text-amber-600",
    full: "text-red-500",
    open: "text-emerald-600",
  } as const;

  return (
    <Layout>
      <div className="pt-24">
        <div className="container mx-auto px-4 pb-12">
          <div className="flex items-center gap-2 text-muted-foreground text-xs mb-4 font-body">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/treks" className="hover:text-foreground">Treks</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{trek.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-card rounded-3xl border border-border overflow-hidden card-shadow">
                <div className="relative h-[360px]">
                  <img src={trek.image} alt={trek.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <Badge className="gradient-highlight text-highlight-foreground font-heading text-xs mb-3">
                      {trek.difficulty}
                    </Badge>
                    <h1 className="mb-2 font-heading text-2xl font-extrabold text-primary-foreground sm:text-3xl md:text-5xl">
                      {trek.title}
                    </h1>
                    <p className="flex items-center gap-2 font-body text-sm text-primary-foreground/80 sm:text-base">
                      <MapPin className="w-4 h-4" /> {trek.location}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 bg-background/60 p-3 sm:gap-3 sm:p-4">
                  {trek.gallery.slice(0, 3).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${trek.title} gallery ${i + 1}`}
                      loading="lazy"
                      className="h-20 w-full rounded-lg object-cover sm:h-24"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="bg-card rounded-2xl border border-border p-4 card-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <fact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-body">{fact.label}</p>
                        <p className="font-heading font-bold text-sm text-foreground">{fact.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-6 card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                    <Compass className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">Overview</h2>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">{trek.overview}</p>
              </motion.section>

              <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-6 card-shadow">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Highlights</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trek.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-foreground font-body">
                      <span className="mt-1 w-2 h-2 rounded-full bg-highlight shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <div className="bg-card rounded-2xl border border-border p-6 card-shadow">
                  <div className="rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-500 text-white text-center font-heading font-extrabold tracking-widest py-3 mb-4 flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    FIXED DEPARTURES
                  </div>
                  <div className="space-y-3">
                    {departuresByMonth.map((month, idx) => {
                      const isOpen = openMonth ? openMonth === month.key : idx === 0;
                      return (
                        <div key={month.key} className="border border-border rounded-2xl overflow-hidden">
                          <button
                            onClick={() => setOpenMonth(isOpen ? null : month.key)}
                            className={`w-full flex items-center justify-between px-5 py-3 text-left font-heading font-bold ${
                              isOpen ? "bg-emerald-600 text-white" : "bg-background text-foreground"
                            }`}
                          >
                            <span>{month.label}</span>
                            <span className="text-sm">{isOpen ? "▲" : "▼"}</span>
                          </button>
                          {isOpen && (
                            <div className="bg-muted/40 p-4 space-y-3">
                              {month.items.map((item) => (
                                <div key={item.range} className="flex flex-col gap-1 rounded-lg border border-border bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                                  <span className="text-sm font-semibold text-foreground">{item.range}</span>
                                  <span className={`text-sm font-semibold ${statusTone[item.tone as keyof typeof statusTone]}`}>
                                    {item.seats} {item.status !== "Open" ? "• " + item.status : ""}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.section>

              <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-6 card-shadow">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Itinerary</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {trek.itinerary.map((day) => (
                    <AccordionItem key={day.day} value={`day-${day.day}`} className="bg-background rounded-xl border border-border px-5 card-shadow">
                      <AccordionTrigger className="font-heading font-semibold text-foreground hover:no-underline">
                        Day {day.day}: {day.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                        {day.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.section>

              <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
                    <h3 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" /> What's Included
                    </h3>
                    <ul className="space-y-2">
                      {trek.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground font-body">
                          <Check className="w-3 h-3 text-primary shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
                    <h3 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                      <XIcon className="w-5 h-5 text-destructive" /> What's Excluded
                    </h3>
                    <ul className="space-y-2">
                      {trek.excludes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                          <XIcon className="w-3 h-3 text-destructive shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-card rounded-2xl p-6 card-shadow border border-border space-y-6">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-heading text-3xl font-extrabold text-primary">₹{trek.price.toLocaleString()}</span>
                    {trek.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">₹{trek.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground font-body">per person (incl. GST)</p>
                </div>

                {trek.originalPrice && (
                  <div className="bg-highlight/10 rounded-lg p-3 text-center">
                    <p className="font-heading text-sm font-bold text-highlight">
                      Save ₹{(trek.originalPrice - trek.price).toLocaleString()}!
                    </p>
                    <p className="text-xs text-muted-foreground">Early bird offer</p>
                  </div>
                )}

                <div className="space-y-3 text-sm font-body">
                  <div className="flex justify-between text-foreground">
                    <span>Duration</span>
                    <span className="font-semibold">{trek.duration}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Difficulty</span>
                    <span className="font-semibold">{trek.difficulty}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Age Group</span>
                    <span className="font-semibold">{trek.ageGroup} yrs</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Available</span>
                    <span className="font-semibold">{trek.month.join(", ")}</span>
                  </div>
                </div>

                <Button className="w-full gradient-highlight text-highlight-foreground font-heading font-bold text-lg rounded-xl py-6">
                  Book Now
                </Button>

                <a
                  href={`https://wa.me/919850504437?text=${encodeURIComponent(`Hi! I'm interested in ${trek.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-primary font-semibold hover:underline"
                >
                  Have questions? Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrekDetailPage;
