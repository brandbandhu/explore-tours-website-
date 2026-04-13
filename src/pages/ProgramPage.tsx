import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { specialPrograms } from "@/data/siteData";

const ProgramPage = () => {
  const { programId } = useParams();
  const program = specialPrograms.find((p) => p.id === programId);

  if (!program) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-bold text-foreground mb-4">Program Not Found</h1>
            <Link to="/"><Button>Go Home</Button></Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative h-[50vh] min-h-[350px]">
        <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="text-white/80 font-heading font-semibold text-sm tracking-widest uppercase">{program.ageGroup}</span>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mt-2 mb-4">{program.title}</h1>
          </div>
        </div>
      </div>

      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground font-body leading-relaxed text-lg mb-8">{program.description}</p>
            <div className="bg-background rounded-xl p-6 card-shadow border border-border mb-8">
              <h3 className="font-heading font-bold text-foreground mb-3">Program Details</h3>
              <ul className="space-y-2 text-muted-foreground font-body text-sm">
                <li>• Age Group: {program.ageGroup}</li>
                <li>• Expert certified instructors</li>
                <li>• All safety equipment provided</li>
                <li>• Certificate of completion</li>
                <li>• Photo & video documentation</li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="gradient-highlight text-highlight-foreground font-heading font-bold rounded-full px-8">
                  Enquire Now
                </Button>
              </Link>
              <Link to="/treks">
                <Button size="lg" variant="outline" className="font-heading font-bold rounded-full px-8">
                  View Events
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramPage;
