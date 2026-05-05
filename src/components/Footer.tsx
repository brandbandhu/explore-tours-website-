import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";

const footerGroups = [
  {
    title: "Quick Links",
    links: ["Home", "About Us", "Treks", "Camping", "Contact Us", "FAQ"],
  },
  {
    title: "Useful Links",
    links: [
      "How to Book",
      "Cancellation Policy",
      "Rules During Event",
      "Discount Policy",
      "Privacy Policy",
      "Rules & Regulations",
    ],
  },
  {
    title: "Speciality",
    links: [
      "School & Educational Tours",
      "Corporate Tours",
      "Children Camps",
      "Jungle Safari",
      "Himalayan Treks",
      "Women Special",
    ],
  },
  {
    title: "We Also Offer",
    links: [
      "Domestic Tours",
      "International Tours",
      "Customised Tour Packages",
      "Fix Departure Tours",
      "Hotel Booking",
      "Rental: Tent / Sack / Sleeping Bag",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_2fr]">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-heading text-2xl font-extrabold">EXPLORERS</h3>
              <p className="mb-4 text-sm text-primary-foreground/70">Treks & Tours</p>
              <p className="text-sm leading-relaxed text-primary-foreground/80">
                Since 2001 - The Name of Excellence. Crafting unforgettable adventure experiences across India and
                beyond.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <a
                href="tel:+919850506622"
                className="flex items-start gap-2 text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Treks / Himalaya / Jungle Safari: 9850506622</span>
              </a>
              <a
                href="tel:+919850504433"
                className="flex items-start gap-2 text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Tours / Corporate / School: 9850504433</span>
              </a>
              <a
                href="https://wa.me/919850504437"
                className="flex items-start gap-2 text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>WhatsApp details only: 9850504437</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>1692, Bhagyadarshan Building, Shop No 5, Sadashiv Peth, Tilak Road, Pune 411030</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-4 font-heading text-lg font-bold">{group.title}</h4>
                <ul className="space-y-2 text-sm">
                  {group.links.map((label) => (
                    <li key={label}>
                      <Link
                        to="/"
                        className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 md:flex-row">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Explorers Treks & Tours. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Live Instagram", "Facebook Page", "YouTube", "Google Review"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
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
