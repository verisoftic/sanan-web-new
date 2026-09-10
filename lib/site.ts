// NOTE: Values marked DUMMY are placeholders to be replaced with real
// company data before launch (per owner sign-off).

export const site = {
  name: "Sanan Manufacturing",
  legalName: "Sanan Manufacturing SMC — Private Limited",
  tagline: "Medical Device Mfg",
  phone: "+92 345 8585889",
  phoneHref: "tel:+923458585889",
  email: "info@sananmanufacturing.com",
  salesEmail: "sales@sananmanufacturing.com", // DUMMY
  address: "Gadoon Industrial Estate, Swabi, KPK, Pakistan",
  addressFull:
    "Plot 42-B, Industrial Estate Gadoon Amazai, Swabi, Khyber Pakhtunkhwa (KPK), Pakistan",
  coordinates: "34.1287° N, 72.6372° E",
  whatsapp: "https://wa.me/923458585889",
};

// DUMMY company facts — replace with verified figures.
export const company = {
  founded: 2015,
  yearsExperience: "10+",
  annualCapacity: 50, // million units/yr (headline)
  countriesServed: 24,
  citiesServed: 40, // cities across Pakistan
  hospitals: 500, // hospitals & clinics served
  coreLines: 6,
  facilitySqft: "120,000",
  cleanroomClass: "10,000",
  opticalTesting: "100%",
};

// DUMMY split addresses
export const offices = {
  registered: {
    label: "Registered Office",
    lines: ["Office 4, 2nd Floor, Executive Tower", "University Road, Peshawar, KPK, Pakistan"],
    phone: "+92 91 000 0000",
  },
  factory: {
    label: "Manufacturing Plant",
    lines: ["Plot 42-B, Industrial Estate Gadoon Amazai", "Swabi, Khyber Pakhtunkhwa, Pakistan"],
    phone: "+92 345 8585889",
  },
};

// DUMMY social links
export const socials = [
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/" },
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/" },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Quality", href: "/quality" },
  { label: "OEM", href: "/oem" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

// Primary items shown in the desktop bar.
export const primaryNav = nav.filter((n) =>
  ["/", "/products", "/about", "/quality", "/oem", "/gallery", "/faq", "/contact"].includes(n.href)
);

export const facts = [
  { icon: "verified_user", value: "Zero-Tolerance", label: "Quality Control" },
  { icon: "air", value: "Class 10,000", label: "Cleanroom Facility" },
  { icon: "public", value: "Global Ready", label: "EU / WHO Compliant" },
  { icon: "category", value: "6 Core Lines", label: "Precision Hardware" },
];

export const pillars = [
  {
    icon: "health_and_safety",
    title: "ISO-Aligned Quality",
    body: "Manufactured under strict ISO 13485 quality-controlled processes with full traceability on raw polymers.",
  },
  {
    icon: "sanitizer",
    title: "Sterile Production",
    body: "Cleanroom-controlled Class 10,000 positive-pressure manufacturing environment, eliminating bioburden risks.",
  },
  {
    icon: "precision_manufacturing",
    title: "Precision Engineering",
    body: "Every syringe, cannula, and drip set is built to exact clinical tolerance with micro-precision Swiss molds.",
  },
  {
    icon: "language",
    title: "Global Standards",
    body: "Built to meet international healthcare standards, accepted by major teaching hospitals and procurement bodies.",
  },
];

// DUMMY certifications — replace files in /public/docs and details before launch.
export interface Certification {
  code: string;
  name: string;
  issuer: string;
  file: string;
}

export const certifications: Certification[] = [
  { code: "ISO 13485:2016", name: "Medical Device QMS", issuer: "TÜV — Accredited Body", file: "/docs/iso-13485.pdf" },
  { code: "ISO 9001:2015", name: "Quality Management", issuer: "TÜV — Accredited Body", file: "/docs/iso-9001.pdf" },
  { code: "ISO 10993", name: "Biocompatibility", issuer: "Notified Laboratory", file: "/docs/iso-10993.pdf" },
  { code: "GMP", name: "Good Manufacturing Practice", issuer: "DRAP Pakistan", file: "/docs/gmp-certificate.pdf" },
  { code: "CE-Ready", name: "EU Conformity Pathway", issuer: "EU MDR", file: "/docs/ce-declaration.pdf" },
  { code: "DRAP", name: "Registered Manufacturer", issuer: "Govt. of Pakistan", file: "/docs/drap-registration.pdf" },
];

// DUMMY provinces/regions for the nationwide-reach section (city counts).
export const regions = [
  { name: "Punjab", cities: 12 },
  { name: "Sindh", cities: 8 },
  { name: "Khyber Pakhtunkhwa", cities: 7 },
  { name: "Balochistan", cities: 5 },
  { name: "Islamabad (ICT)", cities: 2 },
  { name: "Gilgit-Baltistan", cities: 3 },
  { name: "Azad Kashmir", cities: 3 },
];

// DUMMY major-city nodes on the Pakistan map (coordinates in the map's viewBox 0 0 612 560).
export interface CityNode {
  name: string;
  x: number;
  y: number;
  hub?: boolean;
  // label placement
  anchor?: "start" | "middle" | "end";
  dx?: number;
  dy?: number;
}

export const pakistanCities: CityNode[] = [
  { name: "Islamabad", x: 464, y: 143, hub: true, anchor: "start", dx: 9, dy: 15 },
  { name: "Lahore", x: 508, y: 228, anchor: "start", dx: 9, dy: 4 },
  { name: "Karachi", x: 254, y: 496, anchor: "end", dx: -9, dy: 4 },
  { name: "Peshawar", x: 413, y: 129, anchor: "end", dx: -9, dy: 2 },
  { name: "Quetta", x: 254, y: 283, anchor: "end", dx: -9, dy: 4 },
  { name: "Multan", x: 411, y: 284, anchor: "end", dx: -9, dy: 4 },
  { name: "Faisalabad", x: 465, y: 233, anchor: "start", dx: 9, dy: 14 },
  { name: "Hyderabad", x: 301, y: 474, anchor: "end", dx: -9, dy: 4 },
  { name: "Sukkur", x: 318, y: 382, anchor: "end", dx: -9, dy: 4 },
  { name: "Gilgit", x: 508, y: 53, anchor: "start", dx: 9, dy: 4 },
  { name: "Muzaffarabad", x: 496, y: 118, anchor: "start", dx: 9, dy: 4 },
];

// Simplified Pakistan outline (incl. Gilgit-Baltistan & full Kashmir), viewBox 0 0 612 560.
export const pakistanPath =
  "M563,10 L602,70 L515,130 L518,190 L542,250 L515,290 L494,330 L435,370 L379,390 L393,450 L382,518 L316,542 L254,530 L219,482 L149,482 L90,486 L66,482 L80,430 L94,370 L107,314 L149,310 L229,266 L278,230 L334,218 L355,170 L396,126 L410,86 L414,50 L462,14 L515,10 Z";
