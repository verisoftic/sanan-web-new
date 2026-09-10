export type ProductCategory = "syringes" | "infusion" | "blood";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  categoryLabel: string;
  iso: string;
  sterileTag: string;
  range: string;
  image: string;
  catalogImage: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
}

export const products: Product[] = [
  {
    slug: "nova-syringes",
    name: "Nova Syringes",
    tagline: "Precision. Every dose.",
    category: "syringes",
    categoryLabel: "Syringes",
    iso: "ISO 7886-1",
    sterileTag: "EO Sterile",
    range: "1ml – 20ml",
    image: "/images/syringes.jpg",
    catalogImage: "/images/cat-syringes.jpg",
    description:
      "Sterile, single-use syringes engineered for accurate, comfortable dosing across clinical and surgical environments with zero back-leakage.",
    specs: [
      { label: "Dead Space", value: "≤ 0.015 ml (Ultra-Low)" },
      { label: "Barrel Metric", value: "Laser Indelible Etch" },
      { label: "Plunger Stroke", value: "Medical Silicone Coated" },
    ],
    features: ["Sterile & Single-Use", "Low Dead-Space", "Luer Lock & Slip"],
  },
  {
    slug: "nova-iv-kits",
    name: "Nova IV Kits",
    tagline: "Reliable IV administration.",
    category: "infusion",
    categoryLabel: "Infusion & IV",
    iso: "ISO 8536-4",
    sterileTag: "Sterile Fluid Path",
    range: "Gravity Infusion",
    image: "/images/iv-kits.jpg",
    catalogImage: "/images/cat-iv-kits.jpg",
    description:
      "Complete intravenous administration sets built for a secure, uninterrupted fluid path with ultra-smooth flow regulation.",
    specs: [
      { label: "Tubing Length", value: "150 cm / 180 cm Kink-Proof" },
      { label: "Connector", value: "Universal Male Luer Lock" },
      { label: "Filter Membrane", value: "15μm Hydrophobic Screen" },
    ],
    features: ["Kink-Resistant Tubing", "Air-Vented Spike", "Smooth Roller Clamp"],
  },
  {
    slug: "nova-drips",
    name: "Nova Drips",
    tagline: "Controlled fluid delivery.",
    category: "infusion",
    categoryLabel: "Infusion & IV",
    iso: "ISO Certified",
    sterileTag: "DEHP-Free",
    range: "20 & 60 Drops/ml",
    image: "/images/drips.jpg",
    catalogImage: "/images/cat-drips.jpg",
    description:
      "High-clarity infusion sets delivering precise, consistent drop formation for patient safety across prolonged medication infusions.",
    specs: [
      { label: "Chamber Type", value: "Cylindrical Flexible Squeeze" },
      { label: "Material Grade", value: "USP Class VI Medical Polymer" },
      { label: "Flow Control", value: "Precision Micro Roller" },
    ],
    features: ["Precise Flow Rate", "DEHP-Free Formulation", "Non-Toxic Pyrogen-Free"],
  },
  {
    slug: "nova-cannula",
    name: "Nova Cannula",
    tagline: "Smooth, low-trauma access.",
    category: "syringes",
    categoryLabel: "Syringes",
    iso: "ISO 10555-5",
    sterileTag: "Tri-Bevel Cut",
    range: "14G – 26G Gauges",
    image: "/images/cannula.jpg",
    catalogImage: "/images/cat-cannula.jpg",
    description:
      "Ergonomic IV cannulas designed with an ultra-sharp back-cut bevel for significantly smoother, low-trauma venipuncture insertion.",
    specs: [
      { label: "Catheter Material", value: "Radiopaque PTFE / FEP" },
      { label: "Flashback", value: "Rapid Blood Return Chamber" },
      { label: "Wing Ergonomics", value: "Color-Coded Anti-Slip Grip" },
    ],
    features: ["Ultra-Sharp Bevel", "Color-Coded Sizes", "Secure Wing Design"],
  },
  {
    slug: "nova-blood-bags",
    name: "Nova Blood Bags",
    tagline: "Safe blood collection.",
    category: "blood",
    categoryLabel: "Blood Banking",
    iso: "ISO 3826-1",
    sterileTag: "CPDA-1 Solution",
    range: "350ml / 450ml",
    image: "/images/blood-bags.jpg",
    catalogImage: "/images/cat-blood-bags.jpg",
    description:
      "Durable, leak-proof blood collection bags built to the highest safety standards with superior red cell preservation up to 35 days.",
    specs: [
      { label: "Anticoagulant", value: "Pre-filled CPDA-1 / CPD" },
      { label: "Sealing System", value: "High-Frequency Welded Seam" },
      { label: "Needle Gauge", value: "16G Ultra-Thin Wall" },
    ],
    features: ["Leak-Proof Welds", "Clear Volumetric Grad", "Tamper-Proof Seals"],
  },
  {
    slug: "nova-blood-bag-kits",
    name: "Nova Blood Bag Kits",
    tagline: "Efficient transfusion systems.",
    category: "blood",
    categoryLabel: "Blood Banking",
    iso: "GMP Validated",
    sterileTag: "Double / Triple / Quad",
    range: "Closed Transfer",
    image: "/images/blood-bag-kits.jpg",
    catalogImage: "/images/cat-blood-bag-kits.jpg",
    description:
      "Complete multi-bag transfusion kits engineered for sterile blood component separation (PRBC, Platelets, Plasma) with zero microbial risk.",
    specs: [
      { label: "System Architecture", value: "Closed-Loop Multi-Bag" },
      { label: "Inline Filter", value: "High-Efficiency Leukoreduction" },
      { label: "Platelet Storage", value: "Extended 5-Day Gas Permeable" },
    ],
    features: ["Multi-Bag Configs", "Integrated Tubing", "Sterile & Validated"],
  },
];

export const categories: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "syringes", label: "Syringes" },
  { id: "infusion", label: "Infusion & IV" },
  { id: "blood", label: "Blood Banking" },
];
