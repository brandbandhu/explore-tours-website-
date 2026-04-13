import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Treks",
    href: "/treks",
    children: [
      { label: "All Treks", href: "/treks" },
      { label: "Weekend Treks", href: "/treks?type=Weekend+Trek" },
      { label: "Himalayan Treks", href: "/treks?type=Himalayan+Trek" },
    ],
  },
  { label: "Camping", href: "/treks?type=Camping" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Junior Explorers", href: "/programs/junior-explorers" },
      { label: "Lady Explorers", href: "/programs/lady-explorers" },
      { label: "Silver Trails", href: "/programs/silver-trails" },
      { label: "On Wheels", href: "/programs/on-wheels" },
      { label: "Mountain Run", href: "/programs/mountain-run" },
    ],
  },
  { label: "ATLAS Academy", href: "/atlas" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-heading font-extrabold tracking-tight">
            <span className={scrolled ? "text-primary" : "text-foreground drop-shadow-sm"}>EXPLORERS</span>
          </span>
          <span className={`hidden sm:block text-xs font-body ${scrolled ? "text-muted-foreground" : "text-foreground/70 drop-shadow-sm"}`}>
            Treks & Tours
          </span>
        </Link>

        {/* Desktop Search + Links */}
        <div className="hidden lg:flex flex-1 justify-center px-6">
          <div className="relative w-full max-w-2xl">
            <input
              placeholder="Search treks..."
              className="w-full rounded-full border border-border bg-background px-5 py-2 text-sm outline-none focus:ring-2 focus:ring-ring shadow-sm"
            />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <Link to="/login">
            <Button variant="outline" className="rounded-full px-5">Login</Button>
          </Link>
          <Link to="/login">
            <Button className="rounded-full px-5 gradient-highlight text-highlight-foreground">Sign Up</Button>
          </Link>
        </div>

        {/* Side Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className={`p-2 rounded-lg border border-border/60 bg-card/80 hover:bg-card transition-colors ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 sm:w-96 p-0">
            <div className="h-full flex flex-col">
              <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
                <SheetTitle className="text-left font-heading text-xl font-extrabold text-foreground">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.label} className="rounded-xl border border-border/60 bg-background">
                      <Link
                        to={link.href}
                        className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted/60 transition-colors rounded-xl"
                      >
                        <span className="font-heading">{link.label}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </Link>
                      {link.children && (
                        <div className="pb-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-border">
                <Link to="/login" className="block mb-3">
                  <Button variant="outline" className="w-full rounded-full">
                    Login / Sign Up
                  </Button>
                </Link>
                <Link to="/treks" className="block">
                  <Button className="w-full gradient-highlight text-highlight-foreground font-semibold rounded-full">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
