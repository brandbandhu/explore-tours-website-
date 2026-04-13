import heroMountains from "@/assets/hero-mountains.jpg";
import heroCamping from "@/assets/hero-camping.jpg";
import heroKids from "@/assets/hero-kids.jpg";
import heroWomen from "@/assets/hero-women.jpg";

export interface Trek {
  id: string;
  title: string;
  location: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Difficult" | "Extreme";
  endurance: "Low" | "Medium" | "High" | "Very High";
  ageGroup: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  overview: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  includes: string[];
  excludes: string[];
  month: string[];
  tourType: "Weekend Trek" | "Himalayan Trek" | "Night Trek" | "Camping" | "Tour";
  gallery: string[];
  featured?: boolean;
}

export const heroSlides = [
  {
    image: heroMountains,
    title: "Conquer the Himalayas",
    subtitle: "Experience breathtaking treks through the world's highest peaks",
  },
  {
    image: heroCamping,
    title: "Camp Under the Stars",
    subtitle: "Premium camping experiences in the heart of nature",
  },
  {
    image: heroKids,
    title: "Junior Explorers",
    subtitle: "Adventure programs designed for young trailblazers",
  },
  {
    image: heroWomen,
    title: "Lady Explorers",
    subtitle: "Empowering women through mountain adventures",
  },
];

export const categories = [
  { name: "Weekend Treks", icon: "⛰️", link: "/treks?type=Weekend+Trek" },
  { name: "Junior Explorers", icon: "🧒", link: "/programs/junior-explorers" },
  { name: "Lady Explorers", icon: "👩", link: "/programs/lady-explorers" },
  { name: "Silver Trails", icon: "🏔️", link: "/programs/silver-trails" },
  { name: "On Wheels", icon: "🚗", link: "/programs/on-wheels" },
  { name: "Mountain Run", icon: "🏃", link: "/programs/mountain-run" },
];

export const treks: Trek[] = [
  {
    id: "rajgad-fort",
    title: "Rajgad Fort Trek",
    location: "Sahyadri, Maharashtra",
    duration: "1 Day",
    difficulty: "Moderate",
    endurance: "Medium",
    ageGroup: "12-60",
    price: 1499,
    originalPrice: 1999,
    image: heroMountains,
    description: "Explore the majestic Rajgad Fort, the former capital of the Maratha Empire.",
    overview: "Rajgad Fort, meaning 'King's Fort', served as the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj for almost 26 years before the capital was shifted to Raigad Fort. Standing at 4,600 feet above sea level, this trek offers stunning views of the surrounding Sahyadri ranges.",
    highlights: [
      "Summit at 4,600 feet with 360° panoramic views",
      "Explore Padmavati Machi and Sanjivani Machi",
      "Historical Maratha architecture",
      "Sunrise/Sunset views from the top",
      "Expert guides with first-aid training",
    ],
    itinerary: [
      { day: 1, title: "Base to Summit", description: "Arrive at Gunjavne base village by 6 AM. Begin the trek through the scenic forest trail. Reach Padmavati Machi by 9 AM. Explore Balekilla (citadel) and Sanjivani Machi. Descend by 4 PM." },
    ],
    includes: ["Expert trek leader", "First aid kit", "Breakfast & lunch", "Certificate"],
    excludes: ["Transportation to base", "Personal expenses", "Travel insurance"],
    month: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    tourType: "Weekend Trek",
    gallery: [heroMountains, heroCamping],
    featured: true,
  },
  {
    id: "kedarkantha",
    title: "Kedarkantha Trek",
    location: "Uttarakhand, Himalayas",
    duration: "6 Days",
    difficulty: "Moderate",
    endurance: "Medium",
    ageGroup: "14-55",
    price: 8999,
    originalPrice: 11999,
    image: heroWomen,
    description: "One of the best winter treks in India with stunning snow-covered peaks.",
    overview: "Kedarkantha is a summit climb in the Govind Wildlife Sanctuary that offers a perfect blend of dense pine forests, pristine meadows, and a spectacular summit climb to 12,500 feet. The panoramic views from the top include Swargarohini, Bandarpoonch, and Kala Nag peaks.",
    highlights: [
      "Summit at 12,500 feet",
      "Snow-covered trails in winter",
      "Camp in beautiful alpine meadows",
      "Views of Swargarohini and Bandarpoonch",
      "Rich biodiversity of Govind Sanctuary",
    ],
    itinerary: [
      { day: 1, title: "Dehradun to Sankri", description: "Drive from Dehradun to Sankri (8-9 hours). Settle in guesthouse. Briefing session." },
      { day: 2, title: "Sankri to Juda Ka Talab", description: "Trek through oak and pine forests (4 km, 4-5 hours). Camp near the frozen lake." },
      { day: 3, title: "Juda Ka Talab to Kedarkantha Base", description: "Trek through open meadows (3 km, 3-4 hours). Set up camp at base." },
      { day: 4, title: "Summit Day & Descent to Hargaon", description: "Early morning summit push (3 km). 360° views from the top. Descend to Hargaon camp." },
      { day: 5, title: "Hargaon to Sankri", description: "Descend back to Sankri (6 km, 4-5 hours). Celebration dinner." },
      { day: 6, title: "Sankri to Dehradun", description: "Drive back to Dehradun. Trip ends by afternoon." },
    ],
    includes: ["All meals during trek", "Camping equipment", "Trek leader & guides", "Forest permits", "First aid & safety equipment"],
    excludes: ["Travel to/from Dehradun", "Personal clothing & gear", "Travel insurance", "Tips"],
    month: ["Dec", "Jan", "Feb", "Mar", "Apr"],
    tourType: "Himalayan Trek",
    gallery: [heroWomen, heroMountains],
    featured: true,
  },
  {
    id: "night-trek-lohagad",
    title: "Night Trek to Lohagad",
    location: "Lonavala, Maharashtra",
    duration: "1 Night",
    difficulty: "Easy",
    endurance: "Low",
    ageGroup: "10-65",
    price: 999,
    image: heroCamping,
    description: "Experience the thrill of night trekking under the starlit sky.",
    overview: "Lohagad, meaning 'Iron Fort', rises to 3,400 feet. This night trek offers a magical experience of walking through ancient trails under moonlight, with a stunning sunrise from the fort.",
    highlights: [
      "Moonlight trekking experience",
      "Sunrise from Vinchukata point",
      "Explore Lohagad Fort history",
      "Stargazing opportunity",
      "Suitable for beginners",
    ],
    itinerary: [
      { day: 1, title: "Night Trek", description: "Gather at base by 11 PM. Begin night trek with headlamps. Reach the top by 2 AM. Rest and stargaze. Watch the sunrise at 6 AM. Descend by 9 AM." },
    ],
    includes: ["Expert guide", "Morning tea & snacks", "First aid", "Certificate"],
    excludes: ["Transportation", "Dinner", "Personal gear"],
    month: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    tourType: "Night Trek",
    gallery: [heroCamping, heroMountains],
    featured: true,
  },
  {
    id: "valley-of-flowers",
    title: "Valley of Flowers Trek",
    location: "Uttarakhand, Himalayas",
    duration: "7 Days",
    difficulty: "Moderate",
    endurance: "High",
    ageGroup: "16-55",
    price: 12999,
    originalPrice: 15999,
    image: heroKids,
    description: "UNESCO World Heritage Site with over 600 species of flowering plants.",
    overview: "The Valley of Flowers National Park is a UNESCO World Heritage Site nestled in the western Himalayas. This trek takes you through spectacular alpine meadows carpeted with hundreds of varieties of wildflowers.",
    highlights: [
      "UNESCO World Heritage Site",
      "600+ species of flowering plants",
      "Visit Hemkund Sahib",
      "Stunning Himalayan vistas",
      "Rich alpine biodiversity",
    ],
    itinerary: [
      { day: 1, title: "Haridwar to Govindghat", description: "Drive from Haridwar to Govindghat (10 hours). Night stay." },
      { day: 2, title: "Govindghat to Ghangaria", description: "Trek to Ghangaria (9 km, 5-6 hours)." },
      { day: 3, title: "Valley of Flowers", description: "Explore the valley (8 km round trip). Photography and exploration." },
      { day: 4, title: "Hemkund Sahib", description: "Trek to Hemkund Sahib (6 km, 5-6 hours). Return to Ghangaria." },
      { day: 5, title: "Valley of Flowers Again", description: "Second visit to explore deeper parts of the valley." },
      { day: 6, title: "Ghangaria to Govindghat", description: "Descend to Govindghat. Rest." },
      { day: 7, title: "Govindghat to Haridwar", description: "Drive back to Haridwar." },
    ],
    includes: ["All meals", "Camping gear", "Trek guides", "Permits", "First aid"],
    excludes: ["Travel to Haridwar", "Personal items", "Insurance", "Porter charges"],
    month: ["Jul", "Aug", "Sep"],
    tourType: "Himalayan Trek",
    gallery: [heroKids, heroMountains],
    featured: true,
  },
  {
    id: "pawna-lake-camping",
    title: "Pawna Lake Camping",
    location: "Lonavala, Maharashtra",
    duration: "1 Night",
    difficulty: "Easy",
    endurance: "Low",
    ageGroup: "5-70",
    price: 1299,
    image: heroCamping,
    description: "Lakeside camping with bonfire, BBQ, and stunning sunset views.",
    overview: "Pawna Lake is a scenic lake surrounded by the Sahyadri mountains. This overnight camping experience includes lakeside tents, barbecue dinner, bonfire, music, and a beautiful sunrise over the lake.",
    highlights: [
      "Lakeside tent camping",
      "BBQ dinner & bonfire",
      "Sunrise over Pawna Lake",
      "Perfect for families",
      "Live music & activities",
    ],
    itinerary: [
      { day: 1, title: "Evening Arrival to Morning", description: "Check-in by 4 PM. Evening tea. Watch sunset. BBQ dinner at 8 PM. Bonfire & music. Morning tea and breakfast. Check-out by 10 AM." },
    ],
    includes: ["Tent stay", "BBQ dinner", "Breakfast", "Bonfire", "Parking"],
    excludes: ["Transportation", "Extra snacks", "Adventure activities"],
    month: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    tourType: "Camping",
    gallery: [heroCamping, heroWomen],
    featured: true,
  },
  {
    id: "hampta-pass",
    title: "Hampta Pass Trek",
    location: "Himachal Pradesh",
    duration: "5 Days",
    difficulty: "Difficult",
    endurance: "High",
    ageGroup: "16-50",
    price: 9999,
    originalPrice: 12999,
    image: heroMountains,
    description: "A dramatic crossover trek from lush Kullu valley to barren Spiti.",
    overview: "Hampta Pass at 14,010 feet is one of the most dramatic crossover treks in the Himalayas. You go from the lush green Kullu valley to the arid, barren landscape of Lahaul-Spiti in just one day. The contrast is surreal.",
    highlights: [
      "Dramatic landscape change",
      "Cross 14,010 ft Hampta Pass",
      "Visit Chandratal Lake (optional)",
      "Stunning meadows of Jwara",
      "River crossings and glacial valleys",
    ],
    itinerary: [
      { day: 1, title: "Manali to Jobra to Chika", description: "Drive to Jobra. Trek to Chika (3 km). Camp setup." },
      { day: 2, title: "Chika to Balu Ka Ghera", description: "Trek through meadows (10 km, 5-6 hours)." },
      { day: 3, title: "Balu Ka Ghera to Siagoru via Hampta Pass", description: "Summit day! Cross the pass. Dramatic landscape change." },
      { day: 4, title: "Siagoru to Chatru", description: "Descend to Chatru (6 km). Drive to Chandratal (optional)." },
      { day: 5, title: "Chatru to Manali", description: "Drive back to Manali via Rohtang." },
    ],
    includes: ["All meals", "Camping equipment", "Guides", "Permits", "First aid"],
    excludes: ["Travel to Manali", "Chandratal visit", "Insurance"],
    month: ["Jun", "Jul", "Aug", "Sep", "Oct"],
    tourType: "Himalayan Trek",
    gallery: [heroMountains, heroWomen],
    featured: true,
  },
];

export const trustStats = [
  { number: "24+", label: "Years Experience", icon: "🏆" },
  { number: "2L+", label: "Happy Members", icon: "👥" },
  { number: "500+", label: "Treks Completed", icon: "⛰️" },
  { number: "100%", label: "Safety Record", icon: "🛡️" },
];

export const specialPrograms = [
  {
    id: "junior-explorers",
    title: "Junior Explorers",
    description: "Adventure programs designed for children aged 8-15 with focus on nature education, team building, and outdoor skills.",
    image: heroKids,
    ageGroup: "8-15 years",
  },
  {
    id: "lady-explorers",
    title: "Lady Explorers",
    description: "Women-only treks creating a safe space for adventure, bonding, and self-discovery in the mountains.",
    image: heroWomen,
    ageGroup: "18-60 years",
  },
  {
    id: "silver-trails",
    title: "Silver Trails",
    description: "Gentle treks and nature walks designed for senior citizens who love the outdoors.",
    image: heroMountains,
    ageGroup: "50+ years",
  },
  {
    id: "on-wheels",
    title: "Explorers on Wheels",
    description: "Road trips and self-drive expeditions to offbeat destinations across India.",
    image: heroCamping,
    ageGroup: "All ages",
  },
  {
    id: "mountain-run",
    title: "Mountain Run",
    description: "Trail running events in the Sahyadri mountains for fitness enthusiasts.",
    image: heroMountains,
    ageGroup: "16-45 years",
  },
];

export const faqs = [
  {
    question: "What fitness level is required for treks?",
    answer: "Each trek has a difficulty and endurance rating. Easy treks require basic fitness, while difficult treks need regular exercise and stamina training at least 2 months prior.",
  },
  {
    question: "What should I carry for a trek?",
    answer: "We provide a detailed checklist after booking. Essentials include trekking shoes, backpack, water bottle, rain gear, warm layers, headlamp, and personal medications.",
  },
  {
    question: "Is it safe for solo travelers?",
    answer: "Absolutely! Over 60% of our members join solo. Our groups are well-guided, and you'll make lifelong friends on the trail. Safety is our top priority with certified guides and first-aid support.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Full refund if cancelled 15+ days before. 50% refund for 7-14 days before. No refund within 7 days. You can transfer your booking to another person at no extra cost.",
  },
  {
    question: "Do you provide transportation?",
    answer: "Most treks include pickup from a common point (usually a city bus stand or railway station). Private transportation can be arranged at additional cost.",
  },
  {
    question: "Are your guides certified?",
    answer: "Yes! All our trek leaders are certified by recognized mountaineering institutes. They hold first-aid and wilderness rescue certifications. We maintain a 1:10 guide-to-participant ratio.",
  },
];
