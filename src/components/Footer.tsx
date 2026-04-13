import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-extrabold mb-2">EXPLORERS</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">Treks & Tours</p>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Since 2001 – The Name of Excellence. Crafting unforgettable adventure experiences across India and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Treks", href: "/treks" },
                { label: "ATLAS Academy", href: "/atlas" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Junior Explorers", href: "/programs/junior-explorers" },
                { label: "Lady Explorers", href: "/programs/lady-explorers" },
                { label: "Silver Trails", href: "/programs/silver-trails" },
                { label: "Corporate Tours", href: "/corporate" },
                { label: "School Tours", href: "/school-tours" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <a href="mailto:info@explorerstreks.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
                <Mail className="w-4 h-4" />
                info@explorerstreks.com
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Office No. 12, FC Road, Shivajinagar, Pune 411005</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Explorers Treks & Tours. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Facebook", "Instagram", "YouTube", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
