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

// DUMMY export regions for the global-reach section.
export const regions = [
  { name: "South Asia", countries: 4, icon: "public" },
  { name: "Middle East", countries: 7, icon: "public" },
  { name: "Africa", countries: 6, icon: "public" },
  { name: "Southeast Asia", countries: 4, icon: "public" },
  { name: "Central Asia", countries: 3, icon: "public" },
];
