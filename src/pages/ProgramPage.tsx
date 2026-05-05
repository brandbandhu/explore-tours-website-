import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { programDirectory, specialPrograms, tourCategoryFilters } from "@/data/siteData";

const ProgramPage = () => {
  const { programId } = useParams();
  const program = specialPrograms.find((p) => p.id === programId);
  const [form, setForm] = useState({ name: "", phone: "", category: "One Day Trek", message: "" });

  const relatedPrograms = useMemo(
    () => programDirectory.filter((item) => !item.link.endsWith(`/${programId}`)).slice(0, 8),
    [programId],
  );

  const submitEnquiry = (event: React.FormEvent) => {
    event.preventDefault();
    const details = [
      `Hi Explorers, I want details for ${program?.title}.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Category: ${form.category}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/919850504437?text=${encodeURIComponent(details)}`, "_blank", "noopener,noreferrer");
  };

  if (!program) {
    return (
      <Layout>
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 font-heading text-2xl font-bold text-foreground">Program Not Found</h1>
            <Link to="/">
              <Button>Go Home</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative min-h-[54vh] overflow-hidden">
        <img src={program.image} alt={program.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="relative z-10 flex min-h-[54vh] items-end px-4 pb-12 pt-28">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 font-heading text-xs font-bold uppercase tracking-widest text-white/85 backdrop-blur">
                {program.ageGroup}
              </span>
              <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
                {program.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{program.description}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="rounded-lg border border-border bg-card p-6 card-shadow">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Same filter for all internal pages
                </p>
                <div className="flex flex-wrap gap-2">
                  {relatedPrograms.map((item) => (
                    <Link key={item.title} to={item.link}>
                      <Badge variant="secondary" className="rounded-full px-3 py-1.5">
                        {item.title}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 card-shadow">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">Camp / Tour Category</p>
                    <h2 className="mt-2 font-heading text-2xl font-extrabold text-foreground">Choose Your Plan</h2>
                  </div>
                  <Link to="/treks">
                    <Button variant="outline" className="rounded-full font-heading font-bold">
                      View Upcoming Events
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {tourCategoryFilters.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, category }))}
                      className={`min-h-28 rounded-lg border p-4 text-left transition-all ${
                        form.category === category
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background text-foreground hover:border-primary/50"
                      }`}
                    >
                      <CheckCircle2 className="mb-3 h-5 w-5" />
                      <span className="font-heading text-sm font-bold">{category}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 card-shadow">
                <h2 className="font-heading text-2xl font-extrabold text-foreground">Program Details</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    `Age Group: ${program.ageGroup}`,
                    "Expert certified instructors",
                    "Safety equipment and first-aid support",
                    "Certificate of completion",
                    "Photo and video documentation",
                    "Custom plans for groups available",
                  ].map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-3 rounded-lg bg-background p-4 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <form onSubmit={submitEnquiry} className="rounded-lg border border-border bg-card p-6 card-shadow">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">One Day Trekking Plan</p>
                <h2 className="mt-2 font-heading text-2xl font-extrabold text-foreground">Fill Enquiry Form</h2>
                <div className="mt-5 space-y-4">
                  <Input
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-background"
                  />
                  <Input
                    required
                    type="tel"
                    placeholder="Mobile Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-background"
                  />
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {tourCategoryFilters.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                  <Textarea
                    placeholder="Tell us your preferred date, group size, or destination"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-background"
                    rows={4}
                  />
                  <Button type="submit" className="w-full font-heading font-bold text-highlight-foreground gradient-highlight">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send on WhatsApp
                  </Button>
                  <Link to="/contact" className="flex flex-wrap items-center justify-center gap-2 text-center text-sm font-semibold text-primary">
                    Contact office directly <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </form>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Explore More</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground">More Explorers Categories</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programDirectory.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group rounded-lg border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramPage;
