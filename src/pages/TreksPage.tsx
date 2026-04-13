import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Filter, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { treks } from "@/data/siteData";

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const tourTypes = ["Weekend Trek", "Himalayan Trek", "Night Trek", "Camping", "Tour"];
const difficulties = ["Easy", "Moderate", "Difficult", "Extreme"];
const endurances = ["Low", "Medium", "High", "Very High"];

const getRegion = (location: string) => {
  const parts = location.split(",").map((part) => part.trim());
  return parts.length > 1 ? parts[parts.length - 1] : location;
};

const difficultyColor: Record<string, string> = {
  Easy: "bg-accent/20 text-accent-foreground",
  Moderate: "bg-highlight/20 text-foreground",
  Difficult: "bg-destructive/20 text-destructive",
  Extreme: "bg-destructive text-destructive-foreground",
};

const TreksPage = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState(searchParams.get("type") || "");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedEndurance, setSelectedEndurance] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const regions = useMemo(() => {
    return Array.from(new Set(treks.map((t) => getRegion(t.location)))).sort();
  }, []);

  const filtered = useMemo(() => {
    return treks.filter((t) => {
      if (searchTerm && !t.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if (selectedType && t.tourType !== selectedType) return false;
      if (selectedDifficulty && t.difficulty !== selectedDifficulty) return false;
      if (selectedEndurance && t.endurance !== selectedEndurance) return false;
      if (selectedMonth && !t.month.includes(selectedMonth)) return false;
      if (selectedRegion && getRegion(t.location) !== selectedRegion) return false;
      return true;
    });
  }, [selectedType, selectedDifficulty, selectedEndurance, selectedMonth, selectedRegion, searchTerm]);

  const clearFilters = () => {
    setSelectedType("");
    setSelectedDifficulty("");
    setSelectedEndurance("");
    setSelectedMonth("");
    setSelectedRegion("");
    setSearchTerm("");
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-heading font-bold text-sm text-foreground mb-3">Trek by Name</h4>
        <div className="relative">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search treks"
            className="w-full rounded-xl border border-border bg-background px-9 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="mt-3 max-h-40 overflow-y-auto rounded-xl border border-border/60 bg-background">
          {treks.map((t) => (
            <button
              key={t.id}
              onClick={() => setSearchTerm(t.title)}
              className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-muted/60 transition-colors"
            >
              {t.title}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-heading font-bold text-sm text-foreground mb-3">Best Months</h4>
        <div className="flex flex-wrap gap-2">
          {months.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMonth(selectedMonth === m ? "" : m)}
              className={`px-3 py-1.5 rounded-full text-xs font-heading font-semibold transition-all ${
                selectedMonth === m
                  ? "gradient-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-heading font-bold text-sm text-foreground mb-3">Region</h4>
        <div className="space-y-2">
          {regions.map((r) => (
            <label key={r} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input
                type="radio"
                name="region"
                checked={selectedRegion === r}
                onChange={() => setSelectedRegion(selectedRegion === r ? "" : r)}
                className="accent-primary"
              />
              {r}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-heading font-bold text-sm text-foreground mb-3">Tour Type</h4>
        <div className="space-y-2">
          {tourTypes.map((t) => (
            <label key={t} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input
                type="radio"
                name="type"
                checked={selectedType === t}
                onChange={() => setSelectedType(selectedType === t ? "" : t)}
                className="accent-primary"
              />
              {t}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-heading font-bold text-sm text-foreground mb-3">Difficulty</h4>
        <div className="space-y-2">
          {difficulties.map((d) => (
            <label key={d} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input
                type="radio"
                name="difficulty"
                checked={selectedDifficulty === d}
                onChange={() => setSelectedDifficulty(selectedDifficulty === d ? "" : d)}
                className="accent-primary"
              />
              {d}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-heading font-bold text-sm text-foreground mb-3">Endurance</h4>
        <div className="space-y-2">
          {endurances.map((e) => (
            <label key={e} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <input
                type="radio"
                name="endurance"
                checked={selectedEndurance === e}
                onChange={() => setSelectedEndurance(selectedEndurance === e ? "" : e)}
                className="accent-primary"
              />
              {e}
            </label>
          ))}
        </div>
      </div>
      <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
        Clear Filters
      </Button>
    </div>
  );

  return (
    <Layout>
      <div className="pt-28 pb-10 px-4">
        <div className="container mx-auto">
          <div className="bg-card rounded-3xl border border-border card-shadow p-6 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <span className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-widest">All Treks</span>
                <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-2">
                  Find Your Perfect Adventure
                </h1>
                <p className="text-muted-foreground font-body mt-2 max-w-2xl">
                  Search by name, month, region, or difficulty and discover treks curated by our experts.
                </p>
              </div>
              <div className="w-full lg:max-w-md">
                <div className="relative">
                  <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search treks..."
                    className="w-full rounded-full border border-border bg-background px-10 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {months.slice(0, 6).map((m) => (
                    <button
                      key={m}
                      onClick={() => setSelectedMonth(selectedMonth === m ? "" : m)}
                      className={`px-3 py-1.5 rounded-full text-xs font-heading font-semibold transition-all ${
                        selectedMonth === m
                          ? "gradient-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-border"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="flex gap-8">
          <div className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 bg-card rounded-2xl p-6 card-shadow border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-foreground">Filter Treks</h3>
                <button onClick={clearFilters} className="text-xs font-semibold text-primary hover:underline">
                  Clear
                </button>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Find your perfect adventure</p>
              <FilterSidebar />
            </div>
          </div>

          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden fixed bottom-20 right-6 z-40 gradient-primary text-primary-foreground rounded-full px-5 py-3 shadow-lg font-heading font-semibold text-sm flex items-center gap-2"
          >
            <Filter className="w-4 h-4" /> Filters
          </button>

          {showFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-foreground/50" onClick={() => setShowFilters(false)} />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                className="absolute right-0 top-0 bottom-0 w-80 bg-card p-6 shadow-xl overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-heading font-bold text-foreground">Filter Treks</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>
                <FilterSidebar />
              </motion.div>
            </div>
          )}

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground font-body">
                Showing {filtered.length} trek{filtered.length !== 1 ? "s" : ""}
              </p>
              <Button variant="outline" size="sm" onClick={clearFilters} className="hidden sm:inline-flex">
                Clear Filters
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((trek, i) => (
                <motion.div
                  key={trek.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/treks/${trek.id}`}
                    className="group block bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={trek.image} alt={trek.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <Badge className={`absolute top-3 left-3 ${difficultyColor[trek.difficulty]} font-heading text-xs`}>
                        {trek.difficulty}
                      </Badge>
                      <Badge className="absolute bottom-3 left-3 bg-background/90 text-foreground border border-border text-xs font-heading">
                        {trek.duration}
                      </Badge>
                      {trek.originalPrice && (
                        <Badge className="absolute top-3 right-3 gradient-highlight text-highlight-foreground font-heading text-xs">
                          {Math.round((1 - trek.price / trek.originalPrice) * 100)}% OFF
                        </Badge>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {trek.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {trek.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {trek.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-heading font-extrabold text-lg text-primary">?{trek.price.toLocaleString()}</span>
                          {trek.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through ml-2">?{trek.originalPrice.toLocaleString()}</span>
                          )}
                        </div>
                        <span className="text-primary text-sm font-semibold flex items-center gap-1">
                          View <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground font-body text-lg">No treks match your filters.</p>
                <Button variant="outline" onClick={clearFilters} className="mt-4">Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TreksPage;
