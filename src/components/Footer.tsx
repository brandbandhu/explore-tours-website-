import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";

const footerGroups = [
  {
    title: "Useful Links",
    links: [
      ["How to Book", "/contact"],
      ["Cancellation Policy", "/contact"],
      ["Rules During Event", "/contact"],
      ["Discount Policy", "/contact"],
      ["Privacy Policy", "/contact"],
      ["Rules & Regulations", "/contact"],
      ["FAQ", "/#faq"],
      ["Work With Us", "/contact"],
      ["Career Opportunities", "/contact"],
      ["Why Explorers", "/about"],
      ["Fitness", "/programs/mountain-run"],
      ["Blog", "/"],
    ],
  },
  {
    title: "Speciality",
    links: [
      ["Upcoming Events", "/treks"],
      ["Treks", "/treks"],
      ["Camping", "/treks?type=Camping"],
      ["Summer Camps", "/programs/junior-explorers"],
      ["Children Camps", "/programs/junior-explorers"],
      ["Jungle Safari", "/programs/wildlife-tours"],
      ["Himalayan Treks", "/programs/himalayan-explorers"],
      ["Kokan Tours", "/programs/customised-packages"],
      ["Treks & Tours for 40+", "/programs/silver-explorers"],
      ["Women Special", "/programs/lady-explorers"],
      ["Bike Safari", "/programs/on-wheels"],
      ["Marathon", "/programs/mountain-run"],
    ],
  },
  {
    title: "We Also Offer",
    links: [
      ["Leaders Training Programme", "/atlas"],
      ["School & Educational Tours", "/programs/school-tours"],
      ["Corporate / Team Building Tours", "/programs/corporate-tours"],
      ["Domestic Tours", "/programs/customised-packages"],
      ["International Tours", "/programs/customised-packages"],
      ["Customised Tour Packages", "/programs/customised-packages"],
      ["Fix Departure Tours", "/programs/group-tours"],
      ["Hotel Booking", "/contact"],
      ["Villa & Resort Booking", "/contact"],
      ["Cruise Booking", "/contact"],
      ["Membership", "/contact"],
      ["Rental: Tent / Sack / Sleeping Bag", "/contact"],
    ],
  },
];

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Treks", "/treks"],
  ["Camping", "/treks?type=Camping"],
  ["Speciality Tours", "/programs/lady-explorers"],
  ["Customised Tour Packages", "/programs/customised-packages"],
  ["Group Tours", "/programs/group-tours"],
  ["Offbeat Tours", "/programs/offbeat-tours"],
  ["ATLAS Academy", "/atlas"],
  ["Mountain Run", "/programs/mountain-run"],
  ["School Tours", "/programs/school-tours"],
  ["Corporate Tours", "/programs/corporate-tours"],
  ["Contact Us", "/contact"],
  ["FAQ", "/#faq"],
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com/explorers_group/", Instagram],
  ["Facebook", "https://www.facebook.com/Explorers.DareToDiscover/", Facebook],
  ["YouTube", "https://www.youtube.com/channel/UC5ffVZUnp2p2Bi6VqNyMRcw", Youtube],
];

const Footer = () => {
  return (
    <footer className="gradient-primary text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,2fr)]">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-heading text-3xl font-extrabold">EXPLORERS</h3>
              <p className="mb-4 text-sm font-semibold text-foreground/75">Treks, Tours and Training</p>
              <p className="text-sm leading-relaxed text-foreground/80">
                Since 2001 - The Name of Excellence. Trusted by lakhs of explorers for safe treks, camps, tours,
                school programs, corporate events and customised travel.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <a href="tel:+919850506622" className="flex items-start gap-2 text-foreground/80 hover:text-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Treks / Himalaya / Jungle Safari: 9850506622</span>
              </a>
              <a href="tel:+919850504433" className="flex items-start gap-2 text-foreground/80 hover:text-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Tours / Corporate / School: 9850504433</span>
              </a>
              <a href="tel:+919850502723" className="flex items-start gap-2 text-foreground/80 hover:text-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Office: 9850502723</span>
              </a>
              <a href="https://wa.me/919850504437" className="flex items-start gap-2 text-foreground/80 hover:text-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>WhatsApp details only: 9850504437</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1692+Bhagyadarshan+Building+Shop+No+5+Sadashiv+Peth+Tilak+Road+Pune+411030"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-foreground/80 hover:text-foreground"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>1692, Bhagyadarshan Building, Shop No 5, Sadashiv Peth, Tilak Road, Pune 411030</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 min-[520px]:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="mb-4 font-heading text-lg font-bold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {quickLinks.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="break-words text-foreground/75 transition-colors hover:text-foreground">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-4 font-heading text-lg font-bold">{group.title}</h4>
                <ul className="space-y-2 text-sm">
                  {group.links.map(([label, href]) => (
                    <li key={label}>
                      <Link to={href} className="break-words text-foreground/75 transition-colors hover:text-foreground">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/20 pt-8 md:flex-row">
          <p className="text-sm text-foreground/65">
            © {new Date().getFullYear()} Explorers Treks & Tours. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map(([label, href, Icon]) => (
              <a
                key={label as string}
                href={href as string}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-foreground/75 transition-colors hover:bg-foreground/20 hover:text-foreground"
                aria-label={label as string}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
